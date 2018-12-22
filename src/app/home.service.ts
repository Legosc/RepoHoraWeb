import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  
  getUserHours(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var UserHours: any;
    const options = new HttpHeaders()
            .set("Authorization", "Bearer "+currentUser.token);
            UserHours= this.http.get<any>(`https://apiclientes.vitechd.com/api/Reports/UserHours`,{headers :options})
    .pipe(map(
      response => {
        localStorage.setItem('UerHors', JSON.stringify(response));
          return response;
     }));  // this one echoes out what i want
     console.log(UserHours);
     return UserHours;
  }

  handleError(error: any): any {
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
    throw new Error("Method not implemented.");
  }
}
