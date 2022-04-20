import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interfaces/students.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(student: Student): string {
    return `assets/students/${ student.id }.jpg`;
  }

}
