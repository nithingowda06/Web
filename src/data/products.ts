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
  },
  {
    id: 3,
    image: '/assets/images/products/dron.jpg',
    title: 'DJI Mic Air',
    amazonLink:
      'https://www.amazon.in/dp/B0DRVPVG7Y?ref=cm_sw_r_cso_wa_apin_dp_P9BC89A0F4QBWPVJ7P2R&social_share=cm_sw_r_cso_wa_apin_dp_P9BC89A0F4QBWPVJ7P2R&th=1',
  },
  {
    id: 4,
    image: '/assets/images/products/custotag.jpg',
    title: 'CustoTag SmartTag',
    amazonLink:
      'https://www.amazon.in/dp/B0FYP4J4LL?ref=cm_sw_r_cso_wa_apin_dp_34Y77AV3PVTADTQAF83Y&social_share=cm_sw_r_cso_wa_apin_dp_34Y77AV3PVTADTQAF83Y&th=1',
  },
  {
    id: 5,
    image: '/assets/images/products/egg.jpg',
    title: 'Egg Seater Gel',
    amazonLink: 'https://www.amazon.in/dp/B0F66GPMP3?ref=ppx_pop_mob_ap_share',
  },
  {
    id: 6,
    image: '/assets/images/products/bank.jpg',
    title: 'STARQ Inflate Pro',
    amazonLink: 'https://amzn.in/d/4aU3ELT',
  },
  {
    id: 7,
    image: '/assets/images/products/tools.jpg',
    title: 'COOLCOLD Precision Kit',
    amazonLink: 'https://www.amazon.in/dp/B0CCPD3XZR?ref=ppx_pop_mob_ap_share&th=1',
  },
  {
    id: 8,
    image: '/assets/images/products/fruit_plucker.png',
    title: 'Fruit Plucker Net',
    amazonLink: 'https://amzn.in/d/07t0U9wh',
  }
];
