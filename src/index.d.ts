// src/index.d.ts
import type { Product } from "./models/product";
import type { Store } from "./models/store";

declare module "@medusajs/medusa/dist/models/product" {
  interface Product {
    store_id?: string;
    store?: Store;
  }
}
declare module "@medusajs/medusa/dist/models/shipping-profile" {
  interface ShippingProfile {
    store_id?: string;
    store?: Store;
  }
}


declare module "@medusajs/medusa/dist/models/user" {
  interface User{
    store_id?: string;
    store?: Store;
  }
}