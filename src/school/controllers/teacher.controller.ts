import { Controller, Get } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {


  @Get()
  getHello(): Array<any> {
    return [
      {
        id: 'a',
        name: '李老师',
      }
    ];
  }

}
