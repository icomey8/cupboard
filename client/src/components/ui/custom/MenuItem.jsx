import ItemCard from './ItemCard'
import { useEffect, useState } from 'react'
import { useMenuItems } from '@/lib/useMenuItems.js'


function MenuItems({ apiUrl, itemType }) {
    const [menuItems, setMenuItems] = useState([])  
    const { data, isLoading, error } = useMenuItems(apiUrl, itemType)

    useEffect(() => {
        if (data) {
            setMenuItems(data); 
        }
    }, [data]);

    if (isLoading) {
        return <div>Loading {itemType}...</div>;
    }

    if (error) {
        return (
            <div>
                Error loading {itemType}: {error.message}
            </div>
        );
    }

    return (
        <>
            {menuItems.map((item) => (
                <div className="flex gap-2" key={item.id}>
                    <ItemCard
                        type={itemType}
                        name={item.name}
                        price={item.price}
                    />
                </div>
            ))}
        </>
    );
}

export default MenuItems;
