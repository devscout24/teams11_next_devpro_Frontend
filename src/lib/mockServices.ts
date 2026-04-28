export interface ServiceProvider {
  id: string;
  name: string;
  imageCategory: string;
  image: string;
  distance: string;
  location: string;
  title: string;
  rating: number;
  reviews: number;
  tags: string[];
  price: number;
}

export const MOCK_SERVICES: ServiceProvider[] = [
  {
    id: "1",
    imageCategory: "Barber",
    image: "/icons/commonLayout/image 23.png",
    name: "Nusrat Spa Therapist",
    distance: "1.5 km away",
    location: "Banani, Dhaka",
    title: "Relaxing Full Body Spa The...",
    rating: 4.9,
    reviews: 210,
    tags: ["60 min", "At Home", "7+ years exp"],
    price: 120,
  },
  {
    id: "2",
    imageCategory: "Spa",
    image: "/icons/commonLayout/image 37.png",
    name: "Nusrat Spa Therapist",
    distance: "1.5 km away",
    location: "Banani, Dhaka",
    title: "Relaxing Full Body Spa The...",
    rating: 4.9,
    reviews: 210,
    tags: ["60 min", "At Home", "7+ years exp"],
    price: 120,
  },
  {
    id: "3",
    imageCategory: "Chef",
    image: "/icons/commonLayout/image 38.png",
    name: "Nusrat Spa Therapist",
    distance: "1.5 km away",
    location: "Banani, Dhaka",
    title: "Relaxing Full Body Spa The...",
    rating: 4.9,
    reviews: 210,
    tags: ["60 min", "At Home", "7+ years exp"],
    price: 120,
  },
  {
    id: "4",
    imageCategory: "Cleaning",
    image: "/icons/commonLayout/image 23.png",
    name: "Nusrat Spa Therapist",
    distance: "1.5 km away",
    location: "Banani, Dhaka",
    title: "Relaxing Full Body Spa The...",
    rating: 4.9,
    reviews: 210,
    tags: ["60 min", "At Home", "7+ years exp"],
    price: 120,
  },
  {
    id: "5",
    imageCategory: "Barber",
    image: "/icons/commonLayout/image 37.png",
    name: "Nusrat Spa Therapist",
    distance: "1.5 km away",
    location: "Banani, Dhaka",
    title: "Relaxing Full Body Spa The...",
    rating: 4.9,
    reviews: 210,
    tags: ["60 min", "At Home", "7+ years exp"],
    price: 120,
  },
  {
    id: "6",
    imageCategory: "Spa",
    image: "/icons/commonLayout/image 38.png",
    name: "Nusrat Spa Therapist",
    distance: "1.5 km away",
    location: "Banani, Dhaka",
    title: "Relaxing Full Body Spa The...",
    rating: 4.9,
    reviews: 210,
    tags: ["60 min", "At Home", "7+ years exp"],
    price: 120,
  },
  {
    id: "7",
    imageCategory: "Chef",
    image: "/icons/commonLayout/image 23.png",
    name: "Nusrat Spa Therapist",
    distance: "1.5 km away",
    location: "Banani, Dhaka",
    title: "Relaxing Full Body Spa The...",
    rating: 4.9,
    reviews: 210,
    tags: ["60 min", "At Home", "7+ years exp"],
    price: 120,
  },
  {
    id: "8",
    imageCategory: "Cleaning",
    image: "/icons/commonLayout/image 37.png",
    name: "Nusrat Spa Therapist",
    distance: "1.5 km away",
    location: "Banani, Dhaka",
    title: "Relaxing Full Body Spa The...",
    rating: 4.9,
    reviews: 210,
    tags: ["60 min", "At Home", "7+ years exp"],
    price: 120,
  },
];

export default MOCK_SERVICES;
