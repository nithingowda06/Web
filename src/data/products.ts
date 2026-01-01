export interface Product {
  id: number;
  image: string;
  title: string;
  amazonLink: string;
}

export const products: Product[] = [
  {
    id: 1,
    image: '/assets/images/products/tap.jpg',
    title: 'Kitchen Tap Spray Extender',
    amazonLink: 'https://amzn.in/d/7dIj95p',
  },
  {
    id: 2,
    image: '/assets/images/products/bag.webp',
    title: 'Kamron IronShell',
    amazonLink: 'https://kamron.in/products/kamron-tough-bp-hard',
  }
];
