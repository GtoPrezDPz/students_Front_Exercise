
import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interfaces/students.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(student: Student): string {

    if (!student.id && !student.alt_img) {
      return 'assets/no-image.png';
    } else if (student.alt_img) {
      return student.alt_img;
    } else {
      return `assets/students/${student.id}.jpg`;
    }

  }

}
