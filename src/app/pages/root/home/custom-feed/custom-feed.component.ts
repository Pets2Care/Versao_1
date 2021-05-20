import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-custom-feed',
  templateUrl: './custom-feed.component.html',
  styleUrls: ['./custom-feed.component.scss'],
})
export class CustomFeedComponent implements OnInit {
  @Input() public userData: User;

  constructor() {}

  ngOnInit() {}
}
