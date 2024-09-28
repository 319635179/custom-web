import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import GlobalConfig from '../nest.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(GlobalConfig.server.port);
}
bootstrap();
