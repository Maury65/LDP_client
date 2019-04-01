import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
/***
 * Servizio generico di comunicazione con i servizi rest esposti da spring boot
 */
@Injectable({
  providedIn: 'root'
})
export class GenericListDataService<T>  {
  protected baseUrl = '/api';

  constructor( private http: HttpClient  ) {
  }

  /**
   * Lettura dal servizio rest di una lista di dati
   * @param url 
   * @param paginator 
   * @param sort 
   * @param filterText 
   * @param size 
   */
  getList(url: string, paginator: MatPaginator, sort: MatSort, filterText: string, size = 30):  Observable<T> {
    const href = this.baseUrl + '/' + url ;
    let filterQuery = href.indexOf('?') >= 0 ? '' : '/?';
    let orderBy = '';
    if (sort && sort.active) {
      orderBy = '&sort=' + sort.active  + ',' + sort.direction ;
    }
    let page = '&page=0';
    if (paginator && paginator.pageIndex) {
      page = '&page=' + paginator.pageIndex ;
    }
    let sizeFilter = '&size=' + size;
    if (paginator && paginator.pageSize) {
      sizeFilter = '&size=' + paginator.pageSize ;
    }

    const requestUrl = `${href}${filterQuery}${page}${sizeFilter}${orderBy}`;
    return this.http.get<T>(requestUrl);
  }


   /**
   * Implementazione della chiamata GET ad un servizio Rest per id risorsa. 
   * Restituscie un singolo oggetto di tipo T letto per id
   * @param resourceName, nome della risorsa rest
   * @param id, id della risorsa da leggere
   */
  async getOneById(resourceName: string , id: any):  Promise<T> {
    const url = this.baseUrl + '/' + resourceName + '/' + encodeURIComponent(id);
    // console.debug(url);
    return this.http.get(url).toPromise()
    .then(response => {
      return response.valueOf() as T;
    });
  }

   /**
   * Implementazione della chiamata post ad un servizio Rest. 
   * Inserisce o modifica la risorsa di tipo T passata per argomento
   * @param resourceName, nome della risorsa rest
   * @param  resource, oggetto da inserire o modificare al server
   */
  async saveOrUpdate(resourceName: string, resource: T):  Promise<T> {
    return this.http.post(this.baseUrl + '/' + resourceName + '/', resource)
      .toPromise()
      .then(response => {
        return response.valueOf() as T;
      });
  }

 /**
   * Implementazione della chiamata delete ad un servizio Rest. 
   * Elimina la risorsa con l'id passata per argomento
   * @param resourceName, nome della risorsa rest
   * @param id, id della risorsa da eliminare
   */
  async delete(resourceName: string, id: string): Promise<boolean> {
    return this.http.delete(this.baseUrl + '/' + resourceName + '/' + id)
      .toPromise()
      .then(response => {
        return true;
      });
  }
}
