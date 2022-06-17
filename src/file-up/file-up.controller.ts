import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileUpService } from './file-up.service';
import { CreateFileUpDto } from './dto/create-file-up.dto';
import { UpdateFileUpDto } from './dto/update-file-up.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class FileUpController {
  constructor(private readonly fileUpService: FileUpService) {}
  confg = {};
  //upload a single file using interceptors
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
      // const fileName = file.originalname
     if(file){
      this.fileUpService.create({file});
       return 'data added successfully'+'this is your obeject'+"   "+JSON.stringify(file);
     }else{
       return 'no data founded'
         }
     
  }

  //get  all  files using interceptors
  @Get()
  findAll() {
    return this.fileUpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileUpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileUpDto: UpdateFileUpDto) {
    return this.fileUpService.update(+id, updateFileUpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileUpService.remove(+id);
  }
}
