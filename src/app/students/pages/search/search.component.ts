import { UnaryOperator } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Student } from '../../interfaces/students.interface';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  termino: string = '';

  students: Student[] = [];

  selectedStudent!: Student | undefined;

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
  }

searching() {

  this.studentsService.getSuggestions(this.termino.trim())
  .subscribe( students => this.students = students );

}

optionSelected( event: MatAutocompleteSelectedEvent ) {

if(!event.option.value) {
  this.selectedStudent = undefined;
  return;
}

 const student: Student = event.option.value;
 this.termino = student.name;

 this.studentsService.getStudentById( student.id! )
 .subscribe( student => this.selectedStudent = student );

}
}