import offer from "../Assests/promo/promo1.jpg";
import image from "../Assests//products/1200W lithium blue box solarator.png";
import image1 from "../Assests//promo/partnership.png";
import solar from "../Assests/solar 4.jpg";
//projects
import solar2 from "../Assests/projects/dr.jpg";
import morgue from "../Assests/projects/morgue.jpg";
// brands
import photos from "../Assests/assets/brand//br-1.png";
import photos1 from "../Assests/assets/brand/br-2.png";
import photos2 from "../Assests/assets/brand/br-3.jpg";
import photos3 from "../Assests/assets/brand/br-4.jpg";
import photos4 from "../Assests/assets/brand/br-5.jpg";
import photos6 from "../Assests/assets/brand/br-6.png";
import photos7 from "../Assests/assets/brand/br-7.gif";
import photos8 from "../Assests/assets/brand/br-8.webp";
import photos9 from "../Assests/assets/brand/br-9.jpg";
import photos10 from "../Assests/assets/brand/br-10.jpg";
import photos11 from "../Assests/assets/brand/br-11.jpg";
import photos12 from "../Assests/assets/brand/ECOZEN.png";
import photos5 from "../Assests/assets/brand/CWORTH LOGO.jpg";
//products
import solarator from "../Assests/products/solarator.jpg";
import appleLaptop2 from "../Assests/products/xtra-power-floodlight-300w.jpg";
import solarator2 from "../Assests/products/1.2kwh-solar-bluebox.jpg";
import gamingLaptop1 from "../Assests/products/weidaisi-solar-kit.jpg";
import gamingLaptop2 from "../Assests/products/Solar-baby-pro.jpg";
import streetlight1 from "../Assests/products/CL4-solar-streetlights.jpg";
import lighteningkit2 from "../Assests/products/50w-solarbaby.jpg";
import solarator3 from "../Assests/products/1.5kw-scalable-hybrid-lithium-solarator.jpg";
import solarator4 from "../Assests/products/1kw-compacy-solarator.jpg";
import streetlight from "../Assests/products/100W-NDDC-standard-solar-streetlight.jpg";
import solarator5 from "../Assests/products/2kva-3kwh-compact-solarator.jpg";
import inverter from "../Assests/products/5kva-hybrid-growatts.jpg";
import solarator6 from "../Assests/products/5kw-JCNS-lithium-solarator.jpg";
import inverter2 from "../Assests/products/5kwh-EV-lithium-phosphate-battery.jpg";
import solarator7 from "../Assests/products/128wh-DC-Solarator.jpg";
import tv from "../Assests/products/32inches-12w-solar-tv.jpg";
import lighteningkit from "../Assests/products/45W-solar-yellow-box.jpg";
import lighteningkit1 from "../Assests/products/50w-lithium-solar-yelow-box.jpg";
import solarator8 from "../Assests/products/200W400WH-compact-lithium-solarator.jpg";
import solarator9 from "../Assests/products/300w-500w-JCNS-compact-solarators.jpg";
import breaker from "../Assests/products/AC-DC-breakers.jpg";
import charcoalstove from "../Assests/products/jikokoa-charcoal-stove.jpg";
import phonecharger from "../Assests/products/commercial-DC-phone-charger.jpg";
import icemakers from "../Assests/products/solar-ice-makers.jpg";
import icemakers1 from "../Assests/products/solar-ice-maker.jpg";
import studentLaptophp2 from "../Assests/products/5kwh-EV-lithium-phosphate-battery.jpg";
import pumatshirt1 from "../Assests/products/solar-freezer-118l.jpg";
import travelLaptop1 from "../Assests/products/solar-ice-makers.jpg";
import travelLaptop2 from "../Assests/products/Solar-baby-pro.jpg";
import kabirkabir from "../Assests/products/smart-switches.jpg";
import oppophone2 from "../Assests/products/solar-freezer-118l.jpg";
import vivo1 from "../Assests/products/500w-compact-solarator.jpg";
import meluha from "../Assests/products/500W-YELLOW-BOX.jpg";
import Wuthering from "../Assests/products/300w-500w-JCNS-compact-solarators.jpg";
import bumkeshbakshi from "../Assests/products/300W-XTRA-POWER-SOLARATOR.jpg";
import womenblouse from "../Assests/products/400wh-200w-Solarator.jpg";
import iphonXR2 from "../Assests/products/500w-compact-solarator.jpg";
import womenkurtha from "../Assests/products/smart-switches.jpg";
import dovebodylotion from "../Assests/products/smart-switches.jpg";
import babycostume from "../Assests/products/smart-switches.jpg";
import fragrancedeonevia from "../Assests/products/sms-floodlight.jpg";
import parkavenueperfume from "../Assests/products/AC-DC-breakers.jpg";
import kidkurtha from "../Assests/products/sms-floodlight.jpg";
import sunderkand from "../Assests/products/5kwh-EV-lithium-phosphate-battery.jpg";

export const TimeCountData = [
  {
    time: 1,
    category: "days",
  },
  {
    time: 3,
    category: "Hours",
  },
  {
    time: 3,
    category: "Minutes",
  },
  ,
  {
    time: 3,
    category: "seconds",
  },
];

const structureOfCategoryData = [
  // Category 1
  {
    title: "", // title of category,
    keywords: [], // keywords of category,
    filters: [], // array of filter objects for the category
  },
  {}, // Category 2 ...
];

// Structure of filter array
const filtersStructure = {
  // Filter 1
  filterName: {
    filterName: "", // title of filter
    filterList: ["", ""], // array of filter values of type String
  },
  filter2: {}, // Filter 2 ...
};

// Structure of product array
const productsStructure = [
  // Product 1
  {
    filter1: "", // filter1 value
    filter2: "", // filter2 value
    title: "", // title of product
    category: "", // category of product
    price: 1, // price of product in INR
    imgs: ["", ""], // array of images of product
    specs: ["", ""], // Array or String of specs of product -> If Array, then render as list else if String, then render as single line
    inStock: 20, // quantity in stock of product -> If 0, then hide from the store, or less than 10, then show a "Very few left" or play with this value
    eta: 20, // estimated time of arrival of product in mins
    id: "", // unique id of product
    rating: 0.0, // rating of product
  },
];

// Actual Data
const categories = {
  Mobiles: {
    title: "Mobiles",
    keywords: [],
    filters: {
      Brand: {
        filterName: "Brand",
        filterList: [
          "Apple",
          "Samsung",
          "Redmi",
          "Jio",
          "OnePlus",
          "Realme",
          "Oppo",
          "Vivo",
          "Mi",
        ],
      },
      RAM: {
        filterName: "RAM",
        filterList: ["4 MB", "2 GB", "4 GB", "6 GB", "8 GB"],
      },
    },
  },
  Books: {
    title: "Books",
    keywords: "",
    filters: {
      Language: {
        filterName: "Language",
        filterList: ["English", "Hindi", "Marathi"],
      },
      Genre: {
        filterName: "Genre",
        filterList: ["Fiction", "Historical", "Mystery", "Romance", "Poetry"],
      },
    },
  },
  Clothings: {
    title: "Clothings",
    keywords: "",
    filters: {
      For: {
        filterName: "For",
        filterList: ["Kids", "Men", "Women"],
      },
    },
  },
  Beauty: {
    title: "Beauty",
    keywords: "",
    filters: {
      Type: {
        filterName: "Type",
        filterList: [
          "Bath and Body",
          "Fragrance",
          "Skin Care",
          "Hair Care",
          "Makeup",
        ],
      },
    },
  },
  Furniture: {
    title: "Furniture",
    keywords: "",
    filters: {
      Type: {
        filterName: "Type",
        filterList: ["Office Chair", "Desk", "Beds", "Sofas", "Wardrobes"],
      },
    },
  },
  Laptops: {
    title: "Laptops",
    keywords: "",
    filters: {
      For: {
        filterName: "For",
        filterList: [
          "Students",
          "Travel",
          "Coding",
          "Gaming",
          "Content Creation",
        ],
      },
      Brand: {
        filterName: "Brand",
        filterList: ["Acer", "Dell", "HP", "Lenovo", "Asus", "Apple"],
      },
      RAM: {
        filterName: "RAM",
        filterList: ["4 GB", "8 GB", "16 GB", "32 GB", "64 GB"],
      },
      Processor: {
        filterName: "Processor",
        filterList: ["Intel", "AMD"],
      },
      DisplaySize: {
        filterName: "Display Size",
        filterList: ["14", "15.6", "16"],
      },
      HasSSD: {
        filterName: "Has SSD?",
        filterList: ["Yes", "No"],
      },
    },
  },
};

// Products
export const ProductData = [
  {
    Brand: "Solar bluebox",
    RAM: "1.2kwh (1,200watts)", // filters
    title: "1.2kwh (1,200watts) solar bluebox (with accessories)",
    category: "Solarators",
    price: 650000 ,
    imgs: [solarator, solarator2],
    quantity: 1,
    specs: [
      // Always check whether this is Array or String, if Array -> Bulleded List else if String -> Para
      "1.2kwh all-in-one lithium solar generator with 6 DC power ports, AC power port, free 4 DC bulbs+310w foldable solar panel." ,
      "This unit can power 6 lighting points + 118L DC freezer+laptop+deskjet printer+DC standing fan. ",
      "1.2kwh all-in-one lithium solar generator with 6 DC power ports.",
      "AC power port, free 4 DC bulbs+310w foldable solar panel. ",
      "This unit can power 6 lighting points + 118L DC freezer+laptop+deskjet printer+DC standing fan. ",
      "1.2kwh all-in-one lithium solar generator with 6 DC power ports, AC power port, free 4 DC bulbs+310w foldable solar panel. This unit can power 6 lighting points + 118L DC freezer+laptop+deskjet printer+DC standing fan. ",
    ],
    inStock: 40, // if less than 10, then display "Only {9} left!", else don't show anything.
    eta: 30, // in mins
    id: "m1",
    rating: 4.2,
    reviews: [
     /* {
        name: "Shubham",
        title: "Don't buy this phone",
        content: `Both 13 MP and 5MP Camera quality is good. Have lot of pre installed apps. 
          But can be uninstalled if not required. Overall good performance . I am using Asus zenfone max and according to me far better than Asus except Camera quality. It comes in 5000 mah battery and one can't get a better option at this price range. Go for it. It's really goodAfter one week useEdit:- please don't buy this phone. It hangs a lot and sometimes there is problem in touch screen.`,
        rating: 1,
      },
      {
        name: "Swanand",
        title: "One of the good choice for low budget phone",
        content: `If you are looking for low budget phone this can be a good choice for you.
        If you wanna android phone just for day to day work then it's really good.
        On playing heavy games it will hange obviously. Camera is fine at this range. When you start your new device it take some time but later it will work smoothly.
        Phone is light weight with a good look`,
        rating: "4",
      },
      {
        name: "Sanskar",
        title:
          "Simply excellent. Read complete review written after my 30 days of experience",
        content: `Excellent mobile for daily use @7500/-. Don't belive in negative reviews at all. If course the product parts made in China, entire assembly, software all are of India. Even this mobile have no bloat ware or Chinese apps and it's 3gb variant is excellent and black colour looks great.
          Camera is good at it's price range and has autofocus and AI potrait feature.
          Regarding battery is really huge and with normal daily usage it lasts for about 24 hrs as of my experience. With heavy usage and gaming it lasts for 7-10 hrs.
          Regarding gaming, since it has gaming processor helio G25 (equal to Snapdragon 625), and it's hyperdrive technology, no lag in gaming and better network connectivity makes games more aweful.`,
        rating: "5",
      },*/
    ],
  },
  {
    Brand: "hybrid lithium solarator",
    RAM: "1.5kw scalable",
    title: "1.5kw scalable hybrid lithium solarator (unit only)",
    category: "Solarator",
    price: 980000,
    imgs: [solarator3],
    quantity: 1,
    specs: [
      "Hybrid compact lithium solarator with 1,500watts of power. ",
      "EV standard embedded lithium+external add-on port for system upgrade. Can use up to 1400w of solar panels. ",
      "Very portable and mobile. Solar & AC charging function. AC/DC output function.",
    ],
    inStock: 50,
    eta: 20,
    id: "m2",
    rating: 4.7,
    reviews: [
      /*{
        name: "Rohit",
        title: "Best mobile in buget",
        content: "I higely recoomend this mobile",
        rating: 5,
      },
      {
        name: "Doraemon",
        title: "Value for money",
        content:
          "Really a good budget phone with big battery. Camera performance also awesome, but in pro mode there no control for shutter speed and while changing the iso i don't feel any differences. I need more update on camera modes. Phone performance and charging speed is good. Except camera modes i love this phone.",
        rating: 4,
      },
      {
        name: "Nobita",
        title: "Best in the market with this price range",
        content:
          "A Descent phone Definitely not for pro pubg player but can work fine Super amoled gives it best performance Descent camera Improved Selfie camera compared to M30 Long battery life Nice Security No ads unlike MI Works smoothly",
        rating: 5,
      },*/
    ],
  },
  {
    popular: true,
    Brand: "1kw compact solarator",
    RAM: "1kw",
    title: "1kw compact solarator (unit only)",
    category: "Solarators",
    price: 850000,
    imgs: [solarator4],
    quantity: 1,
    specs: [
      "1000kw all-in-one lithium solar generator with 4 DC power ports, AC power port. ",
      "Can use a maximum of 300watts of solar panel. ",
      "This unit can power 6 lighting points + 118L DC freezer when sunny+laptop charging+deskjet printer+DC standing fan.",
    ],
    inStock: 1,
    eta: 5,
    id: "m3",
    rating: 4.3,
    reviews: [
     /* {
        name: "Johhny S",
        title: "This took one of my kidneys. But worth it",
        content:
          "Impressed! I’ve tested it with iphone11 and other iphones, it’s remarkable. It has unquestionably better video quality and touch sensitivity. The screen is bigger than I thought. I loved the Gold variant. But if u have a 11 max or a X max I wouldn’t suggest for an upgradation. I feel that the next iphone will have way more cooler features so wouldn’t hurt to wait. My previous iphone was 6, so in my case am totally peachy with this phone. Though it has a ceramic glass wouldn’t hurt to buy a screen guard. If u can afford it u can totally go 4 it.",
        rating: 5,
      },
      {
        name: "Arjun",
        title: "The best iPhone in 2020. Phone of the year.",
        content:
          "This is the best iPhone yes. The Max model gives you the better screen and overall is a camera beast. I would highly recommend this to anyone. Regarding value for money, its sad that we live in a country where Falling Rupee, Import Duty and High GST are the reasons for such high poricing. A rich country like USA pays only $1099 (Rs. 81,500) whereas its priced a whopping Rs. 48,400 more in India. Thats slmost 60% more. Shame!",
        rating: "5",
      },
      {
        name: "Sahith",
        title: "Best & Biggest iPhone i ever owned 🥰",
        content:
          "Just no words, what a beauty. Upgrading from iPhone X, this feels so big and heavy. But do not has much discomfort while using, you will get used to it.Make sure to get a decent Screen guard and clear case just to safeguard this beauty.",
        rating: "4",
      },}*/
    ],
  },
  {
    Brand: "3.2kwh/2kva compact solarator",
    RAM: ".2kwh/2kva",
    title: "3.2kwh/2kva compact solarator",
    category: "Solarator",
    price: 1980000,
    imgs: [solarator5],
    quantity: 1,
    specs: [
      "Hybrid compact lithium solarator with double BMS. | Has robust embedded 3.2kwh lithium phosphate battery with embedded 3,200 watts-hour lithium+external add-on port for system upgrade.",
      ". Can use up to 1,800w of solar panels. Solar & AC charging function.",
      "AC/DC output function. This solar module can power a duplex with 12 lighting points + 218L DC freezer ",
      "when sunny+inverter blender+inverter pressing iron+laptop charging+deskjet printer+DC 2 ceiling/standing fans+32inches LED tv.",
    ],
    inStock: 5,
    eta: 10,
    id: "m4",
    rating: 4.9,
    reviews: [
      /*{
        name: "Bakwas",
        title: "Bakwas phone",
        content: "Bakwas phone",
        rating: 1,
      },
      {
        name: "Vikas",
        title: "Good overall",
        content: `The best part of the phone is it's super simple and user friendly operating system. Camera doesn't oversaturate colours and captures decent photos. Battery charging is super fast. People argue that this is overpriced in this segment but I guess ease of using the phone and mainly the OS wouldn't be so good in other comparable phones. It is super light and handy.
  
        Edit: taking away 1 star from the review after a month's usage.
        Phone app lags all the time. Phone starts ringing when I receive a call while the name of caller appears 5 seconds later. This is very annoying. Similar issue while calling. Hope some software update fixes this issue.`,
        rating: "4",
      },
      {
        name: "Smooth John",
        title: "Smooth user experience",
        content:
          "Very nice Phone with really nice features! I didn't even know I needed a phone but it is so good ",
        rating: "5",
      },*/
    ],
  },
  {
    Brand: "5kva hybrid growatts",
    RAM: "5kva",
    title: "high efficiency inverters (unit only)",
    category: "Inverter",
    price: 850000,
    imgs: [inverter],
    quantity: 1,
    specs: [
      "Transformerless high voltage, high efficiency 5000watts hybrid inverter ",
      "with inbuilt 120w MPPT controller and remote monitoring function.",
      "Can take up to 5000watts of solar panels. Money back guarantee.",
    ],
    inStock: 50,
    eta: 2,
    id: "m5",
    rating: 3.5,
    reviews: [
      /*{
        name: "BabaKun",
        title: "Good for My Dad",
        content:
          "Like really I was looking for a phone in which I can be always connected with my family but they didn't want a smartphone. So really good for filling the niche",
        rating: 4,
      },
      {
        name: "Ambani",
        title: "Buy This",
        content: "Very good Must Buy!",
        rating: 5,
      },
      {
        name: "Average Consumer",
        title: "Ok",
        content: "ok for like daily use but not much",
        rating: 3,
      },*/
    ],
  },
  {
    Brand: "JCNS lithium solarator",
    RAM: "5kw ",
    title: "5kw JCNS lithium solarator (unit only)",
    category: "Solarator",
    price: 2500000,
    imgs: [solarator6],
    quantity: 1,
    specs: [
      "High voltage, high efficiency 5000watts hybrid inverter ",
      "with inbuilt 120w MPPT controller and remote monitoring function. ",
      "Can take up to 5000watts of solar panels. Money back guarantee.",
    ],
    inStock: 20,
    eta: 30,
    id: "m6",
    rating: 4,
    reviews: [
      /*{
        name: "Navin Kumar",
        title: "Amazing Product",
        content:
          "Like really I was looking for a phone in which I can be always connected with my family but they didn't want a smartphone. So really good for filling the nicheAll the things are nice. Only macro camera is not powerful. Good product go for it. Gorgeous. And the charger is also very heavy.",
        rating: 5,
      },
      {
        name: "Manish",
        title: "THE PROCESSING POWER IS PHENOMENAL HELIO G95 IS A BEAST",
        content:
          "Overall a good phone camera performance is decent enough in this price point the front camera though does a great job because of sony imx471 sensor ultrawide on the back would be great the macro and b/w sensor is not that useful battery life is good for an average user iam getting a screen on time of about 45-50 minutes using 10% battery so it can give you about 8-9 hours of screen time daily the charging is powerful and charges quickly In short its a gaming phone The antutu score os this device is around 350k which is greater than redmi note 10 pro max score of 300k",
        rating: 4,
      },*/
    ],
  },
  {
    Brand: "EV lithium phosphate battery",
    RAM: "5kwh",
    title: "5kwh EV lithium phosphate battery",
    category: "Inverter",
    price: 1400000,
    imgs: [inverter2],
    quantity: 1,
    specs: [
      "48v/5000watts-hour lithium battery with inbuilt BMS (battery management system). ",
      "5000 mAh lithium polymer battery",
      "Long lasting with 90% DoD. Money back guarantee",
    ],
    inStock: 2,
    eta: 15,
    id: "m7",
    rating: 4.2,
    reviews: [
      /*{
        name: "Alwin",
        title: "Good Phone",
        content: "Good phone working fine good battery thanks",
        rating: 5,
      },
      {
        name: "Ankita",
        title: "Extremely slow.",
        content:
          "Okay so this product is not expensive, affordable and very beautiful, this is only good thing about it. Phone freezes a lot and when someone calls, it keeps vibrating without showing any number on the screen. I bought this phone in may 2021. And this is July 2021. I hate this phone already",
        rating: 2,
      },*/
    ],
  },
  {
    Brand: "12w solar tv",
    RAM: "32inches",
    title: "32inches 12w solar tv",
    category: "tv",
    price: 0,
    imgs: [tv],
    quantity: 1,
    specs: [
      "32inches 12w solar tv",
    ],
    inStock: 0,
    eta: 50,
    id: "m8",
    rating: 5,
    reviews: [
      /*{
        name: "Blaze",
        title: "Fast and great deal",
        content: "Thanks, please manufacture more",
        rating: 5,
      },*/
    ],
  },
  {
    Brand: "Solar yellow box",
    RAM: "45W",
    title: "45W solar yellow box",
    category: "solar lightening kit",
    price: 65000,
    imgs: [lighteningkit],
    quantity: 1,
    specs: [
      "DC lighting kit + 15w solar panel+4 DC bulbs",
    ],
    inStock: 8,
    eta: 50,
    id: "m9",
    rating: 4,
    reviews: [
      {
        name: "Nitea Ghosh",
        title: "Waste of money",
        content:
          "Very bad experience, i am going to return it, i am facing touch issue very much",
        rating: 1,
      },
    ],
  },
  {
    Brand: "lithium solar yelow box",
    RAM: "50w ",
    title: "50w lithium solar yelow box",
    category: "solar lightening kit",
    price: 0,
    imgs: [lighteningkit1],
    quantity: 1,
    specs: [
      "50w lithium solar yelow box",
    ],
    inStock: 8,
    eta: 20,
    id: "m10",
    rating: 4.5,
    reviews: [
      /*{
        name: "Darshan Sanghvi",
        title: "Fabulous!",
        content:
          "Thanks, the device was received well packed and before time! The device is fabulous, it's like love at first sight! It doesn't feel like a 2018 device, the speed, the sensors, the touch is pretty amazing! A12 Bionic works well! 3GB RAM is sufficient to run the phone, COD, BGMI and NFS can be played without lag. Face ID is fast and accurate to unlock the device in dark! In low to moderate usage, battery supports 30+ hours and in heavy usage, battery supports 20+ hours. This one doesn't have Adapter and Earphones, but you can buy them separately! Bought for 43K (128GB) during Prime Day Sale! Overall a value for money device! A good device to start if you’re moving to Apple from Android or upgrading from previous generation iPhones. Thank You Apple!",
        rating: 5,
      },
      {
        name: "Sushma",
        title: "Economical Phone",
        content:
          "The phone is not lacking in any sphere. The halmark quality of iPhone is telltale. The size is very handy and convenient. Charging cord is working only on one side like USB cord but then, the charging is very fast. Battery is very long lasting, better than 6000 mah batteries of Android. Picture quality better than so called 4 camera android. Go for it without a second thought. Charger not provided in the box, is freely available outside. Must buy a good bluetooth headset also to enjoy the phone.",
        rating: 5,
      },*/
    ],
  },
 { 
  Brand: "solar baby",
  RAM: "50kw ",
  title: "50w solar baby",
  category: "solar lightening kit",
  price: 70000,
  imgs: [lighteningkit2],
  quantity: 1,
  specs: [
    "DC lighting kit+ 50w solar panel+2 DC bulbs",
  ],
  inStock: 20,
  eta: 30,
  id: "17",
  rating: 4,
  reviews: [
    {
      name: "Navin Kumar",
      title: "Amazing Product",
      content:
        "Like really I was looking for a phone in which I can be always connected with my family but they didn't want a smartphone. So really good for filling the nicheAll the things are nice. Only macro camera is not powerful. Good product go for it. Gorgeous. And the charger is also very heavy.",
      rating: 5,
    },
    {
      name: "Manish",
      title: "THE PROCESSING POWER IS PHENOMENAL HELIO G95 IS A BEAST",
      content:
        "Overall a good phone camera performance is decent enough in this price point the front camera though does a great job because of sony imx471 sensor ultrawide on the back would be great the macro and b/w sensor is not that useful battery life is good for an average user iam getting a screen on time of about 45-50 minutes using 10% battery so it can give you about 8-9 hours of screen time daily the charging is powerful and charges quickly In short its a gaming phone The antutu score os this device is around 350k which is greater than redmi note 10 pro max score of 300k",
      rating: 4,
    },
  ],
},
{
  Brand: "NDDC standard solar streetlight",
  RAM: "00000",
  title: "100W NDDC standard solar streetlight",
  category: "street Lght",
  price: 0,
  imgs: [streetlight],
  quantity: 1,
  specs: [
    "3 in 1 100W NDDC standard solar streetlight",
  ],
  inStock: 2,
  eta: 15,
  id: "18",
  rating: 4.2,
  reviews: [
    {
      name: "Alwin",
      title: "Good Phone",
      content: "Good phone working fine good battery thanks",
      rating: 5,
    },
    {
      name: "Ankita",
      title: "Extremely slow.",
      content:
        "Okay so this product is not expensive, affordable and very beautiful, this is only good thing about it. Phone freezes a lot and when someone calls, it keeps vibrating without showing any number on the screen. I bought this phone in may 2021. And this is July 2021. I hate this phone already",
      rating: 2,
    },
  ],
},
{
  Brand: "DC-Solarator",
  RAM: "128wh",
  title: "128wh-DC-Solarator",
  category: "solarator",
  price: 180000,
  imgs: [solarator7],
  quantity: 1,
  specs: [
    "DC lighting kit+ 15w solar panel+4 DC bulbs",
  ],
  inStock: 0,
  eta: 50,
  id: "19",
  rating: 5,
  reviews: [
    {
      name: "Blaze",
      title: "Fast and great deal",
      content: "Thanks, please manufacture more",
      rating: 5,
    },
  ],
},

{
  Brand: "NDDC standard solar streetlight",
  RAM: "00000",
  title: "100W NDDC standard solar streetlight",
  category: "street Lght",
  price: 0,
  imgs: [streetlight],
  quantity: 1,
  specs: [
    "3 in 1 100W NDDC standard solar streetlight",
  ],
  inStock: 2,
  eta: 15,
  id: "20",
  rating: 4.2,
  reviews: [
    {
      name: "Alwin",
      title: "Good Phone",
      content: "Good phone working fine good battery thanks",
      rating: 5,
    },
    {
      name: "Ankita",
      title: "Extremely slow.",
      content:
        "Okay so this product is not expensive, affordable and very beautiful, this is only good thing about it. Phone freezes a lot and when someone calls, it keeps vibrating without showing any number on the screen. I bought this phone in may 2021. And this is July 2021. I hate this phone already",
      rating: 2,
    },
  ],
},

{
  Brand: "400WH compact lithium solarator",
  RAM: "200W/400WH",
  title: "200W/400WH compact lithium solarator (with accessories)",
  category: "solarator",
  price: 380000,
  imgs: [solarator8],
  quantity: 1,
  specs: [
    "AC/DC lighting lit with 4 bulbs. ",
    "power 6 lighting points +laptop+deskjet printer+DC standing fan. ",
  ],
  inStock: 8,
  eta: 50,
  id: "21",
  rating: 4,
  reviews: [
    /*{
      name: "Nitea Ghosh",
      title: "Waste of money",
      content:
        "Very bad experience, i am going to return it, i am facing touch issue very much",
      rating: 1,
    },*/
  ],
},
{
  Brand: "300w-500w JCNS compact solarators",
  RAM: "300w-500w ",
  title: "300w-500w JCNS compact solarators",
  category: "solarator",
  price: 400000,
  imgs: [solarator9],
  quantity: 1,
  specs: [
    "AC/DC lighting lit with 4 bulbs. ",
    "This unit can power 6 lighting points +laptop+deskjet printer+DC standing fan."
  ],
  inStock: 8,
  eta: 20,
  id: "m22",
  rating: 4.5,
  reviews: [
    /*{
      name: "Darshan Sanghvi",
      title: "Fabulous!",
      content:
        "Thanks, the device was received well packed and before time! The device is fabulous, it's like love at first sight! It doesn't feel like a 2018 device, the speed, the sensors, the touch is pretty amazing! A12 Bionic works well! 3GB RAM is sufficient to run the phone, COD, BGMI and NFS can be played without lag. Face ID is fast and accurate to unlock the device in dark! In low to moderate usage, battery supports 30+ hours and in heavy usage, battery supports 20+ hours. This one doesn't have Adapter and Earphones, but you can buy them separately! Bought for 43K (128GB) during Prime Day Sale! Overall a value for money device! A good device to start if you’re moving to Apple from Android or upgrading from previous generation iPhones. Thank You Apple!",
      rating: 5,
    },
    {
      name: "Sushma",
      title: "Economical Phone",
      content:
        "The phone is not lacking in any sphere. The halmark quality of iPhone is telltale. The size is very handy and convenient. Charging cord is working only on one side like USB cord but then, the charging is very fast. Battery is very long lasting, better than 6000 mah batteries of Android. Picture quality better than so called 4 camera android. Go for it without a second thought. Charger not provided in the box, is freely available outside. Must buy a good bluetooth headset also to enjoy the phone.",
      rating: 5,
    },*/
  ],
},

  {
    For: "Students",
    Brand: "AC-DC breakers",
    RAM: "AC-DC",
    Processor: "AMD",
    DisplaySize: "15.6",
    HasSSD: "No",
    title:
      "AC-DC breakers",
    category: "circuit breakers",
    price: 10000,
    imgs: [breaker],
    quantity: 1,

    specs: [
      "Original AC/DC breakers for installation",
    ],
    inStock: 11,
    eta: 120,
    id: "23",
    rating: 3.8,
    reviews: [
      /*{
        name: "Swag",
        title: "I really liked this product 👍",
        content:
          "After seeing the reviews I was confused. But I decided to go for this and it got delivered within 1 day. I really liked this product. Looks premium, built quality is also good and also fast. It's a good laptop under 36k. As of now, this is my review and if there will be any issue, will let you know.",
        rating: 5,
      },
      {
        name: "Himanshu Karkhanis",
        title: "Reasonable performance so far (it is only 3 days)",
        content:
          "Firstly for the correct information of all potential buyers - I have had a good experience of HP laptops. Secondly i had budget constraints (below 35k)... so I had to go for one with only HDD, not SSD. I would have loved hybrid types as those work excellent. Thus I opted for this laptop with no SSD, only 1TB HDD, however i preferred 8GB RAM... it has been 3 days and we have been using it for Zoom long meetings..and general surfing (no multimedia use yet). So far there are no visible issues. The fan sometimes gives out a slight burning smell and I assume it is because the circuitry is new... I shall monitor for more days and give another review on this. The laptop's nice feature is the CORTANA support by which windows got configured smoothly, with little intervention. it did take lot of time to boot initially, but now boots up fine.... Havent faced any sound or heat issues yet. Screen output quality could have been better..... to get the optimum brightness you have to raise the brightness to almost the limit. Sound output is not that great..... so far so good. will post again after a month of use.",
        rating: 4,
      },
      {
        name: "Shantanu Verma",
        title: "Decent laptop, good customer support during setup",
        content:
          "I purchased GR0011AU (1TB HDD no SSD, Ryzen 3 3250). Economical Laptop with decent performance. Battery backup around 5.5 to 6 hrs on streaming video via wifi and general browsing. I avoided purchasing extended warranty online. Instead buy from the HP helpline (number attached in photo). Registration and setup of MS Office Home and Student 2019 is tricky as the laptop has Office 365 installed as default. This (365) has to be uninstalled and the Office H&S 2019 image (3.5GB) has to be downloaded and set up. I am doing it all through the HP helpline and they are helpful.. Overall decent/good laptop for my basic requirements and very good customer support, atleast during setup.",
        rating: 4,
      },*/
    ],
  },
  {
    For: "Travel",
    Brand: "Jikokoa charcoal stove",
    RAM: "smokeless",
    Processor: "Intel",
    DisplaySize: "15.6",
    HasSSD: "Yes",
    title:
      "jikokoa-charcoal-stove",
    category: "Home gadgets",
    price: 45000,
    imgs: [charcoalstove],
    quantity: 1,
    specs: [
      "------------",
    ],
    inStock: 19,
    eta: 180,
    id: "24",
    rating: 4.3,
    reviews: [
      /*{
        name: "Adesh Gaurav",
        title: "Very good DELL laptop",
        content:
          "I got a nice and genuine DELL laptop. It is working and is in good condition. Very much happy with my purchase. For the reference I bought it from LOWEST PRICE SHOP seller.",
        rating: 5,
      },
      {
        name: "Deepak",
        title:
          "This laptop very good sceen and display quality is very nice and keyboard quality is very good",
        content:
          "Screen quality very nice, battery is good and camera quality is some good, I am perchase this laptop office work",
        rating: 4,
      },*/
    ],
  },
  {
    For: "CL4 solar streetlights",
    Brand: "CL4 solar streetlights",
    RAM: "All in one",
    Processor: "Intel",
    DisplaySize: "15.6",
    HasSSD: "Yes",
    title:
      "CL4 solar streetlights",
    category: "street light",
    price: 89000,
    imgs: [streetlight1],
    quantity: 1,
    specs: [
      "Aluminum alloy lithium light ",
    ],
    inStock: 29,
    eta: 60,
    id: "25",
    rating: 4.3,
    reviews: [
      /*{
        name: "Sushabhan Biswas",
        title: "Good Product in a Handsome Budget, but Battery not so strong.",
        content: `I have been using this Product for 2 weeks. The Pros & Cons are following:
            Pros: 1. System speed is very fast, as 7.75 gb is usable RAM.
            2. Slim fit & good outlook as well.
            Cons:
            1. Battery drains too fast, battery power not really good.
            2. Adapter size is too short, this creates problem while charging from a socket which is little bit away.
            Apart from the upper points, also check the warranty window after buying it, as for my case, I have to mail to Lenovo for updating my Warranty details (It was not updated properly).`,
        rating: 4,
      },
      {
        name: "Sésh",
        title:
          "Good purchase, overall; and a few points I do hope they use to make improvements",
        content: `Found this laptop to be v sleek, overall.
            Like the keyboard (find the keys to be softer than most other laptop keyboards; more 'pleasant'? for typing, relatively speaking, though not quite as pleasant as it is w a MacBookPro).
            Like the way the touchpad has been positioned slightly to the left.
            Also like the fingerprint sensor doubling up as the power on/off button.
            Front-facing cam quality also relatively good, along with wide coverage of (user) background.
            
            Would have preferred more RAM along with the whole pkg.
            Would have preferred more SSD storage space for this budget.
            
            Budget-wise, feel this is priced up by about 20%, and I think that it will sell more units if Lenovo brings it down accordingly.
            
            Overall, defn a good buy, and I'd recommend it for anyone who wants this config of laptop for their business/home purposes.`,
        rating: 4,
      },*/
    ],
  },
  {
    popular: true,
    For: "Gaming",
    Brand: "commercial DC phone charger",
    RAM: "16 GB",
    Processor: "AMD",
    DisplaySize: "14",
    HasSSD: "Yes",
    title:
      "commercial DC phone charger",
    category: "Gadgets",
    price: 65000,
    imgs: [phonecharger],
    quantity: 1,
    specs: [
      "Commercial DC phone charger",
    ],
    inStock: 9,
    eta: 270,
    id: "26",
    rating: 4.4,
    reviews: [
      /*{
        name: "Abhinav Mehta",
        title: "Great Laptop, you can go for it, but …",
        content: `I am facing no issues as of now, a great laptop.
          Pros :- High performance, thanks to Ryzen 9, Graphics card can handle any game (I played GTA V, and also screen recorded it, screen recording didn’t lag, and I like that), I liked the AniMe Matrix, a great part of the laptop, and the armoury crate. No issue in my Backlit keyboard.
          
          Cons :- No webcam (ASUS should have added a webcam at such a high price point)
          Gets heated quickly, but is manageable, and no other issue.
          No Ethernet port (ASUS, what the heck is wrong with you? I mean, seriously, majority of Laptops have Ethernet port 😂😂)
          
          Overall, a great purchase. Will update the review after a month’s usage, with some pics.
          `,
        rating: 4,
      },
      {
        name: "Jothi",
        title: "Not good quality",
        content: `Very disappointed to let you all know that keyboard button came out within a month of purchase`,
        rating: 2,
      },*/
    ],
  },
  {
    popular: true,
    For: "Content Creation",
    Brand: "Solar Ice Makers",
    RAM: "16 GB",
    Processor: "Intel",
    DisplaySize: "16",
    HasSSD: "No",
    title:
      "Solar ice makers",
    category: "solar freezers",
    price: 1300000,
    imgs: [ icemakers, icemakers1],
    quantity: 1,
    specs: [
      "Solar freezers with AC adaptor",
    ],
    inStock: 2,
    eta: 30,
    id: "27",
    rating: 4.3,
    reviews: [
      /*{
        name: "Venkateesh",
        title: "Excellent Product from Apple",
        content: `After 3yrs of problems with Butterfly keyboard & Thermal Problem with Corei9 Apple Finally fixed those loop holes in this Model. It's almost perfect. Good for Professional use. I'm Little disappointed with Apple though., because there s no customization available for India. I hope In future they will introduce it. About the Product 5 Star Solid.
          I already own a MacBook Pro Mid 2012 still kicking. I always love quality products that apple delivery. Thanks`,
        rating: 5,
      },
      {
        name: "Vamsi Krishna",
        title: "Not a great laptop from Apple",
        content: `Writing this review after using for more than 8 months . Everything is very nice in performance except the below things
          1. It's heating excessively with in 5 to 10 minutes of opening (just for playing a song in youtube with full volume the temperature is as high as 85 to 98 degrees)
          2. charging is disintegrating very fast (in cases like when you are doing some work on something like AutoDesk & simultaneously if a browser is running --- only for 2 apps running charge disintegration shouldn’t happen right)
          3. some times it's beach-balling even it's having octa core & 16 GB RAM`,
        rating: 4,
      },*/
    ],
  },
];


// project data

export const projectsData = [
  {
    title: "Project Title",
    details:
      "As part of our LightUp the Judiciary campaign, we successfully installed and energized the residence of Hon Justice Paul Nnodum with our top notch compact hybrid lithium solator. This module is an all-in-one solar module that is scalable (upgradable) with sleek design. It's a single high efficiency indoor unit that does not occupy space.",
    image: solar2,
  },
  {
    title: "And the dead finally found a home to rest in peace -",
    details:
      "With the successful completion of the first ever comlpete offgrid solar powered morgue by Lightup Nigeria Solar Power Ltd, the dead finally found a perfect place to rest in peace. We are proud to have since completed  the 25kwh Alaoma solar module at Peace College Junction, Alaoma Estate, off, KM5 Port Harcourt Rd, New Owerri, Owerri.",
    image: morgue,
  }
  /*{
    title: "Project Title",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quisVelit, quis",
    image: solar,
  },
  {
    title: "Project Title",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quisVelit, quis",
    image: solar,
  },
  {
    title: "Project Title",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quisVelit, quis",
    image: solar,
  },
  {
    title: "Project Title",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quisVelit, quis",
    image: solar,
  },
  {
    title: "Project Title",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quisVelit, quis",
    image: solar,
  },
  {
    title: "Project Title",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quisVelit, quis",
    image: solar,
  },
  {
    title: "Project Title",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quisVelit, quis",
    image: solar,
  },
  {
    title: "Project Title",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quisVelit, quis",
    image: solar,
  },*/
];



// the hero carousel Data

export const productCarousel = [
  {
    _id: 1,
    title1: "LightUp your Home",
    title2: "WITH 30% DOWN PAYMENT",
    details: `Powered by`,
    qualities: ["ACCESS BANK", "in partnership with", "LIGHTUP NIGERIA"],
    price: "UNLIMITED",
    image: image1,
  },

  {
    _id: 2,
    title1: "Compact Lithium Solarator",
    title2: "SMALL BODY BIG ENGINE!",
    details: `Get Solar Rest of Mind`,
    qualities: ["1.2 kilo watt hour", "1.2 Back Up Battery", "DC & AC Output"],
    price: "660,000",
    image: image,
  },
  {
    _id: 3,
    title1: "Compact Lithium Solarator",
    title2: "SMALL BODY BIG ENGINE!",
    details: `Get Solar Rest of Mind`,
    qualities: ["1.2 kilo watt hour", "1.2 Back Up Battery", "DC & AC Output"],
    price: "660,000",
    image: image,
  },
];
//

export const BestOffer = [
  {
    image: offer,
    advert: "solar Pannel + LiFePO4 Solarator + free delivery",
    price: "#660,000",

    Details: "1.2 kilo watt hour, 1.2 Back Up Battery, DC & AC Output",
  },
  {
    image: image,
    advert: "solar Pannel + lead Inveter + free delivery",
    price: "660,000",

    Details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quis",
  },
];

export const BannerData = [
  {
    _id: 1,
    image: image,
    title1: "mordern light",
    title2: "Solor energy",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quis adipisicing elit. Velit, ",
    qualities: [
      "long lasting Battery",
      "NoiseLess Power Supply",
      "24/7 Steady power Suppy",
    ],
  },

  {
    _id: 1,
    image: image,
    title1: "mordern light",
    title2: "Solor energy",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quis adipisicing elit. Velit, ",
    qualities: [
      "long lasting Battery",
      "NoiseLess Power Supply",
      "24/7 Steady power Suppy",
    ],
  },
];

export const Brand = [
  photos,
  photos1,
  photos2,
  photos3,
  photos4,
  photos5,
  photos6,
  photos7,
  photos8,
  photos9,
  photos10,
  photos11,
  photos12,
];

export const BlogData = [
  {
    id: "004780a2-5294-4672-a284-424bebfd8748",

    title:
      "JUST IN: Enugu gov't clarifies position on purported solar energy tax.",
    subtitle:
      "The Enugu State Government has clarified its position on the reports over the collection of industrial gas emission levy",
    summary:
      "Molestiae ut est dolorem a vero et in. Dignissimosidet dolore consequuntur explicabo doloremque soluta. Deserunt repudiandae soluta nulla neque aut recusandae sed non. Itaque velit neque dicta dolores fuga dicta sunt.",
    category: "Entertainment",
    image: enugu,
    main_content:
      "\u003Ch1\u003ESearching for Alien Life: A Cosmic Enigma\u003C/h1\u003E\n\u003Cp\u003EFor decades, scientists have been scanning the skies, searching for signs of extraterrestrial life. From SETI to the Mars rovers, countless endeavors have tried to answer this age-old question: Are we alone in the universe?\u003C/p\u003E\n\n\u003Cp\u003EAdvancements in telescopic technology have made it possible to discover exoplanets that might host life.\u003C/p\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003E\"The idea that we might not be alone has captivated humans for centuries, driving us to search for life beyond our own planet.\"\u003C/p\u003E\n\u003C/blockquote\u003E\n\n\u003Cp\u003EThough there's no conclusive evidence yet, scientists remain hopeful. Recent discoveries of water on Mars and ice on one of Jupiter's moons, Europa, have fueled such hopes.\u003C/p\u003E\n\n\u003Cp\u003EThe Drake Equation, a probabilistic formula used to estimate the number of active, communicative extraterrestrial civilizations, adds to the optimism.\u003C/p\u003E\n\n\u003Cp\u003EHowever, skeptics argue that the lack of evidence might suggest that we are, in fact, alone.\u003C/p\u003E\n\n\u003Cp\u003EWhile this debate rages on, astronomers continue their diligent work, hoping one day to find a sign—a signal, a footprint, anything—that will solve this cosmic enigma.\u003C/p\u003E\n\n\u003Cp\u003EUntil then, the search continues, and the question remains: Are we alone?\u003C/p\u003E\n",
    created_at: "Sun, 10/15/2023",
    updated_at: "Sun, 10/15/2023",
  },
  {
    id: "00535eb0-76c3-4f12-b1d2-93473cd5fe94",

    title: "  Expect a solar energy revolution in Nigeria.",
    subtitle:
      "  As Lightup Nigeria Solar Power Ltd becomes Access Bank Plc official solar vendor",
    summary:
      "Quia error sit tenetur repellat repudiandae. Fugit sapiente aut itaque et aut molestiae. Id quod fuga occaecati sunt error voluptatem.",
    category: "Food & Drink",
    image: Blogsolarator,
    main_content:
      '\u003Ch1\u003EUnlocking Passive Income\u003C/h1\u003E\n\u003Cp\u003EPassive income is the dream for many. It allows you to earn money while you sleep, giving you the freedom to do what you love.\u003C/p\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003E"Passive income is not a get-rich-quick scheme; it\'s a get-rich-smart scheme."\u003C/p\u003E\n\u003C/blockquote\u003E\n\n\u003Cp\u003EDigital products, real estate, and investments are some ways to generate passive income. Let\'s delve into these methods one by one.\u003C/p\u003E\n\n\u003Cp\u003EFirstly, digital products like e-books, online courses, and software can be a lucrative source of income. The beauty of digital products is that they can be created once and sold to an unlimited number of customers without additional costs.\u003C/p\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003E"If you\'re good at something, never do it for free."\u003C/p\u003E\n\u003C/blockquote\u003E\n\n\u003Cp\u003ESecondly, real estate can be an excellent way to generate long-term income. Whether you\'re renting out property or investing in REITs, the real estate market offers various opportunities for earning passively.\u003C/p\u003E\n\n\u003Cp\u003EIt\'s important to do thorough research and possibly consult with a financial advisor before diving into the real estate market.\u003C/p\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003E"Don\'t wait to buy real estate. Buy real estate and wait."\u003C/p\u003E\n\u003C/blockquote\u003E\n\n\u003Cp\u003EThirdly, investments in stocks, bonds, and mutual funds can also provide a steady income stream. Dividend-paying stocks are particularly popular for this purpose.\u003C/p\u003E\n\n\u003Cp\u003EHowever, it\'s crucial to diversify your investment portfolio to mitigate risks. A well-balanced mix of assets can provide both growth and income.\u003C/p\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003E"The stock market is a device for transferring money from the impatient to the patient."\u003C/p\u003E\n\u003C/blockquote\u003E\n\n\u003Cp\u003EOther methods include affiliate marketing, dropshipping, and even blogging. The key is to find what works best for you and to start small. As you gain more experience, you can scale your efforts and increase your income.\u003C/p\u003E\n\n\u003Cp\u003EIn conclusion, passive income offers the freedom to live life on your terms. While it requires initial effort and smart planning, the rewards make it well worth the investment.\u003C/p\u003E\n',
    created_at: "Sun, 10/15/2023",
    updated_at: "Sun, 10/15/2023",
  },
  {
    id: "006ad48b-e9d9-472e-bcc0-39961ef18eba",

    title: " Earn ₦1,000,000.00 with Lightup Nigeria Solar Power Ltd!",
    subtitle:
      " Are you ready to become a LUNI Solar Millionaire? Lightup Nigeria Solar Power Ltd is offering you an incredible opportunity to earn while promoting renewable energy!.",
    category: "Fashion & Beauty",
    image: partnership,
    main_content:
      "\u003Ch1\u003EThe Evolution of Rockets: A Journey Through Time\u003C/h1\u003E\n\u003Cp\u003ERockets have come a long way since their invention. Initially used for warfare, they have evolved into vehicles capable of interplanetary travel.\u003C/p\u003E\n\n\u003Cp\u003EThe V-2 rockets during World War II marked a significant advancement, laying the groundwork for space exploration.\u003C/p\u003E\n\n\u003Cp\u003EThe 1960s saw the mighty Saturn V, which carried the Apollo astronauts to the moon.\u003C/p\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003E\"Each generation of rockets has been a stepping stone towards our ultimate goal—making humanity an interplanetary species.\"\u003C/p\u003E\n\u003C/blockquote\u003E\n\n\u003Cp\u003ENow, we have reusable rockets, thanks to companies like SpaceX. The Falcon 9 can land back on Earth after launching, drastically reducing costs.\u003C/p\u003E\n\n\u003Cp\u003EBlue Origin's New Shepard aims to make suborbital flights a reality for tourists.\u003C/p\u003E\n\n\u003Cp\u003EChina's Long March rockets have made them a key player in the global space race.\u003C/p\u003E\n\n\u003Cp\u003ELooking forward, the development of the Space Launch System (SLS) and Starship aims to take us to Mars and beyond.\u003C/p\u003E\n\n\u003Cp\u003EAs technology advances, the possibilities are limitless. Who knows what the next generation of rockets will bring?\u003C/p\u003E\n",
    created_at: "Sun, 10/15/2023",
    updated_at: "Sun, 10/15/2023",
  },
  {
    id: "00caf75b-0d8f-441c-ae04-1dd25a790683",

    title: "Sunt et rerum aspernatur praesentium.",
    subtitle:
      "Eos laboriosam est itaque enim ratione. Quasi inventore quisquam sed harum sit non.",
    summary:
      "Modi temporibus voluptatem aut necessitatibus deleniti. Eum dolorem sit veritatis labore laborum. Maxime temporibus commodi repellendus laborum laborum fugiat. Tempora voluptate expedita quisquam asperiores neque.",
    category: "Art & Culture",
    image:
      "https://images.unsplash.com/photo-1495580847032-db0bac41d44b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyNHx8Q2FueW9ufGVufDB8MHx8fDE2OTczNTc1NDR8MA&ixlib=rb-4.0.3&q=85",
    main_content:
      "\u003Ch1\u003EThe Evolution of Rockets: A Journey Through Time\u003C/h1\u003E\n\u003Cp\u003ERockets have come a long way since their invention. Initially used for warfare, they have evolved into vehicles capable of interplanetary travel.\u003C/p\u003E\n\n\u003Cp\u003EThe V-2 rockets during World War II marked a significant advancement, laying the groundwork for space exploration.\u003C/p\u003E\n\n\u003Cp\u003EThe 1960s saw the mighty Saturn V, which carried the Apollo astronauts to the moon.\u003C/p\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003E\"Each generation of rockets has been a stepping stone towards our ultimate goal—making humanity an interplanetary species.\"\u003C/p\u003E\n\u003C/blockquote\u003E\n\n\u003Cp\u003ENow, we have reusable rockets, thanks to companies like SpaceX. The Falcon 9 can land back on Earth after launching, drastically reducing costs.\u003C/p\u003E\n\n\u003Cp\u003EBlue Origin's New Shepard aims to make suborbital flights a reality for tourists.\u003C/p\u003E\n\n\u003Cp\u003EChina's Long March rockets have made them a key player in the global space race.\u003C/p\u003E\n\n\u003Cp\u003ELooking forward, the development of the Space Launch System (SLS) and Starship aims to take us to Mars and beyond.\u003C/p\u003E\n\n\u003Cp\u003EAs technology advances, the possibilities are limitless. Who knows what the next generation of rockets will bring?\u003C/p\u003E\n",
    created_at: "Sun, 10/15/2023",
    updated_at: "Sun, 10/15/2023",
  },
  {
    id: "00faf88c-9227-4783-b9b7-91e400dafd38",

    title: "Quo minima quia veritatis sed aut sed fugiat.",
    subtitle:
      "Rerum sed minima culpa ab minima rem nobis provident. Assumenda aspernatur perferendis dolorum officia.",
    summary:
      "Dolorem necessitatibus et ipsum saepe. Possimus et natus voluptate et consequatur dolore non alias. Harum impedit amet non eum earum. Saepe et in ut animi eaque.",
    category: "Finance & Business",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw0fHxCZWFjaHxlbnwwfDB8fHwxNjk3MzU3NTYwfDA&ixlib=rb-4.0.3&q=85",
    main_content:
      "\u003Ch1\u003ESearching for Alien Life: A Cosmic Enigma\u003C/h1\u003E\n\u003Cp\u003EFor decades, scientists have been scanning the skies, searching for signs of extraterrestrial life. From SETI to the Mars rovers, countless endeavors have tried to answer this age-old question: Are we alone in the universe?\u003C/p\u003E\n\n\u003Cp\u003EAdvancements in telescopic technology have made it possible to discover exoplanets that might host life.\u003C/p\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003E\"The idea that we might not be alone has captivated humans for centuries, driving us to search for life beyond our own planet.\"\u003C/p\u003E\n\u003C/blockquote\u003E\n\n\u003Cp\u003EThough there's no conclusive evidence yet, scientists remain hopeful. Recent discoveries of water on Mars and ice on one of Jupiter's moons, Europa, have fueled such hopes.\u003C/p\u003E\n\n\u003Cp\u003EThe Drake Equation, a probabilistic formula used to estimate the number of active, communicative extraterrestrial civilizations, adds to the optimism.\u003C/p\u003E\n\n\u003Cp\u003EHowever, skeptics argue that the lack of evidence might suggest that we are, in fact, alone.\u003C/p\u003E\n\n\u003Cp\u003EWhile this debate rages on, astronomers continue their diligent work, hoping one day to find a sign—a signal, a footprint, anything—that will solve this cosmic enigma.\u003C/p\u003E\n\n\u003Cp\u003EUntil then, the search continues, and the question remains: Are we alone?\u003C/p\u003E\n",
    created_at: "Sun, 10/15/2023",
    updated_at: "Sun, 10/15/2023",
  },
];
