import { Component } from '@angular/core';
import { PetRequest } from 'src/app/shared/models/petRequest.model';

class PetFormData implements PetRequest {
  id: number;
  name: string;
  birthDate: string;
  gender: string;
  type: string;
  breed: string;
  description: string;
  vaccinated: boolean;
  dewormed: boolean;
  castrated: boolean;
  deficit: boolean;
  userId: number;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  images: any;
}

@Component({
  selector: 'app-new-donation',
  templateUrl: './new-donation.page.html',
  styleUrls: ['./new-donation.page.scss'],
})
export class NewDonationPage {}
