import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userPosts(Posts: any) {
    throw new Error('Method not implemented.');}
  
  constructor(private http:HttpClient) { 




  }

baseUrlogin="http://localhost:3000/login"


login(data:any){

  return this.http.post(this.baseUrlogin,data)
}
baseUrregister="http://localhost:3000/register"


register(data:any){

  return this.http.post(this.baseUrregister,data)
}

 
url = "http://localhost:3000/getUserPosts"
  

getUserPosts(data: any){
  return this.http.get(this.url, data);
}

}
