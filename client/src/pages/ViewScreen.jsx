import { useEffect, useState } from "react";
import ItemCard from "@/components/ItemCard";

function ViewScreen() {
	const [entrees, setEntrees] = useState([]);  // should viewScreen control state for entrees?  if not, try extracting into custom hook

	const getEntrees = async () => {		
		try {
			const response = await fetch("/api/entrees");
			const data = await response.json();
            console.log(data);
			setEntrees(data);
		} catch (error) {
			console.error("Error fetching entrees:", error);
		}
	};

	useEffect(() => {
		getEntrees(setEntrees);
	}, []); // should eventually add dependency of when an entree quantity is changed

	return (
		<div className="flex items-center justify-center w-screen h-screen gap-3 text-white bg-[#09090b]">
            <div className='grid grid-cols-3 grid-rows-2'>
                {entrees.map((entree) => (
                    <div className='flex gap-2' key={entree.id}>
						<ItemCard name={entree.name} price={entree.price}/>
                    </div>
                ))}
            </div>
		</div>
	);
}

export default ViewScreen;
