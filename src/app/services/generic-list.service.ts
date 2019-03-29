import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class GenericListDataService<T>  {
  protected baseUrl = '/api';

  constructor( private http: HttpClient  ) {
  }

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

}






   /**
   * Restituisce una lista di oggetti ordinabile e paginabile

  getListOrderedAndPagabledAdv(
    listResourceName: string ,
    page: number,
    order: string,
    sortDirection: string,
    filterText: string = '',
    adv: any = '',
    size = 30,
    queryParams?: Params
  ):  Observable<T> {
    const href = this.baseUrl + '/' + listResourceName + '/';
    let filterQuery = '?';
    if (filterText) {
      filterQuery = '?text=' + filterText + '&';
    }
    let orderBy = '';
    if (order) {
      orderBy = '&sort=' + order;
    }
    let sortDirectionParam = '';
    if (sortDirection) {
      sortDirectionParam = '&sortDirection=' + sortDirection;
    }
    let advParam = '';
    if (adv) {
      advParam = '&adv=' + encodeURIComponent(JSON.stringify(adv));
    }
    if (queryParams && (queryParams.status || queryParams.onlyMy)) {
      if (!adv) {
        adv = {};
      }
      if (queryParams.status ) {
        adv.stato = queryParams.status;
      }
      if (queryParams.onlyMy) {
        adv.onlyMy = queryParams.onlyMy;
      }
      advParam = '&adv=' + encodeURIComponent(JSON.stringify(adv));
    }

    const requestUrl = `${href}${filterQuery}page=${page}&size=${size}` + advParam + orderBy + sortDirectionParam;
    return this.http.get<T>(requestUrl);
  }   */

  /**
   * Restituisce una lista di oggetti ordinabile e paginabile
   * @param listResourceName

  getListOrderedAndPagabled(
    listResourceName: string ,
    page: number,
    order: string,
    sortDirection: string,
    filterText: string = '',
    size = 30,
    resourceName = listResourceName):  Observable<T> {
const href = this.baseUrl + '/' + listResourceName ;
let filterQuery = listResourceName.indexOf('?') >= 0 ? '&' : '/?';
if (filterText) {
filterQuery = 'search/search?text=' + filterText + '&';
}
let orderBy = '';
if (order) {
orderBy = '&sort=' + order  + ',' + sortDirection;
}
const requestUrl = `${href}${filterQuery}page=${page}&size=${size}` + orderBy;
return this.http.get<T>(requestUrl);
}

   */



  /*
    return this.http.get(this.baseUrl + '/' + listResourceName + '/')
      .toPromise()
      .then(response => {
        // console.debug(response["_embedded"]);
        return response['_embedded'][resourceName].valueOf() as T[];
      })
      .catch(error => this.handleError(error, this.popupService));
    */
