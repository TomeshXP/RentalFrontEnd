import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddlandlordComponent } from './addlandlord/addlandlord.component';
import { AddpropertiesComponent } from './addproperties/addproperties.component';
import { MypropertiesComponent } from './myproperties/myproperties.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { TanentComponent } from './tanent/tanent.component';
import { DashbordnavbarComponent } from './dashbordnavbar/dashbordnavbar.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import{MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SendrequestComponent } from './sendrequest/sendrequest.component';
import { ShowRequestComponent } from './show-request/show-request.component';
import { MyprofileComponent } from './myprofile/myprofile.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    AddlandlordComponent,
    AddpropertiesComponent,
    MypropertiesComponent,
    EditPropertyComponent,
    TanentComponent,
    DashbordnavbarComponent,
    SendrequestComponent,
    ShowRequestComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
