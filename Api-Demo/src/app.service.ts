import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class AppService {


  constructor(
    @InjectRepository(User) private repo: Repository<User>) { }


// create(info: any):Promise<User>{
// return this.repo.save(info)
// }


  // findAll(): Promise<User[]> {
  //   return this.repo.find();
  // }


  // async Update(id: number, user: User) {
  //   await this.repo.update(id, user);
  // }


  async create(user: any):Promise<User> {
    let check=await this.repo.findOne({where: {email: user.email}})
    if(!check){
   return await this.repo.save(user)
    //return false
    }
   // return true
  }

  async login(user: any): Promise<User> {
    return await this.repo.findOne(user)
   
  }

  //   //console.log("user.email--->"+info);/
  //   return true

  // }

  // findOne(email: string): Promise<User> {
  //   return this.repo.findOne(email);
  // }




  // async remove(id: number) {
  //   await this.repo.delete(id);
  // }





  // removeAll(): Promise<void> {
  //   return this.repo.clear();


  // }

}
