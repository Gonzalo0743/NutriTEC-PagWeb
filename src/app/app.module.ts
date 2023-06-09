import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ProdDishLandPageComponent } from './Pages/Client/MealManagement/ProductsDishes/prod-dish-land-page/prod-dish-land-page.component';
import { RecipesLandPageComponent } from './Pages/Client/MealManagement/Recipes/recipes-land-page/recipes-land-page.component';
import { PlansLandPageComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/plans-land-page/plans-land-page.component';
import { ShowAllProdDishComponent } from './Pages/Client/MealManagement/ProductsDishes/show-all-prod-dish/show-all-prod-dish.component';
import { ShowAllRecipeComponent } from './Pages/Client/MealManagement/Recipes/show-all-recipe/show-all-recipe.component';
import { ShowAllPdNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/show-all-pd-nutri/show-all-pd-nutri.component';
import { ClientInfoComponent } from './Pages/Client/client-info/client-info.component';
import { AdminInfoComponent } from './Pages/Admin/admin-info/admin-info.component';
import { NutriInfoComponent } from './Pages/Nutri/nutri-info/nutri-info.component';
import { AddAdminComponent } from './Pages/Admin/add-admin/add-admin.component';
import { ChangeDishStateComponent } from './Pages/Admin/ProductApproval/change-dish-state/change-dish-state.component';
import { GetApprovedProductsComponent } from './Pages/Admin/ProductApproval/get-approved-products/get-approved-products.component';
import { GetDisapprovedProductsComponent } from './Pages/Admin/ProductApproval/get-disapproved-products/get-disapproved-products.component';
import { GetAllProductsStateComponent } from './Pages/Admin/ProductApproval/get-all-products-state/get-all-products-state.component';
import { ProductApprovalLandPageComponent } from './Pages/Admin/ProductApproval/product-approval-land-page/product-approval-land-page.component';
import { ShowDissapprovedPDNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/show-dissapproved-pdnutri/show-dissapproved-pdnutri.component';
import { EatingPlanComponent } from './Pages/Client/eating-plan/eating-plan.component';
import { GetNutritionistComponent } from './Pages/Client/get-nutritionist/get-nutritionist.component';
import { RecipeNutriLandPageComponent } from './Pages/Nutri/MealManagementNutri/RecipesNutriManagement/recipe-nutri-land-page/recipe-nutri-land-page.component';
import { AddRecipeNutriComponent } from './Pages/Nutri/MealManagementNutri/RecipesNutriManagement/add-recipe-nutri/add-recipe-nutri.component';
import { EditRecipeNutriComponent } from './Pages/Nutri/MealManagementNutri/RecipesNutriManagement/edit-recipe-nutri/edit-recipe-nutri.component';
import { GetRecipeNutriComponent } from './Pages/Nutri/MealManagementNutri/RecipesNutriManagement/get-recipe-nutri/get-recipe-nutri.component';
import { DeleteRecipeNutriComponent } from './Pages/Nutri/MealManagementNutri/RecipesNutriManagement/delete-recipe-nutri/delete-recipe-nutri.component';
import { AssignDailyConsumptionComponent } from './Pages/Nutri/PatientManagement/assign-daily-consumption/assign-daily-consumption.component';
import { GetClientEatingPlanComponent } from './Pages/Nutri/PatientManagement/get-client-eating-plan/get-client-eating-plan.component';
import { SearchClientComponent } from './Pages/Nutri/PatientManagement/search-client/search-client.component';
import { UpdateClientMeasurementsComponent } from './Pages/Nutri/PatientManagement/update-client-measurements/update-client-measurements.component';
import { GetClientByNutriComponent } from './Pages/Nutri/PatientManagement/get-client-by-nutri/get-client-by-nutri.component';
import { AddEatingPlanComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/add-eating-plan/add-eating-plan.component';
import { AssignEatingPlanToClientComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/assign-eating-plan-to-client/assign-eating-plan-to-client.component';
import { GetEatingPlanComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/get-eating-plan/get-eating-plan.component';
import { GetNutritionistPlanComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/get-nutritionist-plan/get-nutritionist-plan.component';
import { GetEatPlanByNutritionistComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/get-eat-plan-by-nutritionist/get-eat-plan-by-nutritionist.component';
import { PatientManagementLandPageComponent } from './Pages/Nutri/PatientManagement/patient-management-land-page/patient-management-land-page.component';
import { AssignProductToRecipeComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/assign-product-to-recipe/assign-product-to-recipe.component';
import { GetProductsByRecipeComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/get-products-by-recipe/get-products-by-recipe.component';


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
    ProdDishLandPageComponent,
    RecipesLandPageComponent,
    PlansLandPageComponent,
    ShowAllProdDishComponent,
    ShowAllRecipeComponent,
    ShowAllPdNutriComponent,
    ClientInfoComponent,
    AdminInfoComponent,
    NutriInfoComponent,
    AddAdminComponent,
    ChangeDishStateComponent,
    GetApprovedProductsComponent,
    GetDisapprovedProductsComponent,
    GetAllProductsStateComponent,
    ProductApprovalLandPageComponent,
    ShowDissapprovedPDNutriComponent,
    EatingPlanComponent,
    GetNutritionistComponent,
    RecipeNutriLandPageComponent,
    AddRecipeNutriComponent,
    EditRecipeNutriComponent,
    GetRecipeNutriComponent,
    DeleteRecipeNutriComponent,
    AssignDailyConsumptionComponent,
    GetClientEatingPlanComponent,
    SearchClientComponent,
    UpdateClientMeasurementsComponent,
    GetClientByNutriComponent,
    AddEatingPlanComponent,
    AssignEatingPlanToClientComponent,
    GetEatingPlanComponent,
    GetNutritionistPlanComponent,
    GetEatPlanByNutritionistComponent,
    PatientManagementLandPageComponent,
    AssignProductToRecipeComponent,
    GetProductsByRecipeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
