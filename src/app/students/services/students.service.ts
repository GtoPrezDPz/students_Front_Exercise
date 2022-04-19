import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/students.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( private http: HttpClient ) { }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/students')
  }
}
