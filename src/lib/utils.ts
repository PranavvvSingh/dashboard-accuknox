import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import image1 from "@/assets/calendar.png"
import image2 from "@/assets/clock.png"
import image3 from "@/assets/dates.png"
import image4 from "@/assets/delivery-service.png"
import image5 from "@/assets/event.png"
import image6 from "@/assets/schedule.png"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const selectRandomImage = () => {
   const images = [image1, image2, image3, image4, image5, image6]
   const randomIndex = Math.floor(Math.random() * images.length)
   return images[randomIndex]
}
