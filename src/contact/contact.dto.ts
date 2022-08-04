export interface CreateContactDTO {
  name: string;
  email: string;
  text: string;
}

export interface UpdateContactDTO {
  id: number;
  name: string;
  email: string;
  text: string;
}
