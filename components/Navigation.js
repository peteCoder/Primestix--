"use client"
import React, { useState } from "react";

const Navigation = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const Menus = [
    { name: "Enquire", icon: "mail-outline" },
    { name: "Call", icon: "call-outline" },
    { name: "WhatsApp", icon: "logo-whatsapp" },
    { name: "Contact Us", icon: "megaphone-outline" },
  ];

  const handleItemClick = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  return (
    <div className="bg-white z-[99999] fixed bottom-0 w-full h-[60px] my-auto items-center justify-center flex font-semibold capitalize">
      <ul className="display flex w-full justify-around items-center">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`flex items-center flex-col hover:text-[#A18830] cursor-pointer relative`}
            onClick={() => handleItemClick(index)}
          >
            <ion-icon name={menu.icon}></ion-icon>
            <span>{menu.name}</span>

            {/* Dropdown content */}
            {dropdownVisible === index && (
              <div className="absolute -top-[120px] text-center w-[150px] text-xs bg-white p-2 shadow-md">
                {/* Dropdown items go here */}
                <ul >
                    <li>Sales <br></br>
+971 4 520 5400</li>
<li className="divider h-1 w-full my-2 bg-[#A18830]"></li>
<li>Customer Relations <br></br>
+971 4 520 5400</li>
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;