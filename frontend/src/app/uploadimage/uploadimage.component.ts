import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loveagain } from '../interface/loveagain';
@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.scss']
})
export class UploadimageComponent implements OnInit {

  userDetails!:Loveagain[];
  email!: string;
  profilepicture!: string;
  localStorageData:any;
  username!:string;
  id!:any;
img:any;
  
    value!:string;
       user!:any;
  constructor( private http:HttpClient) { }
  
  getUserID(){
      this.localStorageData = localStorage.getItem("token");
      this.value = JSON.parse(this.localStorageData)
      this.user = this.value
      this.userDetails = this.user;
      console.log(this.userDetails)
    }


  getDetails(){
    // this.localStorageData = localStorage.getItem("token");

    console.log(this.userDetails[0].id)
    // this.value = JSON.parse(this.localStorageData)
    this.http.get('http://localhost:3000/userDetails/'+this.userDetails[0].id).subscribe((data:any)=>{
      this.username= data[0].username
 
      this.email = data[0].email
     
  
  console.log(data)
       this.img=data[0].profilepicture
      })  
    }
  

  ngOnInit(): void {
    this.getUserID();
    this.getDetails();
  }

}
