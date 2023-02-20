import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ImageService } from './image/image.service';
import { ImageModule } from './image/image.module';
import { WatermarkController } from './watermark/watermark.controller';
import { WatermarkModule } from './watermark/watermark.module';

@Module({
  imports: [
    UserModule,
    ImageModule,
    WatermarkModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'foto-desk',
      entities: ['./dist/entity/*.entity.js'],
      migrations: ['./dist/migration/*.js'],
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [AppController, WatermarkController],
  providers: [AppService, ImageService],
  exports:[]
})
export class AppModule {}
