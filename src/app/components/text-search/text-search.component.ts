import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.css']
})
export class TextSearchComponent implements OnInit {
  

    @ViewChild('searchBox') searchBox: ElementRef;

    constructor(public searchService: SearchService) {   }
    ngOnInit() { }

    doSearch() {
      this.searchService.lastFilter = this.searchBox.nativeElement.value as string;
      this.searchService.onSearch.emit(this.searchBox.nativeElement.value);
    }

}
