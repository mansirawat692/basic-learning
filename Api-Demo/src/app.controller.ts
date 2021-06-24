import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Test } from '@nestjs/testing';
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
  


  @Get('/:email')
  findOne(@Param('email') email: string):Promise<User>{
    return this.appService.findOne(email);
  }


  @Post('login')
  login(@Body() user:User){
  const result =   this.appService.login(user)
   return result
  }

  @Patch('/:id')
  Update(@Param() id:number,@Body() user : User){
    this.appService.Update(id,user);
  }

  @Post()
  create(@Body() arg: User){
  const result=this.appService.create(arg);
  return result
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
