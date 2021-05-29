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
}
