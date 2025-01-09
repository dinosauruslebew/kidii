import React from "react";
import cute from '../asset/0838-9704-7440, Harga mie ayam ceker enak  pondok kopi.jpg';
import beww from '../asset/Snickers Milkshake - Opskrift På Hjemmelavet Snickersmilkshake.jpg';
import { ArrowRightIcon } from '@heroicons/react/solid';
// import download from '../asset/download (15).jpeg';
// import porto from '../asset/haha.jpeg';
// import port2 from '../asset/cover.jpg';

const Menu = () => {
    return (
        <section id="menu" className="py-20 bg-white ">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl text-left font-bold mb-8 ml-16">Menu</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-amber-00 p-4 rounded-lg outline outline-1 outline-amber-600 ml-16 mr-5">
                        <img src={cute} alt="Gorila" className="w-full h-60 object-cover mb-4 rounded-md"/>
                        <h3 className="text-2xl font-bold mb-2">Makanan</h3>
                        {/* <Link
                            to="/makanan"
                            className="text-blue-500 hover:underline font-semibold"
                        >
                            Lihat Selengkapnya
                        </Link> */}
                    </div>

                    <div className="outline outline-1 outline-amber-600 p-4 rounded-lg mr-16 ml-5">
                        <img src={beww} alt="Gorila" className="w-full h-60 object-cover mb-4 rounded-md"/>
                        <h3 className="text-2xl font-bold mb-2">Minuman</h3>
                        {/* <Link
                            to="/minuman"
                            className="text-blue-500 hover:underline font-semibold"
                        >
                            Lihat Selengkapnya
                        </Link> */}
                    </div>

                </div>
                <button className="flex justify-center items-center w-[500] mt-6 px-6 py-2 outline outline-1 outline-amber-500 text-white hover:text-black font-semibold rounded-full bg-amber-500 hover:bg-white transition duration-300 flex space-x-1">
                        <span className="text-center ">Selengkapnya</span>
                        <ArrowRightIcon className="w-5 h-5 mt-1 text-center" />
                    </button>

            </div>
        </section>
    )
}

export default Menu;