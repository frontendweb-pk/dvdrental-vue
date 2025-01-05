export type Status = "info" | "success" | "error" | "warning";

export interface Customer {
  customer_id?: number;
  store_id: number;
  first_name: string;
  last_name: string;
  email: string;
  address_id: number;
  active: boolean;
  create_date: Date;
  last_update: Date;
  activebool: boolean;
}

export interface Address {
  address_id?: number;
  address: string;
  address2: string;
  district: string;
  city_id: number;
  postal_code: string;
  phone: string;
  last_update: Date;
}

export interface City {
  city_id?: number;
  city: string;
  country_id: number;
  last_update: Date;
}

export interface Country {
  country_id?: number;
  country: string;
  last_update: Date;
}

export interface Staff {
  staff_id?: number;
  first_name: string;
  last_name: string;
  address_id: number;
  email: string;
  store_id: number;
  active: boolean;
  username: string;
  password: string;
  last_update: Date;
  picture: string;
}
