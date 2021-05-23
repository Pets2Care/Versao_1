export interface PetRequest {
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
  images: FileList;
}
