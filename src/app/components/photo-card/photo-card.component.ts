import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {
  @Input() public item;
  constructor() {}
  ngOnInit() {}

  public getFormattedDate() {
    return new Date(this.item.createdAt).toLocaleDateString('pt-BR');
  }
}
