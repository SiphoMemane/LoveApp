import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormsModule } from '@angular/forms';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'home',component:HomePageComponent},
{path:'welcome',component:WelcomePageComponent},
{path:'',component:WelcomePageComponent},
{path:'upload',component:UploadimageComponent},
{path:'editProfile',component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
