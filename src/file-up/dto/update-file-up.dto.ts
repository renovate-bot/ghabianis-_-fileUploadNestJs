import { PartialType } from '@nestjs/mapped-types';
import { CreateFileUpDto } from './create-file-up.dto';

export class UpdateFileUpDto extends PartialType(CreateFileUpDto) {}
