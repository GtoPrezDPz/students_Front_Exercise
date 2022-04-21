import { Component, Input } from '@angular/core';
import { Student } from '../../interfaces/students.interface';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styles: [`
  mat-card {
    margin-top:20px
  }
  `]
})
export class StudentCardComponent {

@Input() student!: Student;
  

}
