import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PetsDataService } from '../../../../shared/services/pets.service';

@Component({
  selector: 'app-donation-item',
  templateUrl: './donation-item.component.html',
  styleUrls: ['./donation-item.component.scss'],
})
export class DonationItemComponent implements OnInit {
  @Input() public item;
  constructor(
    private router: Router,
    private petsDataService: PetsDataService,
  ) {}
  ngOnInit() {}

  public getFormattedDate(): string {
    return new Date(this.item.createdAt).toLocaleDateString('pt-BR');
  }

  editDonation(): void {
    console.log('editDonation -> this.item.id = ', this.item.id);
    //this.router.navigate(['/root/tabs/donate/edit-donation/'], this.item.id);
  }

  pauseDonation(): void {
    console.log('pauseDonation -> this.item.id = ', this.item.id);
    //this.petsDataService.pause(this.item.id);
  }

  deleteDonation(): void {
    console.log('deleteDonation -> this.item.id = ', this.item.id);
    this.petsDataService.delete(this.item.id).subscribe();
  }
}