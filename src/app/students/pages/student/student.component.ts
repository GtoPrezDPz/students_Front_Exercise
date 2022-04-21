import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Student } from '../../interfaces/students.interface';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius:5px;
  }
  `
  ]
})
export class StudentComponent implements OnInit {

  student!: Student;

  constructor( private activatedRoute: ActivatedRoute, 
               private studentsService: StudentsService,
               private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.studentsService.getStudentById(id))
      )
      .subscribe( student => this.student = student );
  }

  return() {
    this.router.navigate(['/students/list']);
  }
}
