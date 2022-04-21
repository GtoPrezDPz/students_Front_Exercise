import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/students.interface';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  students: Student[] = [];
  constructor( private studentsService: StudentsService ) { }

  ngOnInit(): void {
    this.studentsService.getStudent().subscribe( students => this.students = students );
  }

}
