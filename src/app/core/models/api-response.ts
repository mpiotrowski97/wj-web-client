import {User} from './user';
import {Category} from './category';
import {CartItem} from './cart-item';

export interface ContextInitResponse {
  currentLoggedUser: User;
  categories: Category[];
}

export interface LoginModelResponse {
  user: User;
}

export interface Pageable<T> {
  content: T[];
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface CartSummaryResponse {
  items: CartItem[];
  value: number;
}

// tslint:disable-next-line:no-empty-interface
export interface CreateUserModelResponse extends User {
}

export interface CreateOrderResponse {
  redirectUrl: string;
}

export interface CreateShelfResponse {
  name: string;
  booksQuantity: number;
}

export interface AddBookToShelfResponse {
  id: string;
  bookIsbn: string;
  shelfId: String;
}
