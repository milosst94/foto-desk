import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getResult(a:number, b:number): number{
    return a + b;
  }
}




