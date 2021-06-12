import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Connection } from 'typeorm'
import { from } from 'rxjs';

@Module({
  imports: [AppModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234567890',
    database: 'apiDemo',
    entities: [User],
    synchronize: true

  }),
TypeOrmModule.forFeature([User])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

constructor(private con :Connection){}

}

