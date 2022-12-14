import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  tittle: any;

  constructor(private http : HttpClient,private router:Router) { }
 

  ngOnInit(): void {
  }
  onSubmit(data:any){
   


    console.log(data)
    //Add the User to the Database
    this.http.post('http://localhost:3000/login',data, {responseType:'text'})
    .subscribe((results)=>{
 
   
      if(results === 'invalid login details' || results === ''){
        
       alert('invalid login details')
        
       console.log('invalid')
       
       return 
      }
      else{
      
        this.router.navigateByUrl('/upload')
       console.warn('sucess');
       alert('successfully logged in');
      

       //routing to home page after successfully loging in
 
       //token for saving logged in user data
       localStorage.setItem("token",results);
      
 
 
      }
      
    })
   }
}
