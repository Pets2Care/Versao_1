import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent implements OnInit {
  @Input() public item: Pet;

  constructor() {}

  ngOnInit() {}

  public getFormattedDate(): string {
    return new Date(this.item?.createdAt).toLocaleDateString('pt-BR');
  }
}
