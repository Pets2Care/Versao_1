import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/shared/models/pet.model';
import { PetsDataService } from 'src/app/shared/services/pets.service';

@Component({
  selector: 'app-custom-feed',
  templateUrl: './custom-feed.component.html',
  styleUrls: ['./custom-feed.component.scss'],
})
export class CustomFeedComponent implements OnInit {
  @Input() isActive = false;
  public isLoadingPetsData = false;
  public petsData: Readonly<Pet[]>;

  constructor(private petsDataService: PetsDataService) {}

  ngOnInit(): void {
    console.log('custom feed');
    if (this.isActive) {
      this.loadData();
    }
  }

  doRefresh(event: CustomEvent): void {
    this.loadData(event);
  }

  loadData(event?: CustomEvent): void {
    this.isLoadingPetsData = true;
    this.petsDataService.fetchFavorites().subscribe(response => {
      this.petsData = response;
      this.isLoadingPetsData = false;
      console.log('petsData = ', this.petsData);
    });
  }
}
