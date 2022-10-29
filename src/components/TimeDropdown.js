import React, { useState, useEffect, useContext } from "react";

// import icons
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiClockwise2Fill,
} from "react-icons/ri";
// import headless ui components
import { Menu } from "@headlessui/react";
// import context
import { HouseContext } from "./HouseContext";

const TimeDropdown = () => {
  const { date, setDate } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const dates = [
    {
      value: "Move-in date (any)",
    },
    {
      value: "1 jan. - 5 jan.",
    },
    {
      value: "3 oct. - 6 oct.",
    },
    {
      value: "1 nov - 5 nov",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full"
      >
        <RiClockwise2Fill className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{date}</div>
          <div className="text-[13px]">Choose date</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {dates.map((date, index) => {
          return (
            <Menu.Item
              as="li"
              onClick={() => setDate(date.value)}
              key={index}
              className="cursor-pointer hover:text-violet-700 transition"
            >
              {date.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default TimeDropdown;
