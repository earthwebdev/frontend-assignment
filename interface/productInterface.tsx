export interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
  }

  export interface ProductInterface {
    products: Array<Product>;
    //products: Array<Product>;
    data: Array<Product>;
  }