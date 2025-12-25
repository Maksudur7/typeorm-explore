import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    DatabaseModule, 
    PhotoModule
  ],
  controllers: [AppController],
  providers: [AppService], // এখান থেকে PhotoService মুছে দিন
})
export class AppModule {}