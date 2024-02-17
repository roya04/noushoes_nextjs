import img1 from './dataIMG/1.webp';
import img2 from './dataIMG/2.webp';
import img3 from './dataIMG/3.webp';
import img4 from './dataIMG/4.webp';
import img5 from './dataIMG/5.webp';
import img6 from './dataIMG/6.webp';
import img7 from './dataIMG/7.webp';
import img8 from './dataIMG/8.webp';
import img9 from './dataIMG/9.webp';
import img10 from './dataIMG/10.webp';
import img11 from './dataIMG/11.webp';
import img12 from './dataIMG/12.webp';
import img13 from './dataIMG/13.webp';
import img14 from './dataIMG/14.webp';
import img15 from './dataIMG/15.webp';
import img16 from './dataIMG/16.webp';
import img17 from './dataIMG/17.webp';
import img18 from './dataIMG/18.webp';
import img19 from './dataIMG/19.webp';
import img20 from './dataIMG/20.webp';
import img21 from './dataIMG/21.webp';

const shoeProducts = [
  {
    "id": 1,
    "brand": "Nike",
    "color": "Black",
    "price": 99.99,
    "sizes": ["41", "42", "43", "44", "45", "46"],
    "name": "Nike Air Max 1",
    "type": "Men",
    "image": img1,
    "discount": null
  },
  {
    "id": 2,
    "brand": "Nike",
    "color": "White",
    "price": 89.99,
    "sizes": ["35", "36", "37", "38", "39", "40"],
    "name": "Nike Air Force 1",
    "type": "Women",
    "image": img2,
    "discount": 15 
  },
  {
    "id": 3,
    "brand": "Adidas",
    "color": "Blue",
    "price": 109.99,
    "sizes": ["41", "42", "43", "44", "45", "46"],
    "name": "Adidas Ultraboost",
    "type": "Men",
    "image": img3,
    "discount": null
  },
  {
    "id": 4,
    "brand": "Puma",
    "color": "Red",
    "price": 79.99,
    "sizes": ["35", "36", "37", "38", "39", "40"],
    "name": "Puma Suede",
    "type": "Women",
    "image": img4,
    "discount": 10 
  },
  {
    "id": 5,
    "brand": "Reebok",
    "color": "Gray",
    "price": 79.99,
    "sizes": ["41", "42", "43", "44"],
    "name": "Reebok Classic",
    "type": "Men",
    "image": img5,
    "discount": null
  },
  {
    "id": 6,
    "brand": "Vans",
    "color": "Black",
    "price": 69.99,
    "sizes": ["35", "36", "37", "38", "39"],
    "name": "Vans Old Skool",
    "type": "Women",
    "image": img6,
    "discount": null
  },
  {
    "id": 7,
    "brand": "Converse",
    "color": "White",
    "price": 59.99,
    "sizes": ["41", "42", "43", "44"],
    "name": "Converse Chuck Taylor",
    "type": "Men",
    "image": img7,
    "discount": 20 
  },
  {
    "id": 8,
    "brand": "New Balance",
    "color": "Blue",
    "price": 89.99,
    "sizes": ["35", "36", "37", "38", "39", "40"],
    "name": "New Balance 574",
    "type": "Women",
    "image": img8,
    "discount": null
  },
  {
    "id": 9,
    "brand": "Under Armour",
    "color": "Red",
    "price": 109.99,
    "sizes": ["41", "42", "43", "44", "45", "46"],
    "name": "Under Armour HOVR",
    "type": "Men",
    "image": img9,
    "discount": null
  },
  {
    "id": 10,
    "brand": "Skechers",
    "color": "Pink",
    "price": 69.99,
    "sizes": ["35", "36", "37", "38", "39"],
    "name": "Skechers D'Lites",
    "type": "Women",
    "image": img10,
    "discount": 15 
  },
  {
    "id": 11,
    "brand": "Adidas",
    "color": "Black",
    "price": 99.99,
    "sizes": ["41", "42", "43", "44"],
    "name": "Adidas Stan Smith",
    "type": "Men",
    "image": img11,
    "discount": null
  },
  {
    "id": 12,
    "brand": "Nike",
    "color": "Green",
    "price": 79.99,
    "sizes": ["35", "36", "37", "38", "39", "40"],
    "name": "Nike Air Flyknit",
    "type": "Women",
    "image": img12,
    "discount": 10 
  },
  {
    "id": 13,
    "brand": "Puma",
    "color": "White",
    "price": 79.99,
    "sizes": ["41", "42", "43", "44", "45", "46"],
    "name": "Puma RS-X",
    "type": "Men",
    "image": img13,
    "discount": null
  },
  {
    "id": 14,
    "brand": "Reebok",
    "color": "Blue",
    "price": 89.99,
    "sizes": ["35", "36", "37", "38", "39", "40"],
    "name": "Reebok Pump",
    "type": "Women",
    "image": img14,
    "discount": null
  },
  {
    "id": 15,
    "brand": "Vans",
    "color": "Yellow",
    "price": 69.99,
    "sizes": ["41", "42", "43", "44", "45", "46"],
    "name": "Vans Sk8-Hi",
    "type": "Men",
    "image": img15,
    "discount": 20 
  },
  {
    "id": 16,
    "brand": "Converse",
    "color": "Black",
    "price": 59.99,
    "sizes": ["35", "36", "37", "38", "39"],
    "name": "Converse All Star",
    "type": "Women",
    "image": img16,
    "discount": null
  },
  {
    "id": 17,
    "brand": "New Balance",
    "color": "Gray",
    "price": 89.99,
    "sizes": ["41", "42", "43", "44"],
    "name": "New Balance 990",
    "type": "Men",
    "image": img17,
    "discount": null
  },
  {
    "id": 18,
    "brand": "Under Armour",
    "color": "Red",
    "price": 109.99,
    "sizes": ["35", "36", "37", "38", "39", "40"],
    "name": "Under Armour Charged",
    "type": "Women",
    "image": img18,
    "discount": null
  },
  {
    "id": 19,
    "brand": "Skechers",
    "color": "Green",
    "price": 69.99,
    "sizes": ["41", "42", "43", "44", "45", "46"],
    "name": "Skechers Memory Foam",
    "type": "Men",
    "image": img19,
    "discount": null
  },
  {
    "id": 20,
    "brand": "Adidas",
    "color": "Yellow",
    "price": 99.99,
    "sizes": ["35", "36", "37", "38", "39", "40"],
    "name": "Adidas NMD",
    "type": "Women",
    "image": img20,
    "discount": 15 
  },
  {
    "id": 21,
    "brand": "Nike",
    "color": "Pink",
    "price": 79.99,
    "sizes": ["41", "42", "43", "44", "45", "46"],
    "name": "Nike Joyride Run",
    "type": "Men",
    "image": img21,
    "discount": null
  }
];

export default shoeProducts;
