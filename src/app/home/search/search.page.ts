import { Component, OnInit, ViewChild } from '@angular/core';
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
  public result: Readonly<Pet[]>;

  constructor(private petsDataService: PetsDataService) {
    this.loadData();
  }

  ngOnInit(): void {}

  loadData() {
    this.petsData = this.petsDataService.getAll();
    this.filteredPetsData = this.petsDataService.getAll();
    this.result = this.filteredPetsData;
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
    this.result = this.filteredPetsData;
  }

  filterArray(ev: any)
  {
    this.result = this.filteredPetsData;
    const val = ev.target.value;
    if (val && val.trim() !== '')
    {
      this.result = this.result.filter((item) => {
      return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
              item.place.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
              item.userName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
              item.age.toString().indexOf(val.toLowerCase()) > -1 ||
              item.description.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
              item.createdAt.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      });
    }
    else{
      return this.filteredPetsData;
    }
  }
}
