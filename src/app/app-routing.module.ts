import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './Pages/MainPage/main-page/main-page.component';
import { LoginAdminComponent } from './Pages/Logins/login-admin/login-admin.component';
import { LoginClientComponent } from './Pages/Logins/login-client/login-client.component';
import { LoginNutriComponent } from './Pages/Logins/login-nutri/login-nutri.component';
import { RegisterClientComponent } from './Pages/Registers/register-client/register-client.component';
import { RegisterNutriComponent } from './Pages/Registers/register-nutri/register-nutri.component';
import { ClientLandPageComponent } from './Pages/Client/client-land-page/client-land-page.component';
import { AdminLandPageComponent } from './Pages/Admin/admin-land-page/admin-land-page.component';
import { NutriLandPageComponent } from './Pages/Nutri/nutri-land-page/nutri-land-page.component';

const routes: Routes = [
  {
    path:'',
    component: MainPageComponent
  },
  {
    path:'AdminLogin',
    component: LoginAdminComponent
  },
  {
    path:'ClientLogin',
    component: LoginClientComponent
  },
  {
    path:'NutriLogin',
    component: LoginNutriComponent
  },
  {
    path:'ClientRegister',
    component: RegisterClientComponent
  },
  {
    path:'NutriRegister',
    component: RegisterNutriComponent
  },
  {
    path:'ClientLandPage',
    component: ClientLandPageComponent
  },
  {
    path:'AdminLandPage',
    component: AdminLandPageComponent
  },
  {
    path:'NutriLandPage',
    component: NutriLandPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
