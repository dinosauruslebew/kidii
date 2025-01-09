// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Menua\s = () => {
  const [menu, setMenu] = useState([]); 

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'menu'));
        setMenu(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(), 
          }))
        );
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <section id="menu" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((menu) => (
            <div key={menu.id} className="p-4 bg-gray-200 rounded shadow-md">
              <h3 className="text-xl font-bold">{menu.name}</h3>
              <p className="text-gray-600">{menu.description}</p>
              <a
                href={menu.link}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Menu
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;