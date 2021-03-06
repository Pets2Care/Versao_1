import { Injectable } from '@angular/core';

import { Highlight } from '../models/highlight.model';
import { Pet } from '../models/pet.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  static today = new Date();

  getFormattedDate(date: string): string {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  getAge(date: string): string {
    const birthDate = new Date(date);
    //console.log('birthDate = ', birthDate);
    const years = HelperService.today.getFullYear() - birthDate.getFullYear();
    const months = birthDate.getMonth() - HelperService.today.getMonth();
    const days = birthDate.getDate() - HelperService.today.getDate();
    console.log('years = ', years);
    console.log('months = ', months);
    console.log('days = ', days);

    const age =
      (years > 0 ? `${years} Ano${years < 2 ? '' : 's'}` : '') +
      (months > 0 ? `, ${months} Mes${months < 2 ? '' : 'es'}` : '') +
      (days > 0 ? `, ${days} Dia${days < 2 ? '' : 's'}` : '');

    return age;
  }

  getAgeYears(date: string): string {
    const birthDate = new Date(date);
    //console.log('birthDate = ', birthDate);
    const years = HelperService.today.getFullYear() - birthDate.getFullYear();
    //console.log('years = ', years);
    const age = years > 0 ? `${years} Ano${years < 2 ? '' : 's'}` : '';

    return age;
  }

  truncateWithEllipses(text: string, max: number): string {
    return text.length > max ? `${text.substring(0, max)}...` : text;
  }

  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  capitalizeFirstLetterEachWord(text: string): string {
    const arr = text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return arr;
  }

  getPetType(type: string): string {
    return type.toLowerCase() === 'dog' ? 'Cachorro' : 'Gato';
  }

  getPetGender(gender: string): string {
    return gender.toLowerCase() === 'male' ? 'Macho' : 'Fêmea';
  }

  // getTelephone(tel: string): string {
  //   return `(${tel.split(0, 1)}) ${tel.split(2,4)}-`;
  // }

  getUserGender(gender: string): string {
    switch (gender.toLowerCase()) {
      case 'male':
        return 'Masculina';
      case 'female':
        return 'Feminina';
      default:
        return 'Não informada';
    }
  }

  formatPet(pet: Pet): Pet {
    const formattedPet = {
      ...pet,
      name: this.capitalizeFirstLetterEachWord(pet?.name),
      birthDate: this.getAge(pet?.birthDate),
      gender: this.getPetGender(pet?.gender),
      type: this.getPetType(pet?.type),
      breed: this.capitalizeFirstLetterEachWord(pet?.breed),
      street: this.capitalizeFirstLetterEachWord(pet?.street),
      neighborhood: this.capitalizeFirstLetterEachWord(pet?.neighborhood),
      createdAt: this.getFormattedDate(pet?.createdAt),
    };
    return formattedPet;
  }

  formatUser(user: User): User {
    const formattedUser = {
      ...user,
      name: this.capitalizeFirstLetterEachWord(user?.name),
      birthDate: this.getAgeYears(user?.birthDate),
      gender: this.getUserGender(user?.gender),
      street: this.capitalizeFirstLetterEachWord(user?.street),
      neighborhood: this.capitalizeFirstLetterEachWord(user?.neighborhood),
      createdAt: this.getFormattedDate(user?.createdAt),
    };
    return formattedUser;
  }

  formatHighlight(highlight: Highlight): Highlight {
    const formattedHighlight = {
      ...highlight,
      title: this.capitalizeFirstLetterEachWord(highlight?.title),
      createdAt: this.getFormattedDate(highlight?.createdAt),
    };
    return formattedHighlight;
  }
}
