import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { Test } from '@nestjs/testing';

@Injectable()
export class AppService {
 

constructor(
  @InjectRepository(User) private repo: Repository<User>){}

  log:Test[]=[];

  findAll():Promise<User[]>{
    return this.repo.find();
  }

 async Update(id:number,user: User) {

    await this.repo.update(id,user);
  }


   async create(user: User){

    await this.repo.insert(user)
    //console.log(user);
    
    }

    login(test:Test){
      this.log.push(test);
    }


  findOne(email: string):Promise<User>{
    return this.repo.findOne(email);
  }




  async remove(id: number){
     await this.repo.delete(id);
  }



  

  removeAll():Promise<void>{
   return this.repo.clear();
   
   
  }

}
