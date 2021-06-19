import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './model';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
 

constructor(
  @InjectRepository(User) private repo: Repository<User>){}

  findAll():Promise<User[]>{
    return this.repo.find();
  }

 async Update(id:number,user: User) {

    await this.repo.update(id,user);
  }


   async create(user: User){
    //   console.log("this.repo----",this.repo);
    
    // const result=await this.repo.create({
    //     firstName: "Timber",
    //     lastName: "Saw",
    //     email:"timber@sima"
    // });
    // console.log("result ",result)

    // const findResult = await this.repo.find();
    // console.log("findResult",findResult)

    await this.repo.insert(user)
    //console.log(user);
    
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




//  ar: any=[];
//   getHello():User[] {
//     return this.ar;
//   }

//   getHelloById(id:string): User{
//     console.log("id"+id)
//     console.log("val"+this.ar)
//     return this.ar.find(show=>show.id===id);
//   }
 
//   postHello(id:string,name:string):User{
//     const out:any ={
//       id,
//       name
//     }
//     this.ar.push(out);
//     return out;
//   }


//   deleteHello(id:string){
//     console.log("this.arr",this.ar)
//     this.ar=this.ar.filter(ask=>ask.id!==id);
//   }


//   updateHello(id: string, obj:User):boolean{
//     const arr=this.ar.map(x=>{
//       if(x.id==id)
// {
//   return obj
// }

// return x
//     })
//     console.log("arr",arr)
//     this.ar = arr;
//     return true;
  
//   }
}
