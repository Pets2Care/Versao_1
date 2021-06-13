import { Injectable } from '@angular/core';

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
    const months = HelperService.today.getMonth() - birthDate.getMonth();
    const days = HelperService.today.getDate() - birthDate.getDate();
    //console.log('years = ', years);
    //console.log('months = ', months);

    const age =
      (years > 0 ? `${years} Ano${years < 2 ? '' : 's'}` : '') +
      (months > 0 ? `, ${months} Mes${months < 2 ? '' : 'es'}` : '') +
      (days > 0 ? `, ${days} Dia${days < 2 ? '' : 's'}` : 'não disponível');

    return age;
  }

  getAgeYears(date: string): string {
    const birthDate = new Date(date);
    //console.log('birthDate = ', birthDate);
    const years = HelperService.today.getFullYear() - birthDate.getFullYear();
    //console.log('years = ', years);
    const age =
      years > 0 ? `${years} Ano${years < 2 ? '' : 's'}` : 'não disponível';

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
    return type === 'dog' ? 'Cachorro' : 'Gato';
  }
  getPetGender(gender: string): string {
    return gender === 'male' ? 'Macho' : 'Fêmea';
  }

  formatPet(pet: Pet): Pet {
    const formattedPet = {
      ...pet,
      name: this.capitalizeFirstLetterEachWord(pet?.name),
      birthDate: this.getAge(pet?.birthDate),
      gender: this.getPetGender(pet?.gender),
      type: this.getPetType(pet?.type),
      breed: this.capitalizeFirstLetterEachWord(pet?.breed),
      description: this.capitalizeFirstLetter(pet?.description),
      street: this.capitalizeFirstLetterEachWord(pet?.street),
      neighborhood: this.capitalizeFirstLetterEachWord(pet?.neighborhood),
      createdAt: this.getFormattedDate(pet?.createdAt),
    };
    return formattedPet;
  }

  formatUser(user: User): User {
    return user;
  }
}
