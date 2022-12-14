import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Loveagain } from '../interface/loveagain';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  file: any;
  email:any;
  value!:string
  user!:any;
  id!:any;
  em!:any;

  profilepicture!:string;
  age!:any;
  userDetails!: Loveagain[];
  public isVisible: boolean = false;
  post = new FormGroup({
      
    caption: new FormControl(''),
    email :new FormControl(''),
    file :new FormControl(''),
    image :new FormControl(''),

    profilepicture: new FormControl(''),

    
    
});


post1 = new FormGroup({
      
 

  profilepicture: new FormControl(''),

  
  
});

  image: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getDetails()
  }

onFileChange(event:any) {

  if (event.target.files.length > 0) {
    this.file = event.target.files[0];
    
  }
}
  onSubmit(){
  
    console.log(this.file)


    const formData = new FormData();
    formData.append("file",this.file)
    formData.append("upload_preset","agpgnbxa")
    this.http.post('https://api.cloudinary.com/v1_1/dcs7clgs7/image/upload',formData )
    .subscribe((res:any)=>{

      console.log(res)
       

      if(res.url){
       
       this.post.value.profilepicture  = res.url
       this.post1.value.profilepicture  = res.url
       this.post.value.email = this.userDetails[0].email
       this.post.value.profilepicture  = res.url
       
       this.post.value.profilepicture = this.userDetails[0].profilepicture
   
   
       console.log(this.userDetails[0].id)
       console.log(this.post1.value)
       console.log(res.url)
       this.http.post('http://localhost:3000/uploadimage/'+ this.userDetails[0].id,this.post1.value)
       .subscribe((res:any)=>{

        console.log(res.message);

        console.log(res.data)
        //  localStorage.setItem('image',res.data[0].profilepicture)

  
        this.isVisible=true;
        setTimeout(()=>this.isVisible=false,1000)
       })
 
      }
    
   
   
    
      })
  
    }
    getDetails(){
    
      this.email = localStorage.getItem("token");
      
      this.value = JSON.parse(this.email)
      this.user = this.value
      this.userDetails = this.user; 
      this.http.get('http://localhost:3000/userDetails/'+this.userDetails[0].id).subscribe((data:any)=>{
     
 
      this.profilepicture = data[0].profilepicture;
      this.id = data[0].id
      this.em = data[0].email
  
     console.log(this.id)

         })
  
    
  
       

  }
  getimage(){
    
    this.image = localStorage.getItem("token");
    this.value = JSON.parse(this.email)
    this.user = this.value
    this.userDetails = this.user; 
    this.http.get('http://localhost:3000/getimage').subscribe((data:any)=>{
   

  

   console.log(this.id)

       })

  

     

}
}






