import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardFooter,
} from "./BasicCard.jsx";

function ItemCard() {
	return (
		<>
			<div className="w-72">
				<Card className="w-5/6">
					<CardHeader></CardHeader>
					<CardContent className="flex flex-col justify-center h-36">
						<div className="flex justify-center">
							<h1 className="text-4xl">&#127856;</h1>
						</div>
					</CardContent>
					<CardFooter>
						<div className="flex flex-col w-full gap-1">
								<CardTitle className='flex justify-between w-full'>
									<div>Item Title</div>
									<div>$6</div>
								</CardTitle>
							<div className="flex gap-2 text-sm">
								<p>tags go here</p>
							</div>
						</div>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}

export default ItemCard;


// WORK IN PROGRESS BUT IN AN ACCEPTABLE STATE FOR NOW