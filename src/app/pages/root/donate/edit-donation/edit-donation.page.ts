import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsDataService } from 'src/app/shared/services/pets.service';

@Component({
  selector: 'app-edit-donation',
  templateUrl: './edit-donation.page.html',
  styleUrls: ['./edit-donation.page.scss'],
})
export class EditDonationPage {
  public selectedPet = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private petsDataService: PetsDataService,
  ) {}

  ngOnInit() {
    const selectedId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('kkkkkk', this.activatedRoute);
    this.petsDataService.fetchById(selectedId).subscribe(result => {
      this.selectedPet = result;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
