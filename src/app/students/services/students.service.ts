import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces/students.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private urlPhoto: string = environment.urlPhoto;

  constructor(private http: HttpClient) { }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.urlPhoto}/students`)
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.urlPhoto}/students/${id}`);
  }

  getSuggestions(termino: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.urlPhoto}/students?q=${ termino }&_limit=6`);

  }

  studentAdd( student: Student ): Observable<Student> {
    return this.http.post<Student>(`${ this.urlPhoto }/students`, student);
  }
  studentUpdate( student: Student ): Observable<Student> {
    return this.http.put<Student>(`${ this.urlPhoto }/students/${student.id}`, student);
  }
} 