import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/students.interface';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  students: Student[] = [];
  constructor( private heroesService: StudentsService ) { }

  ngOnInit(): void {
    this.heroesService.getStudent().subscribe( students => this.students = students );
  }

}
