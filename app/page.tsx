import Navbat from "@/components/NavList/Navbat";
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';


const images = ['', 'image2.jpg', 'image3.jpg'];


export default function Home() {
  return (
    <main className="">
      <div className="h-[600px] w-[100%] bg-image ">
        <Navbat />
      </div>
    </main>
  );
}