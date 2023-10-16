import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://amit-softude:9981216097@cluster0.rrlbvxw.mongodb.net/?retryWrites=true&w=majority'),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}


// import { Module } from "@nestjs/common";
// import { AppController } from "./app.controller";
// import { UserModule } from './user/user.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import {  AuthModule } from './auth/auth.module';

// @Module({
//     controllers: [AppController],
//     imports: [
//         MongooseModule.forRoot('mongodb+srv://amit-softude:9981216097@cluster0.rrlbvxw.mongodb.net/?retryWrites=true&w=majority'),
//         UserModule, 
//         AuthModule 
//     ]
// })

// export class AppModule {

// }