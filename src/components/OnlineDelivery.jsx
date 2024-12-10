import { useEffect, useState } from "react";
import Card from "./Card";

export default function OnlineDelivery(){
    const [restro, setRestro] = useState([]);
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
            <div className="text-[28px] font-bold">Restaurants with online delivery in Hosur</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                {restro.map((r,i)=>{
                    return <div>
                        <Card {...r} key={i}/>
                    </div>
                })}
        </div>
    </div>
}