import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  @Get()
  findAll():Promise<User[]>{
    return this.appService.findAll();
  }


  @Get('/:id')
  findOne(@Param('id') id: number):Promise<User>{
    return this.appService.findOne(id);
  }



  @Patch('/:id')
  Update(@Param() id:number,@Body() user : User){
    this.appService.Update(id,user);
  }

@Post()
create(@Body() arg: User){
this.appService.create(arg);
}

@Delete('/:id')
remove(@Param() id: number){
this.appService.remove(id);
}

@Delete()
removeAll(){
  this.appService.removeAll()
}
}
