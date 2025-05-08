import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from "helmet";
import session from 'express-session';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express'; //* Specify we're using Express, not Fastify to HTTP handle

//* Initialize and configure the application
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Helmet
  app.use(helmet());



  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
