import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf, Subscription} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Proj, ProjListItem } from 'src/app/model/il-progetto.model';
import { GenericListDataService } from 'src/app/services/generic-list.service';

@Component({
  selector: 'app-lista-progetti',
  templateUrl: './lista-progetti.component.html',
  styleUrls: ['./lista-progetti.component.css']
})
export class ListaProgettiComponent implements OnInit {
 
  displayedColumns: string[] = ['id', 'c_proj', 'd_proj', 'd_inizio'];
  data: Proj[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private subscription: Subscription;
  
  constructor(
    private genericListDataService: GenericListDataService<ProjListItem>
  ) {}

  ngOnInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    // TODO: Implementare test filtro
    //this.bnlFilterService.onSearch.subscribe(() => this.paginator.pageIndex = 0);

    this.subscription = merge(this.sort.sortChange, this.paginator.page) // , this.bnlFilterService.onSearch
    .pipe(
      startWith({}),
      switchMap(() => {
        const filterText: string = '';
        return this.genericListDataService!.getList(
          'proj',
          this.paginator,
          this.sort,
          filterText,
           );
      }),
      map(data => {
        this.resultsLength = data.page.totalElements;
        return data._embedded.proj;
      }),
      catchError(() => {
        return observableOf([]);
      })
    ).subscribe(data => this.data = data);
  }


  
}
