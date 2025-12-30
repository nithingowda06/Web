export interface Product {
  id: number;
  image: string;
  title: string;
  amazonLink: string;
}

export const products: Product[] = [
  {
    id: 1,
    image: '/tap.jpg',
    title: 'Kitchen Tap Spray Extender',
    amazonLink: 'https://amzn.in/d/7dIj95p',
  }
];
