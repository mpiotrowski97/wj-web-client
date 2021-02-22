import {CartItem} from './cart-item';
import {Address} from './address';
import {ShippingMethod} from './shipping-method';

export interface Order {
  items: CartItem[];
  address: Address;
  shipmentMethod: ShippingMethod;
  value: number;
}
