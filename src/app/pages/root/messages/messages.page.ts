import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/models/message.model';
import { PetsDataService } from 'src/app/shared/services/pets.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage {
  messages: Message[] = [];
  isLoadingMessages = false;

  constructor(private petsDataService: PetsDataService) {}

  ionViewWillEnter(): void {
    console.log('donate.page -> ionViewWillEnter');
    this.isLoadingMessages = true;
    this.petsDataService.fetchMessages().subscribe(response => {
      console.log('fetch messages response', response);
      this.isLoadingMessages = false;
      this.messages = response;
    });
  }
}
