import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GenericListDataService } from 'src/app/services/generic-list.service';
import { Proj } from 'src/app/model/il-progetto.model';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dettaglio-progetto',
  templateUrl: './dettaglio-progetto.component.html',
  styleUrls: ['./dettaglio-progetto.component.css'],
})
export class DettaglioProgettoComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private genericDataService: GenericListDataService<Proj>,
      private snackBar: MatSnackBar,
  ) { }

  id: String;
  isNew: boolean;

  ngOnInit() {
    this.formGroup = new FormGroup({
      'codProgetto': new FormControl(null, Validators.required),
      'descProgetto': new FormControl(null, Validators.required),
      'nomePM': new FormControl(null, Validators.required),
      'effort': new FormControl(null, Validators.required),
      'dataInizio': new FormControl(null, Validators.required),
      'dataFine': new FormControl(null),
      'id': new FormControl(null),
    });

    this.route.params.subscribe(params => {
      if (params['idProgetto'] === 'add') {
        // Modalità inserimento progetto
        this.isNew = true;
      } else {
        this.isNew = false;
        // Modalità modifica progetto
        // Caricamento dati dal servizio rest
        this.id = params['idProgetto'];
        this.genericDataService.getOneById('proj', this.id).then(proj => {
          this.formGroup.patchValue(proj);
          this.formGroup.get('dataInizio').setValue(new Date(proj.dataInizio));
          this.formGroup.get('dataFine').setValue(new Date(proj.dataFine));

        });

      }
    });
  }

  /**
   * Modifica o inserimento di un progetto
   */
  save() {
    if (this.formGroup.valid) {
      // Se la validazione è superata
      this.genericDataService.saveOrUpdate('proj', this.formGroup.value).then(item => {
        this.snackBar.open('Salvataggio completato con successo', 'NOTIFICA', {duration: 2000, panelClass: ['snackbar-background-info']});
      });
    } else {
      // Forzo la validazione e mostro la snacke di errore
      Object.keys( this.formGroup.controls).forEach(key => {
        this.formGroup.controls[key].markAsTouched();
      });
      this.snackBar.open('Ci sono degli errori nel modulo', 'ERRORE', {duration: 2000, panelClass: ['snackbar-background-error']});
    }
  }


  /**
   * Cancellazione di un progetto
   */
  delete() {
    // Se la validazione è superata
    this.genericDataService.delete('proj', this.id).then(item => {
      this.snackBar.open('Cancellazione effettuata con successo', 'NOTIFICA', {duration: 2000, panelClass: ['snackbar-background-info']});
      this.router.navigate(['/home']);
    });
  }

}

