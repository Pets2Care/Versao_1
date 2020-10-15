import { Component, OnInit } from '@angular/core';

const defaultPet = {
  createdAt: '',
  name: '',
  place: '',
  url: '',
  userId: undefined,
  userName: '',
  age: undefined,
  type: '',
  description: '',
};

@Component({
  selector: 'app-new-donation',
  templateUrl: './new-donation.page.html',
  styleUrls: ['./new-donation.page.scss'],
})
export class NewDonationPage implements OnInit {
  public newPet = defaultPet;
  public postedPet = null;

  constructor() {}

  ngOnInit() {}

  postForm() {
    this.newPet.createdAt = new Date().toLocaleDateString();
    console.log('newPet = ', this.newPet);
    this.postedPet = this.newPet;
    this.newPet = defaultPet;
  }

  isFormComplete(): boolean {
    return !(
      this.newPet.name.length > 0 &&
      this.newPet.place &&
      this.newPet.url &&
      this.newPet.age &&
      this.newPet.type &&
      this.newPet.description
    );
  }
}
