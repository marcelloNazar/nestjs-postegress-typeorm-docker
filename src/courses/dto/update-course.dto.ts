import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDTO } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDTO) {}
