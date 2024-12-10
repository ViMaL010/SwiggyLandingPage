import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

export default function TopRestaurant(){
    const [restro, setRestro] = useState([]);
    const [slide, setSlide] = useState(0);

    const rightSlide = () => {
        setSlide(slide+3);
    }

    const leftSlide = () => {
        setSlide(s => s-3);
    }

    const fetchRestaurant = async() => {
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const data = await response.json();

        setRestro(data);
    }

    useEffect(()=>{
        fetchRestaurant();
    },[])

    return <div className="max-w-[1200px] mx-auto ">
        <div className="flex items-center justify-between p-3 mt-3">
            <div className="text-[28px] font-bold">Top restaurants in Hosur</div>
            <div className="flex gap-5">
                <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full" onClick = {leftSlide}><FaArrowLeft /></div>
                <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full" onClick = {rightSlide}><FaArrowRight  /></div>
            </div>
        </div>
        <div className="w-full md:flex gap-3 overflow-hidden duration-500" style={{
            transform: `translate:(-${slide*100}%)`
        }}>
            {restro.map((r,i)=>{
                return <div>
                    <Card {...r} key={i}/>
                </div>
            })}
        </div>
        <div>
            <hr class="my-4 border-[1px]"></hr>
        </div>
    </div>
}
