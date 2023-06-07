import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Temperature } from '../../app/Models/Prueba.interface';
import { Observable } from 'rxjs';

import { ClientData } from '../Models/ClientInfo.interface';
import { AdminData } from '../Models/AdminInfo.interface';
import { NutriData } from '../Models/NutriInfo.interface';


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

    return this.http.post(this.rootUrl + 'CAMBIAR',data);

  }

  public addMeasures(data:any){

    return this.http.post(this.rootUrl + 'CAMBIAR',data);

  }

  public addDailyConsumption(data:any){

    return this.http.post(this.rootUrl + 'CAMBIAR',data);

  }

  public addPlan(data:any){

    return this.http.post(this.rootUrl + 'CAMBIAR',data);

  }

  public addPDNutri(data:any){

    return this.http.post(this.rootUrl + 'CAMBIAR',data);

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

    return this.http.post(this.rootUrl + 'CAMBIAR',data);
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

      return this.http.put(this.rootUrl + 'CAMBIAR', data);
    }

    public putEditPlan(data:any){

      return this.http.put(this.rootUrl + 'CAMBIAR', data);
    }

    public putEditPDNutri(data:any){

      return this.http.put(this.rootUrl + 'CAMBIAR', data);
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
    let address = this.rootUrl + 'CAMBIAR';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(address,Options);

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
