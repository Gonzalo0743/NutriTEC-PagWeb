import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Temperature } from '../../app/Models/Prueba.interface';
import { Observable } from 'rxjs';

import { ClientData } from '../Models/ClientInfo.interface';
import { AdminData } from '../Models/AdminInfo.interface';
import { NutriData } from '../Models/NutriInfo.interface';
import { AllProductsDishesData } from '../Models/AllProductsDishes.interface';


@Injectable({
  providedIn: 'root'
})
export class AllFunctionsService {

  rootUrl = "https://nutritec-api-pg.azurewebsites.net/api/"


  
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
  public getAllProdDish():Observable<Temperature[]>{

    return this.http.get<Temperature[]>(this.rootUrl + 'WeatherForecast')
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
  


  //*Post* for add info

  /**
   * @description This method is used to add a product or dish to the system
   * @param data 
   * @returns The function to the api to create the product or dish
   */

  public addProdDish(data:any){

    return this.http.post(this.rootUrl + 'CAMBIAR',data);

  }

  public addRecipe(data:any){

    return this.http.post(this.rootUrl + 'insert_recipe',data);

  }

  public addMeasures(data:any){

    return this.http.post(this.rootUrl + 'CAMBIAR',data);

  }

  public addDailyConsumption(data:any){

    return this.http.post(this.rootUrl + 'assign_daily_consumption',data);

  }

  public addPlan(data:any){

    return this.http.post(this.rootUrl + 'create_eating_plan',data);

  }

  public addPDNutri(data:any){
    return this.http.post(this.rootUrl + 'CAMBIAR',data);
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

  public addPlanAssignment(data:any){
    return this.http.post(this.rootUrl + 'assign_daily_consump', data)
  }


  

  

  //*Gets* for show specific info
  /**
   * @description This method is used to get the clients to verify the login
   * @param data 
   * @returns Response from the JSON if is correct or not
   */

  public getProdDish(data:any){

    return this.http.post(this.rootUrl + 'CAMBIAR',data);
  }

  public getRecipe(data:any){

    return this.http.post(this.rootUrl + 'search_recipe',data);
  }

  public getPlan(data:any){

    return this.http.post(this.rootUrl + 'CAMBIAR',data);
  }

  public getPDNutri(data:any){

    return this.http.post(this.rootUrl + 'CAMBIAR',data);
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

    //*Put* for edit info

    /**
   * @description This method is used to edit a branch of the system
   * @param data 
   * @returns The function to the api to edit the specific branch
   */
    public putEditProdDish(data:any){

      return this.http.put(this.rootUrl + 'CAMBIAR', data);
    }

    public putEditRecipe(data:any){

      return this.http.put(this.rootUrl + 'update_recipe', data);
    }

    public putEditPlan(data:any){

      return this.http.put(this.rootUrl + 'CAMBIAR', data);
    }

    public putEditPDNutri(data:any){

      return this.http.put(this.rootUrl + 'CAMBIAR', data);
    }

    public putChangeDishState(data:any){

      return this.http.put(this.rootUrl + 'change_state_product_dish', data);
    }

    public putUpdateMeasures(data:any){

      return this.http.put(this.rootUrl + 'update_measures', data);
    }

    //*Delete* for delete info

      /**
   * @description This method is used to delete a branch of the system
   * @param data 
   * @returns The function to the api to delete the specific branch
   */
  public deleteProdDish(data:any){
    let address = this.rootUrl + 'CAMBIAR';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(address,Options);

  }

  public deleteRecipe(data:any){

    return this.http.put(this.rootUrl + 'delete_recipe', data);
  }

  public deletePlan(data:any){
    let address = this.rootUrl + 'CAMBIAR';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(address,Options);

  }

  public deletePDNutri(data:any){
    let address = this.rootUrl + 'CAMBIAR';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(address,Options);

  }




}
