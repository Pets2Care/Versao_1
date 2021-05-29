import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pet } from '../../models/pet.model';
import { AuthService } from '../../services/auth.service';
import { PetsDataService } from '../../services/pets.service';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent implements OnInit {
  @Input() public item: Pet;

  constructor(
    private authService: AuthService,
    private petsDataService: PetsDataService,
    private router: Router,
  ) {}

  ngOnInit() {}

  isPetOwner(): boolean {
    //console.log('isPetOwner');
    return this.authService.getUser().id === this.item?.id;
  }

  viewDonation(): void {
    console.log('viewDonation -> this.item.id = ', this.item?.id);
    this.router.navigate(['/root/tabs/pet-details/', this.item?.id]);
  }

  editDonation(): void {
    console.log('editDonation -> this.item.id = ', this.item?.id);
    this.router.navigate(['/root/tabs/donate/edit-donation/', this.item?.id]);
  }

  pauseDonation(): void {
    console.log('pauseDonation -> this.item.id = ', this.item?.id);
    this.petsDataService.pause(this.item.id);
  }

  deleteDonation(): void {
    console.log('deleteDonation -> this.item.id = ', this.item?.id);
    this.petsDataService.delete(this.item.id);
  }

  getFormattedDate(): string {
    return new Date(this.item?.createdAt).toLocaleDateString('pt-BR');
  }

  calculateAge(): string {
    const today = new Date();
    const birthDate = new Date(this.item?.birthDate);
    //console.log('birthDate = ', birthDate);
    const years = birthDate.getFullYear() - today.getFullYear();
    const months = years * 12 - birthDate.getMonth() + today.getMonth();
    //console.log('years = ', years);
    //console.log('months = ', months);

    const age =
      (years > 0 ? `${years} Ano(s)` : '') +
      (months > 0 ? `${months} Mes(es)` : 'Idade não disponível');

    return age; // {{item.birthDate}} {{item.age > 1 ? 'Meses' : 'Mês'}}
  }
}
