export interface RegisterUserRequest {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  postcode: string;
  street: string;
  houseNumber: string;
  province: string;
  country: string;
}

export interface CreateUserModelRequest {
  email: string;
  username: string;
  password: string;
  roles: string[];
  enabled: boolean;
}

export interface CreateReviewRequest {
  content: string;
  bookIsbn: string;
}
