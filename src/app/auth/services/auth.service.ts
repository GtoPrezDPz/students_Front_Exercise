import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlPhoto: string = environment.urlPhoto;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }

  constructor(private http: HttpClient) { }

  authenticationVerify(): Observable<boolean> {

    if (!localStorage.getItem('id')) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.urlPhoto}/users/1`)
      .pipe(
        map(auth => {
          this._auth = auth;
          return true;
        })
      );
  }

  login() {
    return this.http.get<Auth>(`${this.urlPhoto}/users/1`)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('id', auth.id)),

      );

  }

  logout() {
    this._auth = undefined;
  }
}


