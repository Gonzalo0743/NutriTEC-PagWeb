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
import { AdminLandPageComponent } from './Pages/Admin/admin-land-page/admin-land-page.component';
import { ProductApprovalComponent } from './Pages/Admin/product-approval/product-approval.component';
import { PaymentReportComponent } from './Pages/Admin/payment-report/payment-report.component';
import { ClientLandPageComponent } from './Pages/Client/client-land-page/client-land-page.component';
import { RegisterLandPageComponent } from './Pages/Client/RegisterData/register-land-page/register-land-page.component';
import { MeasuresRegisterComponent } from './Pages/Client/RegisterData/measures-register/measures-register.component';
import { DailyConsumptionRegisterComponent } from './Pages/Client/RegisterData/daily-consumption-register/daily-consumption-register.component';
import { MealManagementLandPageComponent } from './Pages/Client/MealManagement/meal-management-land-page/meal-management-land-page.component';
import { AddProdDishComponent } from './Pages/Client/MealManagement/ProductsDishes/add-prod-dish/add-prod-dish.component';
import { EditProdDishComponent } from './Pages/Client/MealManagement/ProductsDishes/edit-prod-dish/edit-prod-dish.component';
import { DeleteProdDishComponent } from './Pages/Client/MealManagement/ProductsDishes/delete-prod-dish/delete-prod-dish.component';
import { ConsultProdDishComponent } from './Pages/Client/MealManagement/ProductsDishes/consult-prod-dish/consult-prod-dish.component';
import { AddRecipeComponent } from './Pages/Client/MealManagement/Recipes/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './Pages/Client/MealManagement/Recipes/edit-recipe/edit-recipe.component';
import { ConsultRecipeComponent } from './Pages/Client/MealManagement/Recipes/consult-recipe/consult-recipe.component';
import { DeleteRecipeComponent } from './Pages/Client/MealManagement/Recipes/delete-recipe/delete-recipe.component';
import { NutriLandPageComponent } from './Pages/Nutri/nutri-land-page/nutri-land-page.component';
import { MealManagementNutriLandPageComponent } from './Pages/Nutri/MealManagementNutri/meal-management-nutri-land-page/meal-management-nutri-land-page.component';
import { PDNutriLandPageComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/pdnutri-land-page/pdnutri-land-page.component';
import { AddPDNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/add-pdnutri/add-pdnutri.component';
import { EditPDNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/edit-pdnutri/edit-pdnutri.component';
import { ConsultPDNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/consult-pdnutri/consult-pdnutri.component';
import { DeletePDNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/delete-pdnutri/delete-pdnutri.component';
import { AddPlanComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/add-plan/add-plan.component';
import { EditPlanComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/edit-plan/edit-plan.component';
import { ConsultPlanComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/consult-plan/consult-plan.component';
import { DeletePlanComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/delete-plan/delete-plan.component';
import { SearchAsocPacComponent } from './Pages/Nutri/search-asoc-pac/search-asoc-pac.component';
import { PlanAssignmentComponent } from './Pages/Nutri/plan-assignment/plan-assignment.component';
import { PatientTrackingComponent } from './Pages/Nutri/patient-tracking/patient-tracking.component';
import { ProdDishLandPageComponent } from './Pages/Client/MealManagement/ProductsDishes/prod-dish-land-page/prod-dish-land-page.component';
import { RecipesLandPageComponent } from './Pages/Client/MealManagement/Recipes/recipes-land-page/recipes-land-page.component';
import { PlansLandPageComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/plans-land-page/plans-land-page.component';

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
    RegisterClientComponent,
    AdminLandPageComponent,
    ProductApprovalComponent,
    PaymentReportComponent,
    ClientLandPageComponent,
    RegisterLandPageComponent,
    MeasuresRegisterComponent,
    DailyConsumptionRegisterComponent,
    MealManagementLandPageComponent,
    AddProdDishComponent,
    EditProdDishComponent,
    DeleteProdDishComponent,
    ConsultProdDishComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    ConsultRecipeComponent,
    DeleteRecipeComponent,
    NutriLandPageComponent,
    MealManagementNutriLandPageComponent,
    PDNutriLandPageComponent,
    AddPDNutriComponent,
    EditPDNutriComponent,
    ConsultPDNutriComponent,
    DeletePDNutriComponent,
    AddPlanComponent,
    EditPlanComponent,
    ConsultPlanComponent,
    DeletePlanComponent,
    SearchAsocPacComponent,
    PlanAssignmentComponent,
    PatientTrackingComponent,
    ProdDishLandPageComponent,
    RecipesLandPageComponent,
    PlansLandPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
