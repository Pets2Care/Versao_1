export interface PetRequest {
  id?: number; //opcional
  name: string;
  birthDate: string;
  gender: string;
  type: string;
  breed: string;
  description: string;
  vaccinated: boolean; //padrão false
  dewormed: boolean; //padrão false
  castrated: boolean; //padrão false
  deficit: boolean; //padrão false
  userId: number; //talvez não precise (no back não precisa)
  cep: string;
  street: string;
  number: string;
  complement?: string; //opcional
  neighborhood: string;
  city: string;
  state: string;
  images: FileList;
  isActive?: boolean; //padrão true
  isSpotlight?: boolean; //padrão false
}
