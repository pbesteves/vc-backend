import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import keys from './config/keys';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(keys.mongoURI),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    ProductsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
