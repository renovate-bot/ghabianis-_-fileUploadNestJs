import { Module } from '@nestjs/common';
import { FileUpService } from './file-up.service';
import { FileUpController } from './file-up.controller';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports : [HttpModule],
  controllers: [FileUpController],
  providers: [FileUpService]
})
export class FileUpModule {}
