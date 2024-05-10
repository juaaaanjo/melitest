import { Address } from "./address-interface";
import { Attribute } from "./attribute-interface";
import { DifferentialPricing } from "./differentialPricing-interface";
import { Installments } from "./installments-interface";
import { Seller } from "./seller-interface";
import { SellerAddress } from "./sellerAddress-interface";
import { Shipping } from "./shipping-interface";

export interface Result {
    id: string;
    site_id: string;
    title: string;
    seller: Seller;
    price: number;
    currency_id: string;
    available_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: string;
    condition: string;
    permalink: string;
    thumbnail: string;
    accepts_mercadopago: boolean;
    installments: Installments;
    shipping: Shipping;
    address?: Address;
    seller_address?: SellerAddress;
    attributes: Attribute[];
    differential_pricing: DifferentialPricing;
    original_price?: any;
    category_id: string;
    official_store_id?: any;
    catalog_product_id: string;
    tags: string[];
    catalog_listing: boolean;
  }