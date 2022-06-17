import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateFileUpDto } from './dto/create-file-up.dto';
import { UpdateFileUpDto } from './dto/update-file-up.dto';


@Injectable()
export class FileUpService {
   constructor(private readonly httpClient: HttpService){}
   async create(filename)   {
    return await this.httpClient.axiosRef.post('http://localhost:3000/posts',filename);
  }

  findAll() {
    return `This action returns all fileUp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileUp`;
  }

  update(id: number, updateFileUpDto: UpdateFileUpDto) {
    return `This action updates a #${id} fileUp`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileUp`;
  }
}
