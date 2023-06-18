import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";
import { cookie } from "@/utils";
import { IUser } from "../types/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private user: IUser | null = null;

  constructor(private router: Router) {
    // cookie.set({
    //   name: "auth_token",
    //   value:
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiX2lkIjoiNWE5ZWM4NDlhMjFkZGQ1NjVkYmIiLCJuYW1lIjoiQXN3aW4gS3VtYXIiLCJlbWFpbCI6ImFzd2luQGdtYWlsLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.Nk_3IrzYTpBI4v5NRUxImwoeGdr1DgZdyvXl5gNT4T8",
    //   days: 30,
    // });
    let token = cookie.get("auth_token");
    console.log(token);
    this.user = token ? jwtDecode(token) : null;
  }

  getUser() {
    return this.user;
  }

  signIn() {}

  signUp() {}

  logout() {
    this.user = null;
    cookie.remove("auth_token");
    this.router.navigate(["/auth/login"]);
  }
}
