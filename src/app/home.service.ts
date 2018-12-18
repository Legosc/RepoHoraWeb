import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  
  getUserHours(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const options = new HttpHeaders()
            .set("Authorization", "Bearer "+currentUser.token);
    return this.http.get(`https://apiclientes.vitechd.com/api/Reports/UserHours`,{headers :options})
    .pipe(map(data => {
      // login successful if there's a jwt token in the response
      console.log(data);
      return data;
    }),catchError(this.handleError)).subscribe(
      response => {
          
          console.log("data :"+response);
          var sample=JSON.stringify(response);
     });;  // this one echoes out what i want
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
