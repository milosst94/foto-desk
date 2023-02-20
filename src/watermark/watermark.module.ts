import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Watermark } from 'src/entity/watermark.entity';
import { WatermarkService } from './watermark.service';

@Module({
  imports: [TypeOrmModule.forFeature([Watermark])],
  providers: [WatermarkService]
})
export class WatermarkModule {}
