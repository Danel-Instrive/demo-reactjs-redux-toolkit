import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import data from "../data/DemoData";

export default function LabelBottomNavigation() {
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      {data.map((item, index) => (
        <div key={index}>
          <BottomNavigationAction
            component={Link}
            label={item.name}
            value={item.name}
            icon={<Icon icon={item.icon} width="30" />}
            to={item.link}
          />
        </div>
      ))}
    </BottomNavigation>
  );
}
