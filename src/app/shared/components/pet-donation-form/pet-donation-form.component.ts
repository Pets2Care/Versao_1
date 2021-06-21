import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  LoadingController,
  AlertController,
  NavParams,
  ModalController,
} from '@ionic/angular';
import { Pet } from 'src/app/shared/models/pet.model';
import { PetRequest } from 'src/app/shared/models/petRequest.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PetsDataService } from 'src/app/shared/services/pets.service';

import states from '../../utils/states';

@Component({
  selector: 'pet-donation-form',
  templateUrl: './pet-donation-form.component.html',
  styleUrls: ['./pet-donation-form.component.scss'],
})
export class PetDonationFormComponent implements OnInit {
  public states = states;
  public petId = null;
  petData: Pet = null;
  isLoading = false;
  uploadedImages = null;

  @ViewChild('donationForm') donationForm: NgForm | undefined;

  public selectedState = null;
  public isVaccinated = false;
  public isDewormed = false;
  public isCastrated = false;
  public isDeficit = false;

  selectState(value: string): void {
    this.selectedState = states.find(obj => obj.sigla == value);
    console.log('selectedState = ', this.selectedState);
  }

  constructor(
    private authService: AuthService,
    private petsDataService: PetsDataService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navParams: NavParams,
    private modalController: ModalController,
  ) {}

  ngOnInit(): void {
    this.petId = this.navParams.get('id');

    if (this.petId) {
      console.log('petId = ', this.petId);
      this.petsDataService.fetchById(this.petId).subscribe(result => {
        this.petData = result;
        console.log('this.petData = ', this.petData);
        this.loadPetDataToForm(this.petData);
      });
    }
  }

  loadPetDataToForm(data: Pet): void {
    console.log('petDonationForm -> loadPetDataToForm -> data =', data);

    this.selectState(data?.state);

    this.donationForm.setValue({
      name: data?.name,
      birthDate: data?.birthDate,
      gender: data?.gender,
      type: data?.type,
      breed: data?.breed,
      description: data?.description,
      vaccinated: data?.vaccinated,
      dewormed: data?.dewormed,
      castrated: data?.castrated,
      deficit: data?.deficit,
      cep: data?.cep,
      street: data?.street,
      number: data?.number,
      complement: data?.complement,
      neighborhood: data?.neighborhood,
      city: data?.city,
      state: data?.state,
      images: [],
    });
  }

  uploadFiles(event: any): void {
    const files = (event.target as HTMLInputElement).files;
    console.log('uploadFiles -> files = ', files);

    this.uploadedImages = files;
    console.log('uploadedImages = ', this.uploadedImages);
  }

  authenticate(request: PetRequest): void {
    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Carregando...' })
      .then(loadingEl => {
        loadingEl.present();

        const authObs = this.petId
          ? this.petsDataService.update(request)
          : this.petsDataService.create(request);

        authObs.subscribe(
          resData => {
            console.log(resData);
            this.isLoading = false;
            this.donationForm.reset();
            loadingEl.dismiss();
            this.modalController.dismiss();
          },
          errRes => {
            loadingEl.dismiss();
            console.log('errRes', errRes);
            this.showAlert(
              'Falha na Requisição',
              errRes?.error?.message || 'erro não identificado',
            );
            this.isLoading = false;
          },
        );
      });
  }

  onSubmit(): void {
    if (!this.donationForm.valid) {
      return;
    }

    const data: PetRequest = {
      id: this.petData?.id || undefined,
      name: this.donationForm?.value?.name,
      birthDate: this.donationForm?.value?.birthDate,
      gender: this.donationForm?.value?.gender,
      type: this.donationForm?.value?.type,
      breed: this.donationForm?.value?.breed,
      description: this.donationForm?.value?.description,
      vaccinated: this.isVaccinated,
      dewormed: this.isDewormed,
      castrated: this.isCastrated,
      deficit: this.isDeficit,
      userId: this.authService.getUser()?.id,
      cep: this.donationForm?.value?.cep,
      street: this.donationForm?.value?.street,
      number: this.donationForm?.value?.number,
      complement: this.donationForm?.value?.complement,
      neighborhood: this.donationForm?.value?.neighborhood,
      city: this.donationForm?.value?.city,
      state: this.donationForm?.value?.state,
      images: this.uploadedImages,
    };

    console.log('data = ', data);
    this.authenticate(data);
  }

  private showAlert(header: string, message: string) {
    this.alertCtrl
      .create({
        header: header,
        message: message,
        buttons: ['Entendi'],
      })
      .then(alertEl => {
        alertEl.present();
      });
  }

  closeModal(): void {
    this.modalController.dismiss();
  }
}
