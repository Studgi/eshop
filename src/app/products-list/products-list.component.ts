import {Component, OnInit} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {FilterService} from "../services/filter.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  products: {
    id: number;
    type: number;
    name: string;
    image: string;
    used: boolean;
    shippingCountry: string;
    likes: number;
    originalPrice: number;
    sellPrice: number;
  }[] | undefined;

  filterId: number = 0;
  search: string = '';
  id: number = -1;

  constructor(private service: FilterService) {
  }

  ngOnInit() {
    // TODO: Retrieve data from mongo
    this.products = [
      // Home appliances
      {
        id: 0,
        type: 1,
        name: 'Ninja GR101 Sizzle Smokeless Indoor Grill & Griddle, 14\'\' Interchangeable Nonstick Plates, Dishwasher-Safe Removable Mesh Lid, 500F Max Heat, Even Edge-to-Edge Cooking, Grey/Silver',
        image: 'https://m.media-amazon.com/images/I/81ngtMEQgoL._AC_SX679_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 45,
        originalPrice: 140,
        sellPrice: 100
      },
      {
        id: 1,
        type: 1,
        name: 'Dyson V11 Torque Drive Cordless Vacuum Cleaner',
        image: 'https://m.media-amazon.com/images/I/61xW5y39hjL._AC_SY879_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 120,
        originalPrice: 600,
        sellPrice: 500
      },
      {
        id: 2,
        type: 1,
        name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
        image: 'https://m.media-amazon.com/images/I/71XGo+Ix1GL._AC_SY300_SX300_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 200,
        originalPrice: 100,
        sellPrice: 80
      },
      {
        id: 3,
        type: 1,
        name: 'KitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer',
        image: 'https://m.media-amazon.com/images/I/71taTKFaB9L.__AC_SX300_SY300_QL70_ML2_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 150,
        originalPrice: 400,
        sellPrice: 350
      },
      {
        id: 4,
        type: 1,
        name: 'iRobot Roomba 960 Robot Vacuum',
        image: 'https://m.media-amazon.com/images/I/71moPp5mrmL.__AC_SX300_SY300_QL70_ML2_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 80,
        originalPrice: 300,
        sellPrice: 250
      },
      {
        id: 5,
        type: 1,
        name: 'Breville BES870XL Barista Express Espresso Machine',
        image: 'https://m.media-amazon.com/images/I/61JZm1hoEzL.__AC_SX300_SY300_QL70_ML2_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 170,
        originalPrice: 700,
        sellPrice: 650
      },

      // PCs
      {
        id: 6,
        type: 2,
        name: 'Dell XPS 8930 Tower Desktop - 8th Gen Intel Core i7',
        image: 'https://m.media-amazon.com/images/I/71CpVbG4Q1L._AC_UL480_FMwebp_QL65_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 110,
        originalPrice: 1200,
        sellPrice: 1100
      },
      {
        id: 7,
        type: 2,
        name: 'HP Pavilion Gaming Desktop, Ryzen 5 3500',
        image: 'https://m.media-amazon.com/images/I/71wA1a1vMiL._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 90,
        originalPrice: 800,
        sellPrice: 700
      },
      {
        id: 8,
        type: 2,
        name: 'Apple iMac 27-inch Retina 5K Display, 3.8GHz 8-core 10th-gen Intel Core i7',
        image: 'https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_SX679_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 140,
        originalPrice: 2200,
        sellPrice: 2000
      },
      {
        id: 9,
        type: 2,
        name: 'Acer Predator Orion 3000 Gaming Desktop',
        image: 'https://m.media-amazon.com/images/I/51WS3PsFnHL._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 60,
        originalPrice: 1500,
        sellPrice: 1300
      },
      {
        id: 10,
        type: 2,
        name: 'Lenovo ThinkCentre M720q Tiny Desktop',
        image: 'https://m.media-amazon.com/images/I/51zvEXKvdTL._AC_UL480_FMwebp_QL65_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 75,
        originalPrice: 500,
        sellPrice: 450
      },
      {
        id: 11,
        type: 2,
        name: 'ASUS ROG Strix GA15DH Gaming Desktop PC',
        image: 'https://m.media-amazon.com/images/I/51jmhaHVfbL._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 100,
        originalPrice: 1000,
        sellPrice: 900
      },

      // Laptops
      {
        id: 12,
        type: 3,
        name: 'Apple MacBook Pro 16-inch, 2.6GHz Intel Core i7',
        image: 'https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SX679_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 200,
        originalPrice: 2400,
        sellPrice: 2200
      },
      {
        id: 13,
        type: 3,
        name: 'Dell XPS 13 7390 2-in-1 Laptop',
        image: 'https://m.media-amazon.com/images/I/81M3+FC6LtL._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 130,
        originalPrice: 1800,
        sellPrice: 1600
      },
      {
        id: 14,
        type: 3,
        name: 'HP Spectre x360 13-ap0101nr 2-in-1 Laptop',
        image: 'https://m.media-amazon.com/images/I/61lLRQw2ZoL._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 120,
        originalPrice: 1500,
        sellPrice: 1400
      },
      {
        id: 15,
        type: 3,
        name: 'ASUS ROG Zephyrus G14 14-inch Gaming Laptop',
        image: 'https://m.media-amazon.com/images/I/616OnX7KKaL._AC_UL480_FMwebp_QL65_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 160,
        originalPrice: 1600,
        sellPrice: 1500
      },
      {
        id: 16,
        type: 3,
        name: 'Lenovo Yoga C930 2-in-1 Laptop',
        image: 'https://m.media-amazon.com/images/I/61eseE6wUhL._AC_UL480_FMwebp_QL65_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 90,
        originalPrice: 1200,
        sellPrice: 1100
      },
      {
        id: 17,
        type: 3,
        name: 'Microsoft Surface Laptop 3, 15-inch',
        image: 'https://m.media-amazon.com/images/I/71O+ltdAY8L._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 110,
        originalPrice: 2000,
        sellPrice: 1800
      },

      // Tablets
      {
        id: 18,
        type: 4,
        name: 'Apple iPad Pro 12.9-inch, 4th Gen',
        image: 'https://m.media-amazon.com/images/I/81Pi4nhjlwL._AC_SX679_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 250,
        originalPrice: 1200,
        sellPrice: 1100
      },
      {
        id: 19,
        type: 4,
        name: 'Samsung Galaxy Tab S6 Lite 10.4-inch',
        image: 'https://m.media-amazon.com/images/I/41mh0yiodOL._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 140,
        originalPrice: 400,
        sellPrice: 350
      },
      {
        id: 20,
        type: 4,
        name: 'Microsoft Surface Pro 7',
        image: 'https://m.media-amazon.com/images/I/71pOvDzmhRL._AC_UL480_FMwebp_QL65_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 180,
        originalPrice: 900,
        sellPrice: 850
      },
      {
        id: 21,
        type: 4,
        name: 'Amazon Fire HD 10 Tablet',
        image: 'https://m.media-amazon.com/images/I/61Rn+e870QL._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 70,
        originalPrice: 150,
        sellPrice: 120
      },
      {
        id: 22,
        type: 4,
        name: 'Lenovo Tab M10 Plus, 10.3-inch',
        image: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SX679_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 50,
        originalPrice: 200,
        sellPrice: 180
      },
      {
        id: 23,
        type: 4,
        name: 'Google Pixel Slate 12.3-inch',
        image: 'https://m.media-amazon.com/images/I/71nJxwi2gYL._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 100,
        originalPrice: 800,
        sellPrice: 700
      },

      // Phones
      {
        id: 24,
        type: 5,
        name: 'Apple iPhone 12 Pro Max',
        image: 'https://m.media-amazon.com/images/I/71DVgBTdyLL._AC_SX679_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 300,
        originalPrice: 1100,
        sellPrice: 1000
      },
      {
        id: 25,
        type: 5,
        name: 'Samsung Galaxy S21 Ultra',
        image: 'https://m.media-amazon.com/images/I/41ru7kMN9mL._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 220,
        originalPrice: 1200,
        sellPrice: 1100
      },
      {
        id: 26,
        type: 5,
        name: 'Google Pixel 5',
        image: 'https://m.media-amazon.com/images/I/7199N-Uz2AL._AC_SX679_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 190,
        originalPrice: 700,
        sellPrice: 650
      },
      {
        id: 27,
        type: 5,
        name: 'OnePlus 9 Pro',
        image: 'https://m.media-amazon.com/images/I/41wWUckY4nL._AC_UL480_FMwebp_QL65_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 180,
        originalPrice: 900,
        sellPrice: 850
      },
      {
        id: 28,
        type: 5,
        name: 'Sony Xperia 1 II',
        image: 'https://m.media-amazon.com/images/I/61PnZGt2ThL._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 110,
        originalPrice: 1200,
        sellPrice: 1100
      },
      {
        id: 29,
        type: 5,
        name: 'Huawei P40 Pro',
        image: 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SX679_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 100,
        originalPrice: 1000,
        sellPrice: 900
      },

      // Electronics
      {
        id: 30,
        type: 6,
        name: 'Sony WH-1000XM4 Wireless Noise-Canceling Overhead Headphones',
        image: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX679_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 280,
        originalPrice: 350,
        sellPrice: 300
      },
      {
        id: 31,
        type: 6,
        name: 'Bose SoundLink Revolve+ Bluetooth Speaker',
        image: 'https://m.media-amazon.com/images/I/81BQvJEKV3L._AC_UL480_FMwebp_QL65_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 150,
        originalPrice: 300,
        sellPrice: 250
      },
      {
        id: 32,
        type: 6,
        name: 'Canon EOS R5 Full-Frame Mirrorless Camera',
        image: 'https://m.media-amazon.com/images/I/61ZZE+5zGhL._AC_UL480_FMwebp_QL65_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 230,
        originalPrice: 3900,
        sellPrice: 3700
      },
      {
        id: 33,
        type: 6,
        name: 'Samsung 49-Inch CRG9 Curved Gaming Monitor',
        image: 'https://m.media-amazon.com/images/I/61BJSZH2KLL._AC_UL480_FMwebp_QL65_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 170,
        originalPrice: 1500,
        sellPrice: 1400
      },
      {
        id: 34,
        type: 6,
        name: 'Fitbit Charge 4 Fitness and Activity Tracker',
        image: 'https://m.media-amazon.com/images/I/71smqRr0pmL._AC_SX679_.jpg',
        used: true,
        shippingCountry: 'Egypt',
        likes: 60,
        originalPrice: 150,
        sellPrice: 130
      },
      {
        id: 35,
        type: 6,
        name: 'Nintendo Switch with Neon Blue and Neon Red Joy-Con',
        image: 'https://m.media-amazon.com/images/I/61-PblYntsL._AC_SX679_.jpg',
        used: false,
        shippingCountry: 'Egypt',
        likes: 320,
        originalPrice: 300,
        sellPrice: 280
      }
    ];

    this.service.currentFilter.subscribe((id) => {
      this.filterId = id;
    });

    this.service.currentSearch.subscribe((value) => {
      this.search = value;
    })
  }
}
