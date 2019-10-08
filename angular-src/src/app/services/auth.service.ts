import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tokenNotExpired } from "angular2-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
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

  loadToken = () => {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  };

  getHome = () => {
    let headers = new HttpHeaders();
    this.loadToken();
    let tempH = headers.append("Authorization", this.authToken);
    headers.append("Content-Type", "application/json");
    return this.http.get("http://localhost:5000/users/home", {
      headers: tempH
    });
  };

  getProducts = () => {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.get("http://localhost:5000/products/all");
  };

  storeUserData = (token: string, user: any) => {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  };

  getUserData = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  loggedIn = () => {
    return tokenNotExpired("id_token");
  };

  logout = () => {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  };
}
