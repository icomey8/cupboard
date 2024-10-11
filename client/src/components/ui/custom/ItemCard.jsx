import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardFooter,
} from '../default/card.jsx'

import entrees from '@/assets/entrees.js'

function ItemCard({ name, price }) {
    return (
        <>
            <div className="min-w-72">
                <Card className="w-11/12">
                    <CardHeader></CardHeader>
                    <CardContent className="flex flex-col justify-center h-36">
                        <div className="flex justify-center">
                            <h1 className="text-4xl">{entrees[name]}</h1>
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
                                <p>tags go here (use shadcn badges)</p>
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
