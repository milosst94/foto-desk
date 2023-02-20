import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageController } from './image.controller';
import { Image } from 'src/entity/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  controllers: [ImageController]
})
export class ImageModule {}
