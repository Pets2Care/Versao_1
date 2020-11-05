import { Component, OnInit } from '@angular/core';

import { Pet } from '../../interfaces/Pet';
import { PetsDataService } from '../../services/PetsDataService';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public petsData: Readonly<Pet[]>;
  public filteredPetsData: Readonly<Pet[]>;
  public selectedSegment = 'all';

  constructor(private petsDataService: PetsDataService) {
    this.loadData();
  }

  ngOnInit(): void {}

  loadData() {
    this.petsData = this.petsDataService.getAll();
    this.filteredPetsData = this.petsDataService.getAll();
  }

  applySegmentFilter(ev: any): void {
    const type = ev.detail.value;
    console.log('type = ', type);
    if (type === 'all') {
      this.filteredPetsData = this.petsData;
    } else {
      this.filteredPetsData = this.petsData.filter(i => i.type === type);
      console.log('filtrados = ', this.filteredPetsData);
    }
  }
}
