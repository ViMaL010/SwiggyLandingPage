
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Category(){
    const [slide,setSlide] = useState(0);
    const [categories, setCategories] = useState([]);


    const rightSlide = () => {
        if(slide<12){
            setSlide(slide+3);
        }
    }

    const leftSlide = () => {
        setSlide(s => s-3)
    }

    const fetchCategory = async() => {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategories(data);
    }

    useEffect(()=>{
        fetchCategory();
    }, [])



    return <div className="max-w-[1200px] mx-auto ">
        <div className="flex items-center justify-between p-3 mt-3">
            <div className="text-[25px] font-bold">What's on your mind?</div>
            <div className="flex gap-5">
                <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full" onClick = {leftSlide}><FaArrowLeft /></div>
                <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full" onClick = {rightSlide}><FaArrowRight  /></div>
            </div>
        </div>
        <div className="flex overflow-hidden">
            {categories.map((cat,index)=>{
                return <div className="w-[150px] shrink-0 duration-500" style={{
                    transform : `translate(-${slide * 100}%)`
                }} key={index} >
                    <img src={"http://localhost:5000/images/" + cat.image} alt="" />
                </div>
            })}
        </div>
        <hr className="my-6 border-[1px]"/>
</div>
}