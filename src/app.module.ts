import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [CategoriesModule],
  controllers: [AppController],
  providers: [AppService, CategoriesService],
})
export class AppModule {}
