import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Constants } from './constants/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(process.env.PORT || Constants.GENERAL.DEFAULT_PORT);
}
bootstrap();
