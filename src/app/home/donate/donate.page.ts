import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import pets from '../../pets.js';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
  public userId = 2;
  public userName = 'Maria do Carmo';
  public filteredItems: any[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filteredItems = this.getPetsFromUserId(this.userId);
  }

  getPetsFromUserId(userId: number): any[] {
    return pets.filter(i => i.userId === userId);
  }

  createNewDonation(): void {
    this.router.navigate([
      '/home/tabs/donate/new-donation/',
      this.userId,
      this.userName,
    ]);
  }
}
