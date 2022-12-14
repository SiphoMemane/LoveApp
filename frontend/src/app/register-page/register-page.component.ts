import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']

})
export class RegisterPageComponent implements OnInit {


  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
   
    console.log(data)
   //Add the User to the Database
   this.http.post('http://localhost:3000/register',data, {responseType:'text'})
   .subscribe((results)=>{
   
   

     if(results === 'successfully registered'){
     
      this.router.navigateByUrl('/login')
      console.warn('sucess');
      alert('successfully registered');
      

      
     }
     else{
      alert(results)
      
     }
     
   })
  }
}
