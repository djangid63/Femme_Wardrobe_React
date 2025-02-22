import ProductImg1 from "../images/PopProductImgs/Product1.jpeg";
import ProductImg2 from "../images/PopProductImgs/Product2.jpeg";
import ProductImg3 from "../images/PopProductImgs/Product3.jpeg";
import ProductImg4 from "../images/PopProductImgs/Product4.jpeg";
import NewProductImg1 from "../images/NewProductImgs/NewProduct1.jpeg";
import NewProductImg2 from "../images/NewProductImgs/NewProduct2.jpeg";
import NewProductImg3 from "../images/NewProductImgs/NewProduct3.jpeg";
import NewProductImg4 from "../images/NewProductImgs/NewProduct4.jpeg";
import HRproductImg1 from "../images/PopProductImgs/ProductBig1.jpeg";
import HRproductImg2 from "../images/PopProductImgs/ProductBig2.jpeg";
import HRproductImg3 from "../images/PopProductImgs/ProductBig3.jpeg";
import HRproductImg4 from "../images/PopProductImgs/ProductBig4.jpeg";
import HRNewProductImg1 from "../images/NewProductImgs/NewProductBig1.jpeg";
import HRNewProductImg2 from "../images/NewProductImgs/NewProductBig2.jpeg";
import HRNewProductImg3 from "../images/NewProductImgs/NewProductBig3.jpeg";
import HRNewProductImg4 from "../images/NewProductImgs/NewProductBig4.jpeg";

const productData = [
  {
    id: 1,
    title: "Work &amp",
    subtitle: "Timeless Classic Collection",
    price: 125.47, // Updated with two decimal places and random digits
    imgHR: HRproductImg1,
    img: ProductImg1,
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "red", "green"],
    description: "Home / Work & Office / Timeless Classic Collection",
    category: "Work & Office",
    collection: "Timeless Classic Collection",
    pricingDetails: "$124.90 - $154.90",
    productDetails: "Crafted from soft, breathable fabrics, the relaxed fit provides a carefree silhouette, while thoughtful details add a touch of urban chic. Perfect for creating a professional yet relaxed style.",
  },
  {
    id: 2,
    title: "Casual",
    subtitle: "Bohemian Rhapsody Attire",
    price: 155.82, // Updated with two decimal places and random digits
    imgHR: HRproductImg2,
    img: ProductImg2,
    sizes: ["L", "M", "S", "XS"],
    colors: ["black", "red", "green", "white"],
    description: "Home / Casual Wear / Bohemian Rhapsody Attire",
    category: "Casual Wear",
    collection: "Bohemian Rhapsody",
    pricingDetails: "$154.90 - $174.90",
    productDetails: "This collection blends carefree bohemian vibes with a modern twist, making it perfect for casual outings and relaxed gatherings."
  },
  {
    id: 3,
    title: "Evening Dresses",
    subtitle: "Midnight Gala Maxi Dress",
    price: 175.63, // Updated with two decimal places and random digits
    imgHR: HRproductImg3,
    img: ProductImg3,
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "red", "green", "white"],
    description: "Home / Evening Wear / Midnight Gala Maxi Dress",
    category: "Evening Wear",
    collection: "Midnight Gala",
    pricingDetails: "$174.90 - $194.90",
    productDetails: "Elevate your evening with this elegant maxi dress, designed for sophisticated occasions and midnight celebrations."
  },
  {
    id: 4,
    title: "Casual",
    subtitle: "Power Suit Ensemble",
    price: 120.19, // Updated with two decimal places and random digits
    imgHR: HRproductImg4,
    img: ProductImg4,
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "red", "green", "white"],
    description: "Home / Office Wear / Power Suit Ensemble",
    category: "Office Wear",
    collection: "Power Suit Collection",
    pricingDetails: "$119.90 - $139.90",
    productDetails: "Empower your wardrobe with this power suit ensemble, offering a tailored fit and bold design for a commanding presence."
  },
  {
    id: 5,
    title: "Work &amp",
    subtitle: "Timeless Classic Collection",
    price: 125.28, // Updated with two decimal places and random digits
    imgHR: HRNewProductImg1,
    img: NewProductImg1,
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "red", "green"],
    description: "Home / Work & Office / Timeless Classic Collection",
    category: "Work & Office",
    collection: "Timeless Classic Collection",
    pricingDetails: "$124.90 - $154.90",
    productDetails: "Crafted from soft, breathable fabrics, the relaxed fit provides a carefree silhouette, while thoughtful details add a touch of urban chic. Perfect for creating a professional yet relaxed style."
  },
  {
    id: 6,
    title: "Casual",
    subtitle: "Bohemian Rhapsody Attire",
    price: 155.36, // Updated with two decimal places and random digits
    imgHR: HRNewProductImg2,
    img: NewProductImg2,
    sizes: ["L", "M", "S", "XS"],
    colors: ["black", "red", "green", "white"],
    description: "Home / Casual Wear / Bohemian Rhapsody Attire",
    category: "Casual Wear",
    collection: "Bohemian Rhapsody",
    pricingDetails: "$154.90 - $174.90",
    productDetails: "This collection blends carefree bohemian vibes with a modern twist, making it perfect for casual outings and relaxed gatherings."
  },
  {
    id: 7,
    title: "Evening Dresses",
    subtitle: "Midnight Gala Maxi Dress",
    price: 175.59, // Updated with two decimal places and random digits
    imgHR: HRNewProductImg3,
    img: NewProductImg3,
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "red", "green", "white"],
    description: "Home / Evening Wear / Midnight Gala Maxi Dress",
    category: "Evening Wear",
    collection: "Midnight Gala",
    pricingDetails: "$174.90 - $194.90",
    productDetails: "Elevate your evening with this elegant maxi dress, designed for sophisticated occasions and midnight celebrations."
  },
  {
    id: 8,
    title: "Casual",
    subtitle: "Power Suit Ensemble",
    price: 120.74, // Updated with two decimal places and random digits
    imgHR: HRNewProductImg4,
    img: NewProductImg4,
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "red", "green", "white"],
    description: "Home / Office Wear / Power Suit Ensemble",
    category: "Office Wear",
    collection: "Power Suit Collection",
    pricingDetails: "$119.90 - $138.90",
    productDetails: "Empower your wardrobe with this power suit ensemble, offering a tailored fit and bold design for a commanding presence."
  }
]
export default productData;