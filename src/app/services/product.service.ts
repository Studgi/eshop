import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: {
    id: number;
    type: number;
    name: string;
    image: string;
    used: boolean;
    shippingCountry: string;
    likes: number
    originalPrice: number;
    sellPrice: number;
    description: string;
  }[] = [
    {
      "id": 0,
      "type": 1,
      "name": "Ninja GR101 Sizzle Smokeless Indoor Grill & Griddle",
      "image": "https://m.media-amazon.com/images/I/81ngtMEQgoL._AC_SX679_.jpg",
      "used": false,
      "shippingCountry": "Egypt",
      "likes": 45,
      "originalPrice": 140,
      "sellPrice": 100,
      "description": "The Ninja GR101 Sizzle is a versatile smokeless indoor grill and griddle with 14-inch interchangeable nonstick plates. It features a dishwasher-safe removable mesh lid, capable of reaching up to 500°F for even edge-to-edge cooking. Ideal for grilling and griddling various foods with precision and ease."
    },
    {
      "id": 1,
      "type": 1,
      "name": "Dyson V11 Torque Drive Cordless Vacuum Cleaner",
      "image": "https://m.media-amazon.com/images/I/61xW5y39hjL._AC_SY879_.jpg",
      "used": false,
      "shippingCountry": "Egypt",
      "likes": 120,
      "originalPrice": 600,
      "sellPrice": 500,
      "description": "The Dyson V11 Torque Drive is a high-performance cordless vacuum cleaner designed for powerful suction on all floor types. With intelligent cleaning modes, it adapts to different surfaces, providing deep cleaning and extended battery life. Its advanced filtration system captures 99.97% of particles as small as 0.3 microns."
    },
    {
      "id": 2,
      "type": 1,
      "name": "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
      "image": "https://m.media-amazon.com/images/I/71XGo+Ix1GL._AC_SY300_SX300_.jpg",
      "used": false,
      "shippingCountry": "Egypt",
      "likes": 200,
      "originalPrice": 100,
      "sellPrice": 80,
      "description": "The Instant Pot Duo 7-in-1 Electric Pressure Cooker combines seven appliances in one: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer. It features 14 built-in smart programs, a stainless steel inner pot, and easy one-touch controls for versatile and convenient cooking."
    },
    {
      "id": 3,
      "type": 1,
      "name": "KitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer",
      "image": "https://m.media-amazon.com/images/I/71taTKFaB9L.__AC_SX300_SY300_QL70_ML2_.jpg",
      "used": true,
      "shippingCountry": "Egypt",
      "likes": 150,
      "originalPrice": 400,
      "sellPrice": 350,
      "description": "The KitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer is a durable and powerful kitchen appliance with a 5-quart stainless steel bowl. It features 10 speeds for precise mixing and comes with various attachments, including a flat beater, dough hook, and wire whip, making it perfect for a wide range of recipes."
    },
    {
      "id": 4,
      "type": 1,
      "name": "iRobot Roomba 960 Robot Vacuum",
      "image": "https://m.media-amazon.com/images/I/71moPp5mrmL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "used": true,
      "shippingCountry": "Egypt",
      "likes": 80,
      "originalPrice": 300,
      "sellPrice": 250,
      "description": "The iRobot Roomba 960 Robot Vacuum features advanced navigation and powerful cleaning performance. It uses a 3-stage cleaning system and dual multi-surface rubber brushes to remove dirt, dust, and pet hair. Compatible with Alexa and Google Assistant, it offers convenient voice control and scheduling via the iRobot HOME app."
    },
    {
      "id": 5,
      "type": 1,
      "name": "Breville BES870XL Barista Express Espresso Machine",
      "image": "https://m.media-amazon.com/images/I/61JZm1hoEzL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "used": false,
      "shippingCountry": "Egypt",
      "likes": 170,
      "originalPrice": 700,
      "sellPrice": 650,
      "description": "The Breville BES870XL Barista Express Espresso Machine allows you to create café-quality espresso at home. It features a built-in conical burr grinder, a steam wand for microfoam milk texturing, and precise espresso extraction. With its user-friendly interface, you can easily adjust grind size and dose for perfect coffee every time."
    },
    {
      "id": 6,
      "type": 2,
      "name": "Dell XPS 8930 Tower Desktop - 8th Gen Intel Core i7",
      "image": "https://m.media-amazon.com/images/I/71CpVbG4Q1L._AC_UL480_FMwebp_QL65_.jpg",
      "used": false,
      "shippingCountry": "Egypt",
      "likes": 110,
      "originalPrice": 1200,
      "sellPrice": 1100,
      "description": "The Dell XPS 8930 Tower Desktop is powered by an 8th Gen Intel Core i7 processor, delivering high performance for demanding tasks. It features ample storage, advanced graphics capabilities, and multiple ports for connectivity. This desktop is ideal for gaming, multimedia, and productivity applications."
    },
    {
      "id": 7,
      "type": 3,
      "name": "HP Pavilion Gaming Desktop, Ryzen 5 3500",
      "image": "https://m.media-amazon.com/images/I/71wA1a1vMiL._AC_UL480_FMwebp_QL65_.jpg",
      "used": true,
      "shippingCountry": "Egypt",
      "likes": 90,
      "originalPrice": 800,
      "sellPrice": 700,
      "description": "The HP Pavilion Gaming Desktop is equipped with a Ryzen 5 3500 processor and dedicated graphics, providing a smooth gaming experience. It features customizable LED lighting, high-speed SSD storage, and a compact design, making it a great choice for gamers and power users."
    },
    {
      "id": 8,
      "type": 2,
      "name": "Apple iMac 27-inch Retina 5K Display, 3.8GHz 8-core 10th-gen Intel Core i7",
      "image": "https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_SX679_.jpg",
      "used": false,
      "shippingCountry": "Egypt",
      "likes": 140,
      "originalPrice": 2200,
      "sellPrice": 2000,
      "description": "The Apple iMac 27-inch Retina 5K Display features a 3.8GHz 8-core 10th-gen Intel Core i7 processor for exceptional performance. Its stunning 5K Retina display offers vivid colors and sharp detail, making it ideal for creative professionals. With ample storage and advanced graphics, it's perfect for video editing, graphic design, and more."
    },
    {
      "id": 9,
      "type": 2,
      "name": "Acer Predator Orion 3000 Gaming Desktop",
      "image": "https://m.media-amazon.com/images/I/51WS3PsFnHL._AC_UL480_FMwebp_QL65_.jpg",
      "used": true,
      "shippingCountry": "Egypt",
      "likes": 60,
      "originalPrice": 1500,
      "sellPrice": 1300,
      "description": "The Acer Predator Orion 3000 Gaming Desktop is designed for serious gamers. It features a powerful processor, high-performance graphics card, and advanced cooling technology. With customizable RGB lighting and easy upgradability, it provides an immersive gaming experience and future-proof performance."
    },
    {
      "id": 10,
      "type": 2,
      "name": "Lenovo ThinkCentre M720q Tiny Desktop",
      "image": "https://m.media-amazon.com/images/I/51zvEXKvdTL._AC_UL480_FMwebp_QL65_.jpg",
      "used": false,
      "shippingCountry": "Egypt",
      "likes": 75,
      "originalPrice": 500,
      "sellPrice": 450,
      "description": "The Lenovo ThinkCentre M720q Tiny Desktop is a compact and powerful solution for business and personal use. It features a fast processor, ample storage, and multiple connectivity options. Its small form factor makes it easy to fit into any workspace without compromising on performance."
    },
    {
      "id": 11,
      "type": 3,
      "name": "ASUS ROG Strix GA15DH Gaming Desktop PC",
      "image": "https://m.media-amazon.com/images/I/51jmhaHVfbL._AC_UL480_FMwebp_QL65_.jpg",
      "used": true,
      "shippingCountry": "Egypt",
      "likes": 100,
      "originalPrice": 1800,
      "sellPrice": 1600,
      "description": "The ASUS ROG Strix GA15DH Gaming Desktop PC is built for competitive gaming with a high-performance AMD processor and NVIDIA graphics card. It features a sleek design, customizable RGB lighting, and robust cooling solutions. Ideal for gamers who demand speed, power, and style."
    },
    {
      "id": 12,
      "type": 5,
      "name": "Samsung Galaxy S21 Ultra 5G",
      "image": "https://m.media-amazon.com/images/I/81kfA-GtWwL._AC_SX679_.jpg",
      "used": true,
      "shippingCountry": "Egypt",
      "likes": 220,
      "originalPrice": 1200,
      "sellPrice": 1100,
      "description": "The Samsung Galaxy S21 Ultra 5G is a top-tier smartphone featuring a stunning 6.8-inch AMOLED display, advanced camera system with 108MP sensor, and powerful Exynos 2100 processor. It supports 5G connectivity, offering ultra-fast speeds, and comes with a large battery for extended use."
    },
    {
      "id": 13,
      "type": 5,
      "name": "Apple iPhone 12 Pro Max",
      "image": "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_SX679_.jpg",
      "used": false,
      "shippingCountry": "Egypt",
      "likes": 250,
      "originalPrice": 1300,
      "sellPrice": 1200,
      "description": "The Apple iPhone 12 Pro Max features a 6.7-inch Super Retina XDR display, A14 Bionic chip, and a pro camera system with 12MP ultra-wide, wide, and telephoto lenses. It supports 5G for faster connectivity and includes advanced features like LiDAR for enhanced AR experiences."
    },
    {
      "id": 14,
      "type": 4,
      "name": "Google Pixel 5",
      "image": "https://m.media-amazon.com/images/I/512iHadbEbL._AC_UL480_FMwebp_QL65_.jpg",
      "used": true,
      "shippingCountry": "Egypt",
      "likes": 95,
      "originalPrice": 700,
      "sellPrice": 600,
      "description": "The Google Pixel 5 is a sleek and powerful smartphone with a 6.0-inch OLED display, Snapdragon 765G processor, and dual rear cameras. It offers 5G connectivity, long battery life, and features like Night Sight and Portrait Mode for stunning photography."
    },
    {
      "id": 15,
      "type": 4,
      "name": "OnePlus 9 Pro",
      "image": "https://m.media-amazon.com/images/I/61LvUvbZGlL._AC_SX679_.jpg",
      "used": false,
      "shippingCountry": "Egypt",
      "likes": 140,
      "originalPrice": 900,
      "sellPrice": 850,
      "description": "The OnePlus 9 Pro is a flagship smartphone featuring a 6.7-inch Fluid AMOLED display, Snapdragon 888 processor, and Hasselblad camera system. It supports 5G connectivity, fast charging, and has a sleek design, making it ideal for power users and photography enthusiasts."
    },
    {
      "id": 16,
      "type": 5,
      "name": "Sony Xperia 1 II",
      "image": "https://m.media-amazon.com/images/I/618uGShdPgL._AC_UL480_FMwebp_QL65_.jpg",
      "used": true,
      "shippingCountry": "Egypt",
      "likes": 85,
      "originalPrice": 1100,
      "sellPrice": 950,
      "description": "The Sony Xperia 1 II is a premium smartphone with a 6.5-inch 4K HDR OLED display, Snapdragon 865 processor, and triple camera system with ZEISS optics. It supports 5G connectivity and offers advanced features like Cinematography Pro for professional-grade video recording."
    },
    {
      "id": 17,
      "type": 5,
      "name": "Xiaomi Mi 11",
      "image": "https://m.media-amazon.com/images/I/51-xwukutpL._AC_UL480_FMwebp_QL65_.jpg",
      "used": false,
      "shippingCountry": "Egypt",
      "likes": 130,
      "originalPrice": 800,
      "sellPrice": 750,
      "description": "The Xiaomi Mi 11 is a high-end smartphone featuring a 6.81-inch AMOLED display, Snapdragon 888 processor, and 108MP triple camera system. It supports 5G connectivity and offers features like fast charging, long battery life, and a sleek design for an exceptional user experience."
    },
    {
      "id": 18,
      "type": 5,
      "name": "Oppo Find X3 Pro",
      "image": "https://m.media-amazon.com/images/I/51NwV--D7eL._AC_UL480_FMwebp_QL65_.jpg",
      "used": true,
      "shippingCountry": "Egypt",
      "likes": 105,
      "originalPrice": 1000,
      "sellPrice": 900,
      "description": "The Oppo Find X3 Pro is a flagship smartphone with a 6.7-inch AMOLED display, Snapdragon 888 processor, and quad-camera system with a 50MP primary sensor. It supports 5G connectivity, fast charging, and offers advanced features like AI-enhanced photography and a sleek, ergonomic design."
    },
    {
      "id": 19,
      "type": 4,
      "name": "Huawei P40 Pro",
      "image": "https://m.media-amazon.com/images/I/51xRf-EqtGL._AC_UL480_FMwebp_QL65_.jpg",
      "used": false,
      "shippingCountry": "Egypt",
      "likes": 115,
      "originalPrice": 900,
      "sellPrice": 850,
      "description": "The Huawei P40 Pro is a premium smartphone with a 6.58-inch OLED display, Kirin 990 5G processor, and a powerful quad-camera system co-engineered with Leica. It offers 5G connectivity, exceptional low-light photography, and a sleek design for an immersive and high-performance experience."
    },

    {
      "id": 20,
      "type": 6,
      "name": "Arduino Uno",
      "image": "https://m.media-amazon.com/images/I/71bN0pHxrLL._AC_UL480_FMwebp_QL65_.jpg",
      "used": false,
      "shippingCountry": "USA",
      "likes": 150,
      "originalPrice": 25,
      "sellPrice": 20,
      "description": "Arduino Uno R3 Microcontroller board based on the ATmega328P."
    },
    {
      "id": 21,
      "type": 6,
      "name": "Raspberry Pi 4",
      "image": "https://m.media-amazon.com/images/I/81IT3bLYmBL._AC_UL480_FMwebp_QL65_.jpg",
      "used": true,
      "shippingCountry": "UK",
      "likes": 220,
      "originalPrice": 35,
      "sellPrice": 30,
      "description": "Raspberry Pi 4 Model B with 4GB RAM, ideal for a variety of projects."
    },
    {
      "id": 22,
      "type": 6,
      "name": "ESP8266 Wi-Fi Module",
      "image": "https://m.media-amazon.com/images/I/61QGT3oWxOL._AC_UL480_FMwebp_QL65_.jpg",
      "used": false,
      "shippingCountry": "China",
      "likes": 340,
      "originalPrice": 10,
      "sellPrice": 8,
      "description": "ESP8266 Wi-Fi module for IoT projects with built-in TCP/IP protocol stack."
    },
    {
      "id": 23,
      "type": 6,
      "name": "RGB LED Strip",
      "image": "https://m.media-amazon.com/images/I/71CG3Rtr8dL._AC_UL480_FMwebp_QL65_.jpg",
      "used": false,
      "shippingCountry": "China",
      "likes": 180,
      "originalPrice": 15,
      "sellPrice": 12,
      "description": "RGB LED strip with WS2812B LEDs, perfect for decorative lighting projects."
    },
    {
      "id": 24,
      "type": 6,
      "name": "Stepper Motor",
      "image": "https://m.media-amazon.com/images/I/61c8LbnSmsL._AC_UL480_FMwebp_QL65_.jpg",
      "used": false,
      "shippingCountry": "Germany",
      "likes": 95,
      "originalPrice": 18,
      "sellPrice": 15,
      "description": "NEMA 17 stepper motor for precise control in robotics and CNC applications."
    },
    {
      "id": 25,
      "type": 6,
      "name": "Micro Servo Motor",
      "image": "https://m.media-amazon.com/images/I/41asr-jo+BL._AC_UL480_FMwebp_QL65_.jpg",
      "used": true,
      "shippingCountry": "Japan",
      "likes": 130,
      "originalPrice": 12,
      "sellPrice": 10,
      "description": "SG90 micro servo motor for small-scale robotics and model projects."
    }
  ];
}
