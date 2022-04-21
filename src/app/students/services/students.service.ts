import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces/students.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private endpoint: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.endpoint}/students`)
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.endpoint}/students/${id}`);
  }

  getSuggestions(termino: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.endpoint}/students?q=${ termino }&_limit=6`);

  }
} 