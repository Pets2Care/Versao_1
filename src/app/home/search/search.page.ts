import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Pet } from '../../interfaces/Pet';
import { PetsDataServiceNew } from '../../services/PetsDataServiceNew';

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

  constructor(private petsDataService: PetsDataServiceNew) {}

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
    this.petsDataService.fetch().subscribe(() => {
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
  }
}
