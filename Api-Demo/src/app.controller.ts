import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { AppService } from './app.service';
import { PassportStrategy } from '@nestjs/passport';
import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private jwt:JwtService) {}



  // @Get()
  // findAll():Promise<User[]>{
  //   return this.appService.findAll();
  // }
  


  // @Get('/:email')
  // findOne(@Param('email') email: string):Promise<User>{
  //   return this.appService.findOne(email);
  // }


  @Post('login')
  async login(@Body('email') email: string,
        @Body('pass') pass: string){
  let result =  await this.appService.login({email})
   if(!result){
      throw new BadRequestException("Invalid Credentials")
   }

   if(!await bcrypt.compare(pass,result.pass))
{
  throw new BadRequestException("Invalid Password")

}
const jwt=await this.jwt.signAsync({id:result.id})
return jwt
//   return true;
  }

  // @Patch('/:id')
  // Update(@Param() id:number,@Body() user : User){
  //   this.appService.Update(id,user);
  // }

  @Post()
  async create(@Body('firstName') firstName: string,
              @Body('email') email: string,
              @Body('pass') pass: string){
  // const result=this.appService.create(arg);
  // return result
  const hashPassword=await bcrypt.hash(pass,12);
  console.log(hashPassword)
 return this.appService.create({firstName,email,pass:hashPassword})
  }
//taskkill /f /im node.exe
// @Delete('/:id')
// remove(@Param() id: number){
// this.appService.remove(id);
// }

// @Delete()
// removeAll(){
//   this.appService.removeAll()
// }
}
