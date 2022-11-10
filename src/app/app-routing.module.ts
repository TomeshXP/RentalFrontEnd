import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlandlordComponent } from './addlandlord/addlandlord.component';
import { AddpropertiesComponent } from './addproperties/addproperties.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { LoginComponent } from './login/login.component';
import { MypropertiesComponent } from './myproperties/myproperties.component';
import { RegisterComponent } from './register/register.component';
import { ShowRequestComponent } from './show-request/show-request.component';
import { TanentComponent } from './tanent/tanent.component';

const routes: Routes = [
  {path:'',redirectTo:'Login',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'Landlord',component:AddlandlordComponent},
  {path:'Addproperties',component:AddpropertiesComponent},
  {path:'MyProperties',component:MypropertiesComponent},
  {path:'EditProperty/:PropertyId',component:EditPropertyComponent},
  {path:'Tanent',component:TanentComponent},
  {path:'ShowRequest/:PropertyId',component:ShowRequestComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
