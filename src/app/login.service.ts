import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

    login(Email: string, password: string) {
        return this.http.post<any>(`https://apiclientes.vitechd.com/api/Account/Login`, { Email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log(user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return user;
                }
                else {
                    return "Eror de autenticacion ";
                }

                
            }),catchError(this.handleError));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    public isAuthenticated(): boolean {
        // Check whether the token is expired and return
        // true or false
        if (localStorage.getItem('currentUser')) {
                    let user = JSON.parse(localStorage.getItem('currentUser'));
                    if(new Date() >=new Date(user.expiration)){
                        return false;
                    }
            // logged in so return true
            return true;
        }
        return false;
      }
    private handleError(error: HttpErrorResponse) {{
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }
    }
    
}
