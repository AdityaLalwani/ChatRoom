import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = "http://localhost:3000";


  constructor(private http: HttpClient) { }

  signUp(data):any
  { 
    return this.http.post(this.baseURL+"/sign-up", data);
  }

  signIn(data):any
  {
    return this.http.post(this.baseURL+"/sign-in", data);
  }

  addFriend(data):any
  {
    return this.http.post(this.baseURL+"/add-friend", data);
  }

  getNotif(data):any
  {
    return this.http.post(this.baseURL+"/get-notif", data);
  }

  acceptRequest(data):any
  {
    return this.http.post(this.baseURL+"/accept-request",data);
  }
}
