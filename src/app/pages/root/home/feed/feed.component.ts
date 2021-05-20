import { Component, Input, OnInit } from '@angular/core';

import { Pet } from '../../../../shared/models/pet.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() petsData: Readonly<Pet[]>;

  constructor() {}

  ngOnInit() {}
}
