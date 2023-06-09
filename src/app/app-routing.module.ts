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
import { PaymentReportComponent } from './Pages/Admin/payment-report/payment-report.component';
import { MealManagementLandPageComponent } from './Pages/Client/MealManagement/meal-management-land-page/meal-management-land-page.component';
import { ProdDishLandPageComponent } from './Pages/Client/MealManagement/ProductsDishes/prod-dish-land-page/prod-dish-land-page.component';
import { RecipesLandPageComponent } from './Pages/Client/MealManagement/Recipes/recipes-land-page/recipes-land-page.component';
import { RegisterLandPageComponent } from './Pages/Client/RegisterData/register-land-page/register-land-page.component';
import { DailyConsumptionRegisterComponent } from './Pages/Client/RegisterData/daily-consumption-register/daily-consumption-register.component';
import { MeasuresRegisterComponent } from './Pages/Client/RegisterData/measures-register/measures-register.component';
import { MealManagementNutriLandPageComponent } from './Pages/Nutri/MealManagementNutri/meal-management-nutri-land-page/meal-management-nutri-land-page.component';
import { PDNutriLandPageComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/pdnutri-land-page/pdnutri-land-page.component';
import { PlansLandPageComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/plans-land-page/plans-land-page.component';
import { AddProdDishComponent } from './Pages/Client/MealManagement/ProductsDishes/add-prod-dish/add-prod-dish.component';
import { ConsultProdDishComponent } from './Pages/Client/MealManagement/ProductsDishes/consult-prod-dish/consult-prod-dish.component';
import { DeleteProdDishComponent } from './Pages/Client/MealManagement/ProductsDishes/delete-prod-dish/delete-prod-dish.component';
import { EditProdDishComponent } from './Pages/Client/MealManagement/ProductsDishes/edit-prod-dish/edit-prod-dish.component';
import { AddRecipeComponent } from './Pages/Client/MealManagement/Recipes/add-recipe/add-recipe.component';
import { ConsultRecipeComponent } from './Pages/Client/MealManagement/Recipes/consult-recipe/consult-recipe.component';
import { DeleteRecipeComponent } from './Pages/Client/MealManagement/Recipes/delete-recipe/delete-recipe.component';
import { EditRecipeComponent } from './Pages/Client/MealManagement/Recipes/edit-recipe/edit-recipe.component';
import { AddPDNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/add-pdnutri/add-pdnutri.component';
import { EditPDNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/edit-pdnutri/edit-pdnutri.component';
import { ConsultPDNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/consult-pdnutri/consult-pdnutri.component';
import { DeletePDNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/delete-pdnutri/delete-pdnutri.component';
import { ShowAllProdDishComponent } from './Pages/Client/MealManagement/ProductsDishes/show-all-prod-dish/show-all-prod-dish.component';
import { ShowAllRecipeComponent } from './Pages/Client/MealManagement/Recipes/show-all-recipe/show-all-recipe.component';
import { ShowAllPdNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/show-all-pd-nutri/show-all-pd-nutri.component';
import { ClientInfoComponent } from './Pages/Client/client-info/client-info.component';
import { AdminInfoComponent } from './Pages/Admin/admin-info/admin-info.component';
import { NutriInfoComponent } from './Pages/Nutri/nutri-info/nutri-info.component';
import { AddAdminComponent } from './Pages/Admin/add-admin/add-admin.component';
import { ChangeDishStateComponent } from './Pages/Admin/ProductApproval/change-dish-state/change-dish-state.component';
import { GetAllProductsStateComponent } from './Pages/Admin/ProductApproval/get-all-products-state/get-all-products-state.component';
import { ProductApprovalLandPageComponent } from './Pages/Admin/ProductApproval/product-approval-land-page/product-approval-land-page.component';
import { GetApprovedProductsComponent } from './Pages/Admin/ProductApproval/get-approved-products/get-approved-products.component';
import { GetDisapprovedProductsComponent } from './Pages/Admin/ProductApproval/get-disapproved-products/get-disapproved-products.component';
import { ShowDissapprovedPDNutriComponent } from './Pages/Nutri/MealManagementNutri/ProductDishNutriManagement/show-dissapproved-pdnutri/show-dissapproved-pdnutri.component';
import { EatingPlanComponent } from './Pages/Client/eating-plan/eating-plan.component';
import { GetNutritionistComponent } from './Pages/Client/get-nutritionist/get-nutritionist.component';
import { AddEatingPlanComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/add-eating-plan/add-eating-plan.component';
import { AssignEatingPlanToClientComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/assign-eating-plan-to-client/assign-eating-plan-to-client.component';
import { GetEatPlanByNutritionistComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/get-eat-plan-by-nutritionist/get-eat-plan-by-nutritionist.component';
import { GetEatingPlanComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/get-eating-plan/get-eating-plan.component';
import { GetNutritionistPlanComponent } from './Pages/Nutri/MealManagementNutri/PlansManagement/get-nutritionist-plan/get-nutritionist-plan.component';
import { RecipeNutriLandPageComponent } from './Pages/Nutri/MealManagementNutri/RecipesNutriManagement/recipe-nutri-land-page/recipe-nutri-land-page.component';
import { AddRecipeNutriComponent } from './Pages/Nutri/MealManagementNutri/RecipesNutriManagement/add-recipe-nutri/add-recipe-nutri.component';
import { DeleteRecipeNutriComponent } from './Pages/Nutri/MealManagementNutri/RecipesNutriManagement/delete-recipe-nutri/delete-recipe-nutri.component';
import { EditRecipeNutriComponent } from './Pages/Nutri/MealManagementNutri/RecipesNutriManagement/edit-recipe-nutri/edit-recipe-nutri.component';
import { GetRecipeNutriComponent } from './Pages/Nutri/MealManagementNutri/RecipesNutriManagement/get-recipe-nutri/get-recipe-nutri.component';
import { PatientManagementLandPageComponent } from './Pages/Nutri/PatientManagement/patient-management-land-page/patient-management-land-page.component';
import { AssignDailyConsumptionComponent } from './Pages/Nutri/PatientManagement/assign-daily-consumption/assign-daily-consumption.component';
import { GetClientByNutriComponent } from './Pages/Nutri/PatientManagement/get-client-by-nutri/get-client-by-nutri.component';
import { SearchClientComponent } from './Pages/Nutri/PatientManagement/search-client/search-client.component';
import { UpdateClientMeasurementsComponent } from './Pages/Nutri/PatientManagement/update-client-measurements/update-client-measurements.component';
import { GetClientEatingPlanComponent } from './Pages/Nutri/PatientManagement/get-client-eating-plan/get-client-eating-plan.component';

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
  },
  {
    path:'PaymentReport',
    component: PaymentReportComponent
  },
  {
    path:'MealManagementLandPage',
    component: MealManagementLandPageComponent
  },
  {
    path:'ProdDishesLandPage',
    component: ProdDishLandPageComponent
  },
  {
    path:'RecipesLandPage',
    component: RecipesLandPageComponent
  },
  {
    path:'RegisterLandPage',
    component: RegisterLandPageComponent
  },
  {
    path:'DailyConsumptionRegister',
    component: DailyConsumptionRegisterComponent
  },
  {
    path:'MeasuresRegister',
    component:MeasuresRegisterComponent
  },
  {
    path:'MealManagementNutriLandPage',
    component:MealManagementNutriLandPageComponent
  },
  {
    path:'ProdDishNutriLandPage',
    component:PDNutriLandPageComponent
  },
  {
    path:'PlansLandPage',
    component:PlansLandPageComponent
  },
  {
    path:'ShowAllProdDish',
    component:ShowAllProdDishComponent
  },
  {
    path:'AddProdDish',
    component:AddProdDishComponent
  },
  {
    path:'ConsultProdDish',
    component:ConsultProdDishComponent
  },
  {
    path:'DeleteProdDish',
    component:DeleteProdDishComponent
  },
  {
    path:'EditProdDish',
    component:EditProdDishComponent
  },
  {
    path:'ShowAllRecipe',
    component:ShowAllRecipeComponent
  },
  {
    path:'AddRecipe',
    component:AddRecipeComponent
  },
  {
    path:'ConsultRecipe',
    component:ConsultRecipeComponent
  },
  {
    path:'DeleteRecipe',
    component:DeleteRecipeComponent
  },
  {
    path:'EditRecipe',
    component:EditRecipeComponent
  },
  {
    path:'ShowAllPDNutri',
    component:ShowAllPdNutriComponent
  },
  {
    path:'ShowDisapprovedProducts',
    component:ShowDissapprovedPDNutriComponent
  },
  {
    path:'AddPDNutri',
    component:AddPDNutriComponent
  },
  {
    path:'EditPDNutri',
    component:EditPDNutriComponent
  },
  {
    path:'ConsultPDNutri',
    component:ConsultPDNutriComponent
  },
  {
    path:'DeletePDNutri',
    component:DeletePDNutriComponent
  },
  {
    path:'ClientInfo',
    component:ClientInfoComponent
  },
  {
    path:'AdminInfo',
    component:AdminInfoComponent
  },
  {
    path:'NutriInfo',
    component:NutriInfoComponent
  },
  {
    path:'AddAdmin',
    component:AddAdminComponent
  },
  {
    path:'ChangeDishState',
    component:ChangeDishStateComponent
  },
  {
    path:'GetAllProductsState',
    component:GetAllProductsStateComponent
  },
  {
    path:'ProductsApproved',
    component:GetApprovedProductsComponent
  },
  {
    path:'ProductsDisapproved',
    component:GetDisapprovedProductsComponent
  },
  {
    path:'ProductApprovalLandPage',
    component:ProductApprovalLandPageComponent
  },
  {
    path:'EatingPlan',
    component:EatingPlanComponent
  },
  {
    path:'GetNutriInfoForClient',
    component:GetNutritionistComponent
  },
  {
    path:'AddEatingPlan',
    component:AddEatingPlanComponent
  },
  {
    path:'AssignEatingPlanToClient',
    component:AssignEatingPlanToClientComponent
  },
  {
    path:'GetEatPlanByNutritionist',
    component:GetEatPlanByNutritionistComponent
  },
  {
    path:'GetEatingPlan',
    component:GetEatingPlanComponent
  },
  {
    path:'GetNutritionistPlan',
    component:GetNutritionistPlanComponent
  },
  {
    path:'RecipeNutriLandPage',
    component:RecipeNutriLandPageComponent
  },
  {
    path:'AddRecipeNutri',
    component:AddRecipeNutriComponent
  },
  {
    path:'DeleteRecipeNutri',
    component:DeleteRecipeNutriComponent
  },
  {
    path:'EditRecipeNutri',
    component:EditRecipeNutriComponent
  },
  {
    path:'GetRecipeNutri',
    component:GetRecipeNutriComponent
  },
  {
    path:'PatientManagementLandPage',
    component:PatientManagementLandPageComponent
  },
  {
    path:'AssignDailyConsumption',
    component:AssignDailyConsumptionComponent
  },
  {
    path:'GetClientByNutri',
    component:GetClientByNutriComponent
  },
  {
    path:'GetClientEatingPlan',
    component:GetClientEatingPlanComponent
  },
  {
    path:'SearchClient',
    component:SearchClientComponent
  },
  {
    path:'UpdateClientMeasures',
    component:UpdateClientMeasurementsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
