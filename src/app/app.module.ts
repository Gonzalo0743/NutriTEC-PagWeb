import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderAdminComponent } from './Components/header-admin/header-admin.component';
import { HeaderNutritionistComponent } from './Components/header-nutritionist/header-nutritionist.component';
import { HeaderClientComponent } from './Components/header-client/header-client.component';

import { LoginAdminComponent } from './Pages/Logins/login-admin/login-admin.component';
import { LoginClientComponent } from './Pages/Logins/login-client/login-client.component';
import { LoginNutriComponent } from './Pages/Logins/login-nutri/login-nutri.component';
import { MainPageComponent } from './Pages/MainPage/main-page/main-page.component';
import { RegisterNutriComponent } from './Pages/Registers/register-nutri/register-nutri.component';
import { RegisterClientComponent } from './Pages/Registers/register-client/register-client.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderAdminComponent,
    HeaderNutritionistComponent,
    HeaderClientComponent,
    MainPageComponent,
    LoginAdminComponent,
    LoginClientComponent,
    LoginNutriComponent,
    RegisterNutriComponent,
    RegisterClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
