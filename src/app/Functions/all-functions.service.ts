import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ClientData } from '../Models/ClientInfo.interface';
import { AdminData } from '../Models/AdminInfo.interface';
import { NutriData } from '../Models/NutriInfo.interface';
import { AllProductsDishesData } from '../Models/AllProductsDishes.interface';
import { ConsultFeedback } from '../Models/MongoFeedback.interface';


@Injectable({
  providedIn: 'root'
})
export class AllFunctionsService {

  rootUrl = "https://nutritec-api-pg.azurewebsites.net/api/"

  URLMongo = "https://nutritec-api-mongo.azurewebsites.net/api/"


  
  constructor(private http:HttpClient) { }


  //To show the user data
  public DataClient: ClientData[]=[];
  public DataNutri: NutriData[]=[];
  public DataAdmin: AdminData[]=[];

  

  //*Gets* for show all the names


  /**
   * @description This method is used to get all the branches of the system
   * @returns A list with all the branches
   */

  public getAllProdDish(){

    return this.http.get(this.rootUrl + 'WeatherForecast')
  }

  public getAllProdDishState():Observable<AllProductsDishesData[]>{

    return this.http.get<AllProductsDishesData[]>(this.rootUrl + 'get_all_products_dishes')
  }

  public getApprovedProdDish():Observable<AllProductsDishesData[]>{

    return this.http.get<AllProductsDishesData[]>(this.rootUrl + 'get_aproved_product_dish')
  }

  public getDisapprovedProdDish():Observable<AllProductsDishesData[]>{

    return this.http.get<AllProductsDishesData[]>(this.rootUrl + 'get_unaproved_product_dish')
  }

  public getClientApprovedProdDish():Observable<AllProductsDishesData[]>{

    return this.http.get<AllProductsDishesData[]>(this.rootUrl + 'client_get_aproved_product_dish')
  }

  public getFeedback():Observable<ConsultFeedback[]>{

    return this.http.get<ConsultFeedback[]>(this.URLMongo + 'all_feedback')
  }

  public getPaymentReport(data:any){
    return this.http.get(this.rootUrl + 'get_payment_report/{payment_type}/{email}/{name}/{second_name}/{lname1}/{lname2}/{credit_card}/{discount}/{total_amount}/{final_amount}'+data,{observe:'response',responseType:'blob'})
  }
  


  //*Post* for add info

  /**
   * @description This method is used to add a product or dish to the system
   * @param data 
   * @returns The function to the api to create the product or dish
   */

  public addProdDishClient(data:any){
    return this.http.post(this.rootUrl + 'client_insert_product_dish',data);

  }

  public addRecipe(data:any){
    return this.http.post(this.rootUrl + 'insert_recipe',data);
  }

  public addRecipeNutri(data:any){
    return this.http.post(this.rootUrl + 'nutri_insert_recipe',data);
  }

  public addMeasures(data:any){
    return this.http.post(this.rootUrl + 'CAMBIAR',data);

  }

  public addDailyConsumption(data:any){
    return this.http.post(this.rootUrl + 'assign_daily_consumption',data);
  }

  public addAssignProductToRecipe(data:any){
    return this.http.post(this.rootUrl + 'assign_product_to_recipe',data);
  }

  public addAssignEatinPlanToClient(data:any){
    return this.http.post(this.rootUrl + 'assign_eating_plan_to_client',data);
  }

  public addPlan(data:any){
    return this.http.post(this.rootUrl + 'create_eating_plan',data);
  }

  public addPDNutri(data:any){
    return this.http.post(this.rootUrl + 'insert_product_dish',data);
  }

  public addEatingPlanNutri(data:any){
    return this.http.post(this.rootUrl + 'create_eating_plan',data);
  }

  public addAdmin(data:any){
    return this.http.post(this.rootUrl + 'add_admin', data);
  }

  public addNutri(data:any){
    return this.http.post(this.rootUrl + 'add_nutritionist',data)
  }

  public addClient(data:any){
    return this.http.post(this.rootUrl + 'add_client',data)
  }

  public addAssignDailyConsumption(data:any){
    return this.http.post(this.rootUrl + 'assign_daily_consump', data)
  }

  public addFeedback(data:any){
    return this.http.post(this.URLMongo + 'insert_feedback', data)
  }


  

  

  //*Gets* for show specific info
  /**
   * @description This method is used to get the clients to verify the login
   * @param data 
   * @returns Response from the JSON if is correct or not
   */

  public getProdDishClient(data:any){

    return this.http.post(this.rootUrl + 'client_search_product',data);
  }

  public getRecipe(data:any){

    return this.http.post(this.rootUrl + 'search_recipe',data);
  }

  public getRecipeNutri(data:any){

    return this.http.post(this.rootUrl + 'nutri_search_recipe',data);
  }

  public getPlan(data:any){

    return this.http.post(this.rootUrl + 'CAMBIAR',data);
  }

  public getPDNutri(data:any){

    return this.http.post(this.rootUrl + 'nutri_search_product',data);
  }

  public getProductByRecipe(data:any){

    return this.http.post(this.rootUrl + 'get_products_by_recipe',data);
  }



    /**
   * @description This method is used to get the admins to verify the login
   * @param data 
   * @returns Response from the JSON if is correct or not
   */
    public getAdmins(data:any){

      return this.http.post(this.rootUrl + 'auth_admin',data);
    }

      /**
   * @description This method is used to get the clients to verify the login
   * @param data 
   * @returns Response from the JSON if is correct or not
   */

  public getClients(data:any){

    return this.http.post(this.rootUrl + 'auth_client',data);
  }

        /**
   * @description This method is used to get the clients to verify the login
   * @param data 
   * @returns Response from the JSON if is correct or not
   */

    public getNutris(data:any){

      return this.http.post(this.rootUrl + 'auth_nutritionist',data);
    }

    public getNutriInfoForClient(data:any){

      return this.http.post(this.rootUrl + 'get_nutritionist_by_client',data);
    }

    public getClientEatingPlan(data:any){
      return this.http.post(this.rootUrl + 'client_get_eating_plan',data);
    }

    public getClientForNutri(data:any){
      return this.http.post(this.rootUrl + 'get_client_by_nutritionist',data);
    }

    public getEatPlanByNutri(data:any){
      return this.http.post(this.rootUrl + 'get_eatplan_by_nutritionist',data);
    }

    public getNutritionistPlan(data:any){
      return this.http.post(this.rootUrl + 'get_nutritionist_plan',data);
    }

    public getClientEatingPlanForNutri(data:any){
      return this.http.post(this.rootUrl + 'get_client_eating_plan',data);
    }

    public getEatingPlanForNutri(data:any){
      return this.http.post(this.rootUrl + 'get_eating_plan',data);
    }

    public getSearchClient(data:any){
      return this.http.post(this.rootUrl + 'nutri_search_client',data);
    }



    //*Put* for edit info

    /**
   * @description This method is used to edit a branch of the system
   * @param data 
   * @returns The function to the api to edit the specific branch
   */
    public putEditProdDishClient(data:any){

      return this.http.put(this.rootUrl + 'client_update_product', data);
    }

    public putEditRecipe(data:any){

      return this.http.put(this.rootUrl + 'update_recipe', data);
    }

    public putEditRecipeNutri(data:any){

      return this.http.put(this.rootUrl + 'nutri_update_recipe', data);
    }

    public putEditPlan(data:any){

      return this.http.put(this.rootUrl + 'CAMBIAR', data);
    }

    public putEditPDNutri(data:any){

      return this.http.put(this.rootUrl + 'update_product', data);
    }

    public putChangeDishState(data:any){

      return this.http.put(this.rootUrl + 'change_state_product_dish', data);
    }

    public putUpdateMeasures(data:any){

      return this.http.put(this.rootUrl + 'update_measures', data);
    }

    public putUpdateClientMeasuresFromNutri(data:any){

      return this.http.put(this.rootUrl + 'update_client_measurements', data);
    }

    //*Delete* for delete info

      /**
   * @description This method is used to delete a branch of the system
   * @param data 
   * @returns The function to the api to delete the specific branch
   */

  public deleteRecipe(data:any){

    return this.http.put(this.rootUrl + 'delete_recipe', data);
  }

  public deleteRecipeNutri(data:any){

    return this.http.put(this.rootUrl + 'delete_recipe_from_nutri', data);
  }


  /**public deletePDNutri(data:any){
    let address = this.rootUrl + 'CAMBIAR';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(address,Options);

  }**/




}
