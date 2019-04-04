import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public lastFilter = '';

  constructor() { }

  public onSearch = new EventEmitter<string>();

}
