import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly httpService: HttpService) {}

  async getSystemStatus() {
    const aiEngineUrl = process.env.AI_ENGINE_URL || 'http://localhost:8000/health';
    let aiStatus = { status: 'offline', service: 'ai-engine', version: 'unknown' };

    try {
      const { data } = await firstValueFrom(
        this.httpService.get(aiEngineUrl).pipe(
          catchError((error) => {
            this.logger.error(`AI Engine unreachable: ${error.message}`);
            throw error;
          }),
        ),
      );
      aiStatus = data;
    } catch (error) {
      // 🛡️ Graceful Degradation: Return offline status instead of 500 error
    }

    return {
      core: {
        status: 'ok',
        service: 'backend-core',
        timestamp: new Date().toISOString(),
      },
      ai: aiStatus,
    };
  }
}