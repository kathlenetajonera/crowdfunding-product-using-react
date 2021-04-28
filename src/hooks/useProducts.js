import { useState, useEffect } from "react";

const useProducts = (filterBy) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/rewardsList.json");
            const rewardsList = await response.json();

            if (filterBy === "productsOnly") {
                const productsOnly = rewardsList.filter(reward => reward.id !== 0);
    
                setProducts(productsOnly);
            } else {
                setProducts(rewardsList)
            }
        }

        fetchData();
    }, [filterBy])


    return { products }
}
 
export default useProducts;