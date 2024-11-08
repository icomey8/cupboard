import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardFooter,
} from '../default/card.jsx'
import { Badge } from '../default/badge.jsx'
import entrees  from '@/assets/entrees.js'
import drinks  from '@/assets/drinks.js'
import desserts from '@/assets/desserts.js'

function ItemCard({ type, name, price }) {
    const badgeText = type === 'entrees' ? 'Entree' : type === 'drinks' ? 'Drink' : 'Dessert';
    const category = type === 'entree' ? entrees : type === 'drink' ? drinks : desserts;
    
    return (
        <>
            <div className="min-w-72">
                <Card className="w-11/12">
                    <CardHeader></CardHeader>
                    <CardContent className="flex flex-col justify-center h-36">
                        <div className="flex justify-center">
                            <h1 className="text-4xl">{category[name]}</h1>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex flex-col w-full gap-1">
                            <CardTitle className="flex justify-between w-full">
                                <div>{name}</div>
                                <div className="text-lg font-normal">
                                    {price}
                                </div>
                            </CardTitle>
                            <div className="flex gap-2 text-xs">
                                <Badge>{badgeText}</Badge>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default ItemCard

// WORK IN PROGRESS BUT IN AN ACCEPTABLE STATE FOR NOW
