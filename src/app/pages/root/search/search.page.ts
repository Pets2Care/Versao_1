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
  private appliedFilters = {
    searchbox: '',
    birthDay: '',
    gender: 'all',
    type: 'all',
    vaccinated: false,
    dewormed: false,
    castrated: false,
    deficit: false,
    city: '',
    state: '',
    createdAt: '', //ordenar por data de criação
  };

  private subject = new Subject();
  public isLoading = false;
  isAdvancedFiltersOpen = false;
  public petsData: Readonly<Pet[]>;
  public filteredPetsData: Readonly<Pet[]> = [];
  public result: Readonly<Pet[]> = [];

  public selectedSegment = 'all';

  constructor(private petsService: PetsDataService) {}

  ngOnInit(): void {
    this.petsService
      .get()
      .pipe(takeUntil(this.subject))
      .subscribe(data => {
        this.petsData = data;
      });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  ionViewWillEnter(): void {
    this.isLoading = true;
    this.petsService.fetchAll().subscribe(() => {
      this.isLoading = false;
      console.log('ionviewwillenter');
      this.onSegmentChange(this.selectedSegment);
    });
  }

  onSegmentChange(type: string): void {
    console.log('applySegmentFilter -> type = ', type);
    if (type === 'all') {
      this.filteredPetsData = this.petsData;
    } else {
      this.filteredPetsData = this.petsData?.filter(i => i.type === type);
      this.selectedSegment = type;
      console.log('filtrados = ', this.filteredPetsData);
    }

    this.result = this.filteredPetsData;
  }

  onSearchboxChange(value: string): void {
    console.log('onSearchboxChange -> value = ', value);
    this.appliedFilters.searchbox = value;
    console.log('appliedFilters = ', this.appliedFilters);
  }

  onCheckboxChange(name: string, value: boolean): void {
    console.log(`applyCheckbox -> name = ${name} | value = ${value}`);
    this.appliedFilters[name] = value;
    console.log('appliedFilters = ', this.appliedFilters);
  }

  onSelectChange(name: string, value: string): void {
    console.log('onSelectChange -> value = ', value);
    this.appliedFilters[name] = value;
    console.log('appliedFilters = ', this.appliedFilters);
  }

  applyFilters(): void {
    console.log('applyFilters');
    console.log('filteredPetsData =', this.filteredPetsData);
    const tempResult = this.filteredPetsData?.filter(item => {
      return (
        //filtros searchbox
        (item.name
          .toLowerCase()
          .indexOf(this.appliedFilters.searchbox.toLowerCase()) > -1 ||
          item.neighborhood
            .toLowerCase()
            .indexOf(this.appliedFilters.searchbox.toLowerCase()) > -1 ||
          item.breed
            .toLowerCase()
            .indexOf(this.appliedFilters.searchbox.toLowerCase()) > -1 ||
          item.description
            .toLowerCase()
            .indexOf(this.appliedFilters.searchbox.toLowerCase()) > -1 ||
          item.city
            .toLowerCase()
            .indexOf(this.appliedFilters.searchbox.toLowerCase()) > -1) &&
        (this.appliedFilters.vaccinated
          ? item.vaccinated === this.appliedFilters.vaccinated
          : true) &&
        (this.appliedFilters.dewormed
          ? item.dewormed === this.appliedFilters.dewormed
          : true) &&
        (this.appliedFilters.castrated
          ? item.castrated === this.appliedFilters.castrated
          : true) &&
        (this.appliedFilters.deficit
          ? item.deficit === this.appliedFilters.deficit
          : true) &&
        (this.appliedFilters.gender !== 'all'
          ? item.gender === this.appliedFilters.gender
          : true)
      );
    });

    console.log('tempResult = ', tempResult);

    this.result = tempResult;
  }
}
