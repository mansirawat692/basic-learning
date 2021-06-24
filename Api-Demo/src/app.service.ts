import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {


  constructor(
    @InjectRepository(User) private repo: Repository<User>) { }


  findAll(): Promise<User[]> {
    return this.repo.find();
  }


  async Update(id: number, user: User) {
    await this.repo.update(id, user);
  }


  async create(user: User):Promise<boolean> {
    let check=await this.repo.findOne({where: {email: user.email}})
    if(!check){
    await this.repo.insert(user)
    return false
    }
    return true
  }

  async login(user: User): Promise<boolean> {
    let infoCopy = await this.repo.findOne({ where: { email: user.email, pass: user.pass } })
    if (!infoCopy) {
      return false
    }

    //console.log("user.email--->"+info);/
    return true

  }


  /// wait debugger lagwata hu ohkk hit kro api wait
  // ab save krne pe auto restart ho jaya krega vo jo abhi start debuf me kia use?? haan ohkk baby

  // find - ye array of reords deta h .. jitne bhi condition match krte h - array of objects ha to ye error show kr raha th kuch array se related hi pehle
  // hit kro wait angular ke server me time lgta h...band mt kia kro use ohkk
  // findOne - ye first matching record dega bs - object
  findOne(email: string): Promise<User> {
    return this.repo.findOne(email);
  }




  async remove(id: number) {
    await this.repo.delete(id);
  }





  removeAll(): Promise<void> {
    return this.repo.clear();


  }

}
