import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path:"",redirectTo:"home",pathMatch:"full"},
   {path:"register",component:RegistrationComponent},
   {path:"search",component:SerachDeleteComponent},
   {path:"home",component:AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
