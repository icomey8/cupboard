import { useEffect, useState } from 'react'
import ItemCard from '@/components/ui/custom/ItemCard'
import entreesData from '@/assets/entrees.js'
import drinksData from '@/assets/drinks.js'

function ViewScreen() {
    const [entrees, setEntrees] = useState([]) // should viewScreen control state for entrees?  if not, try extracting into custom hook
    const [drinks, setDrinks] = useState([])

    const getEntrees = async () => {
        try {
            const response = await fetch('/api/entrees')
            const data = await response.json()
            // console.log(data)
            setEntrees(data)
        } catch (error) {
            console.error('Error fetching entrees:', error)
        }
    }

    const getDrinks = async () => {
        try {
            const response = await fetch('/api/drinks')
            const data = await response.json()
            console.log(data)
            setDrinks(data)
        } catch (error) {
            console.error('Error fetching drinks:', error)
        }
    }

    useEffect(() => {
        getEntrees(setEntrees)
        getDrinks(setDrinks)
    }, []) // should eventually add dependency of when an entree quantity is changed

    return (
        <div className="flex items-center justify-center w-screen h-screen gap-3 text-white bg-[#09090b]">
            <div className="grid grid-cols-3 grid-rows-2">
                {entrees.map((entree) => (
                    <div className="flex gap-2" key={entree.id}>
                        <ItemCard type={entreesData} name={entree.name} price={entree.price} />
                    </div>
                ))}
                {drinks.map((drink) => (
                    <div className="flex gap-2" key={drink.id}>
                        <ItemCard type={drinksData} name={drink.name} price={drink.price} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ViewScreen
