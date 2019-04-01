import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GenericListDataService } from 'src/app/services/generic-list.service';
import { Proj } from 'src/app/model/il-progetto.model';

@Component({
  selector: 'app-dettaglio-progetto',
  templateUrl: './dettaglio-progetto.component.html',
  styleUrls: ['./dettaglio-progetto.component.css']
})
export class DettaglioProgettoComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
      private route: ActivatedRoute,
      private genericDataService: GenericListDataService<Proj>
  ) { }

  id: String;  

  ngOnInit() {
    this.formGroup = new FormGroup({
      'c_proj': new FormControl(null, Validators.required),
      'd_proj': new FormControl(null, Validators.required),
      'nome_pm': new FormControl(null, Validators.required),
    });
    this.route.params.subscribe(params => {
      if (params['idProgetto'] === 'add') {
        // Modalità inserimento progetto
      } else {
        // Modalità modifica progetto
        // Caricamento dati dal servizio rest
        this.id = params['idProgetto'];
        this.genericDataService.getOneById('proj', this.id).then(proj => {
          this.formGroup.patchValue(proj);
          /*
          const datePipe = new DatePipe('it');
          this.lastAccess = datePipe.transform( person.lastAccess, 'dd/MM/yyyy HH:mm');
          this.bnlPageTitleService.addTextToTitleEmitter.emit(person.firstName + ' ' + person.lastName);
          */
        });
      
      }
    });
  }

  salva() {
    alert('pippo');
  }
}

