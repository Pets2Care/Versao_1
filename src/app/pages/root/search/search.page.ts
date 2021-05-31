import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Pet } from '../../../shared/models/pet.model';
import { PetsDataService } from '../../../shared/services/pets.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, OnDestroy {
  private subject = new Subject();
  public isLoading = false;
  public petsData: Readonly<Pet[]>;
  public filteredPetsData: Readonly<Pet[]>;
  public selectedSegment = 'all';
  public result: Readonly<Pet[]>;

  constructor(private petsDataService: PetsDataService) {}

  ngOnInit(): void {
    this.petsDataService
      .get()
      .pipe(takeUntil(this.subject))
      .subscribe(data => {
        this.petsData = data;
      });

    this.applySegmentFilter(this.selectedSegment);
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  //Preciso desse? Ele acaba dando um novo fetch toda vez que entra nessa tela
  ionViewWillEnter(): void {
    this.isLoading = true;
    this.petsDataService.fetchAll().subscribe(() => {
      this.isLoading = false;
    });
  }

  applySegmentFilter(type: string): void {
    console.log('applySegmentFilter -> type = ', type);

    if (type === 'all') {
      this.filteredPetsData = this.petsData;
    } else {
      this.filteredPetsData = this.petsData.filter(i => i.type === type);
      console.log('filtrados = ', this.filteredPetsData);
    }
    this.result = this.filteredPetsData;
  }

  filterArray(ev: any): Readonly<Pet[]> {
    console.log('filterArray -> ev.target.value = ', ev.target.value);
    this.result = this.filteredPetsData;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.result = this.result.filter(item => {
        return (
          //TODO: adicionar outros filtros válidos aqui também?
          //item.userName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.city.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.neighborhood.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.description.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    } else {
      return this.filteredPetsData;
    }
  }
}
