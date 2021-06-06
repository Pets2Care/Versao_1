export interface RegisterRequest {
  id?: number;
  password: string;
  name: string;
  email: string;
  gender: string;
  cep: string;
  street: string;
  number: string;
  complement?: string; //opcional
  neighborhood: string;
  city: string;
  state: string;
  birthDate: string;
  telephone: string;
  description?: string; //opcional
  website?: string; //opcional
  avatar?: FileList; //opcional
  isSpotlight?: boolean; //padrao false
}
