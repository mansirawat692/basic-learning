import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Connection } from 'typeorm'
import { JwtModule } from '@nestjs/jwt';

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
TypeOrmModule.forFeature([User]),
JwtModule.register({
  secret:'secret',
  signOptions:{expiresIn:'1d'}
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

constructor(private con :Connection){}

}

