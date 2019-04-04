import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProgettiComponent } from './pages/lista-progetti/lista-progetti.component';
import { DettaglioProgettoComponent } from './pages/dettaglio-progetto/dettaglio-progetto.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MAT_DATE_LOCALE, MatPaginatorModule,
         MatSortModule, MatButtonModule,
         MatIconModule, MatFormFieldModule,
         MatInputModule, MatSnackBarModule,
         MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { TextSearchComponent } from './components/text-search/text-search.component';

registerLocaleData(localeIt);


@NgModule({
  declarations: [
    AppComponent,
    ListaProgettiComponent,
    DettaglioProgettoComponent,
    TextSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'it' } ,
    { provide: MAT_DATE_LOCALE, useValue: 'it' } ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
