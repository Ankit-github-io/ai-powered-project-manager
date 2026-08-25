import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Strict Network Boundary Enforcement (CORS)
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  // 🛡️ ENFORCED PORT 4000
  const port = process.env.PORT || 4000;
  await app.listen(port);
  
  console.log(`🚀 Relational Core running securely on: http://localhost:${port}`);
}
bootstrap();