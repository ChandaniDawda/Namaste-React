import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    const fetchData = async () => {
        if (!resId) return;
        try {
            const response = await fetch(MENU_API_URL + resId);
            if (!response.ok) {
                console.error('fetch error status:', response.status);
                setResInfo(null);
                return;
            }
            const json = await response.json();
            setResInfo(json.data ?? null);
        } catch (err) {
            console.error('Failed to fetch restaurant menu:', err);
            setResInfo(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, [resId]);

    return resInfo;
};

export default useRestaurantMenu;