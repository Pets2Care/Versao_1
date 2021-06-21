import { Pet } from './pet.model';
import { User } from './user.model';

export interface Message {
  id: number;
  userId: User; //quem solicita
  ownerId: User; //dono do anuncio
  advertId: Pet; //id do anuncio do pet
  accepted: boolean; // se foi aceito ou não pelo doador. null = pendente
  createdAt: string;
}
