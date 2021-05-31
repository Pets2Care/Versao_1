import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  getFormattedDate(date: string): string {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  getAge(date: string): string {
    const today = new Date();
    const birthDate = new Date(date);
    //console.log('birthDate = ', birthDate);
    const years = birthDate.getFullYear() - today.getFullYear();
    const months = years * 12 - birthDate.getMonth() + today.getMonth();
    const days = today.getDate() - birthDate.getDate();
    //console.log('years = ', years);
    //console.log('months = ', months);

    const age =
      (years > 0 ? `${years} Ano(s),` : '') +
      (months > 0 ? `${months} Mes(es),` : '') +
      (days > 0 ? `${days} Dia(s)` : 'Idade não disponível');

    return age;
  }
}
