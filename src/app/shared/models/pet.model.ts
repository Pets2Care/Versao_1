import { PetImage } from './petImage.model';

export interface Pet {
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
  createdAt: string;
  images: PetImage[];
}
