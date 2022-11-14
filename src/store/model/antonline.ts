import {Store} from './store';

export const AntOnline: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.uk-button',
      text: ['Add to Cart'],
    },
    maxPrice: {
      container: '.cPrice',
      euroFormat: false,
    },
    outOfStock: {
      container: '.priceView-price .priceView-hero-price span',
      text: ['Sold Out'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.antonline.com/Sony/Electronics/Gaming_Devices/Gaming_Consoles/1409507',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.antonline.com/Microsoft/Electronics/Gaming_Devices/Gaming_Consoles/1414487',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.antonline.com/Microsoft/Electronics/Gaming_Devices/Gaming_Consoles/1409527',
    },
    {
      brand: 'pny',
      model: '',
      series: '4090',
      url: 'https://www.antonline.com/PNY/Computers/Video_Cards/Graphic_Cards/1462643',
    },
    {
      brand: 'msi',
      model: 'gaming trio',
      series: '4090',
      url: 'https://www.antonline.com/MSI/Computers/Video_Cards/Graphic_Cards/1461935',
    },
    {
      brand: 'msi',
      model: 'suprim liquid',
      series: '4090',
      url: 'https://www.antonline.com/MSI/Computers/Video_Cards/Graphic_Cards/1461934',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '4090',
      url: 'https://www.antonline.com/MSI/Computers/Video_Cards/Graphic_Cards/1461932',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '4090',
      url: 'https://www.antonline.com/MSI/Computers/Video_Cards/Graphic_Cards/1461933',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '4090',
      url: 'https://www.antonline.com/Asus/Computers/Video_Cards/Graphic_Cards/1462394',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '4090',
      url: 'https://www.antonline.com/Asus/Computers/Video_Cards/Graphic_Cards/1462392',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '4090',
      url: 'https://www.antonline.com/Asus/Computers/Video_Cards/Graphic_Cards/1462393',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '4090',
      url: 'https://www.antonline.com/Gigabyte/Computers/Video_Cards/Graphic_Cards/1461626',
    },
  ],
  name: 'antonline',
};
