import React from 'react';
import logo from '../asset/logomie.png';
import ayamImage from '../asset/ayam.png'; // Ganti dengan path ke gambar ayam Anda

const Navbar = () => {
    return (
        <nav className='bg-amber-500 p-4 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex items-center space-x-2 mr-auto'>
                    <img src={logo} alt="logo" className='h-10' />
                    <p className="text-2xl font-bold"> Mie Ayam Pak Min</p>
                    <img src={ayamImage} alt="Ayam" className='h-10 animate-walking' /> {/* Menambahkan gambar ayam */}
                </div>
                <ul className='flex space-x-4'>
                    <li><a href='#home' className='text-black hover:text-white transition duration-300 p-2'>Home</a></li>
                    <li><a href='#about' className='text-black hover:text-white transition duration-300 p-2'>About</a></li>
                    <li><a href='#menu' className='text-black hover:text-white transition duration-300 p-2'>Menu</a></li>
                    <li><a href='#contact' className='text-black hover:text-white transition duration-300 pr-10'>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;