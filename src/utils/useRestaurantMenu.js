import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setRefInfo] = useState(null);
  useEffect(() => {
    fetchData();
    console.log("ComponentMounted");

    return ()=>{
      console.log("Component Will Unmount")
    }
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);

    const json =await data.json();
    setRefInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
