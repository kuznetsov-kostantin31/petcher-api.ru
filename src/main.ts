import * as process from "process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";


async function start(){
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule, {cors: true})

    const config = new DocumentBuilder()
        .setTitle('PETCHER PROJECT')
        .setDescription('Бэкенд часть Petcher project')
        .setVersion('0.4.8.2')
        .addTag('Petcher Team')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())
    await app.listen(PORT, ()=>console.log(`Server started on port: ${PORT}`))
}

start()