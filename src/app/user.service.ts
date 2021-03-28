import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }


  createCourse(userObj):Observable<any>{
    return this.hc.post("/user/register",userObj)
  }


  getUsers(){
    return this.hc.get("/user/getusers")
  }





}