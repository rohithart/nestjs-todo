import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ToDo API')
    .setDescription('The REST API for ToDo application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document); // Pointing to the main page.

  await app.listen(3000);
  console.log(`ToDo API is running on: ${await app.getUrl()}`);
}
bootstrap();
