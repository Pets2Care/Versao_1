import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsDataService } from 'src/app/shared/services/pets.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.page.html',
  styleUrls: ['./pet-details.page.scss'],
})
export class PetDetailsPage implements OnInit {
  public selectedPet = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private petsDataService: PetsDataService,
  ) {}

  ngOnInit() {
    const selectedId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.activatedRoute);
    this.petsDataService.fetchById(selectedId).subscribe(result => {
      this.selectedPet = result;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
