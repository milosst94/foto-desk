import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostCreateDto } from './dto/postcreate.dto';

@Controller("/test")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/:id")
  getResult(@Param("id") id:number): number {
    const a = 10;
    const b = 2;
    console.log(id)
  return this.appService.getResult(a,b)
 }
 @Post("/posts")
 saveData( @Body() body: PostCreateDto){
     console.log(body)
 }
}


