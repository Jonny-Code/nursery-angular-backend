import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: any;
  constructor(private http: HttpClient) {}

  registerUser = (user: any) => {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post("http://localhost:5000/users/register", user, {
      headers: headers
    });
  };

  authenticateUser = (user: any) => {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post("http://localhost:5000/users/authenticate", user, {
      headers: headers
    });
  };
}
