import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseStrategyModule } from './supabase-strategy/supabase-strategy.module';
import { AuthModule } from './auth/auth.module';
import { FileUpModule } from './file-up/file-up.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { FileUpService } from './file-up/file-up.service';

@Module({
  imports: [SupabaseStrategyModule, AuthModule, FileUpModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),],
    
    
  controllers: [AppController],
  providers: [AppService,FileUpService],
})
export class AppModule {}
