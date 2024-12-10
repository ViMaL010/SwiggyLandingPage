import { useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch, IoMdHelpBuoy } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { RxCaretDown } from "react-icons/rx";

export default function Header(){
    const [toggle, setToggle] =useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <IoIosSearch/>,
            name: "Search"
        },
        
        {
            icon: <CiDiscount1/>,
            name: "Offers",
            sup : "NEW"
        },
        {
            icon: "",
            name: "Help"
        },
        {
            icon: <RiAccountPinCircleFill/>,
            name: "Sign In"
        },
        {
            icon: <FaShoppingCart/>,
            name: "Cart"
        },

    ]

    return <>
        <div className="black-overlay h-full w-full fixed duration-500" onClick={hideSideMenu} style={{
            opacity: toggle ? 1: 0,
            visibility : toggle ? "visible" : "hidden" 
        }}>
            <div className="w-[500px] h-full bg-white absolute duration-[400ms]" onClick={(e)=>{
                e.stopPropagation();
            }} style={{
                left : toggle ? "0%" : "-100%"
            }}></div>
        </div>
        <header className="p-6 shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]" >
            <div className="max-w-[1400px] mx-auto flex items-center">
                <div className="w-[100px]">
                    <img src="images/Swiggy-logo.png" className="w-full" alt=""/>
                </div>
                <div className="">
                    <span className="font-bold border-b-[2px] border-black text-[#3d4152] mr-1">Other</span> Hosur, Tamil Nadu, India
                    <RxCaretDown fontSize={25} className="font-bold inline text-[0.9rem] text-[#ff5200] cursor-pointer" onClick={showSideMenu}/>
                </div>
                <nav className="hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold">
                    {
                        links.map((link, index)=>{            
                            return <li className="flex  hover:text-[#ff5200] items-center gap-2 cursor-pointer">
                                {link.icon}
                                {link.name}
                                <sup className="text-[#ffa700] font-bold">{link.sup}</sup>
                            </li>
                        })
                    }
                </nav>
            </div>
        </header>
    </>
}