import { useEffect, useState } from "react";

function ViewScreen() {
	const [entrees, setEntrees] = useState([]);

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

            <div>
                {entrees.map((entree) => (
                    <div key={entree.id}>
                        <h2>{entree.name}</h2>
                        <p>{entree.price}</p>
                    </div>
                ))}
            </div>
		</div>
	);
}

export default ViewScreen;
