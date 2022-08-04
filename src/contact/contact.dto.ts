export interface CreateContactDTO {
  name: string;
  email: string;
  message: string;
}

export interface UpdateContactDTO {
  id: number;
  name: string;
  email: string;
  message: string;
}
