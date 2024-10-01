import { useState } from "react";

function AddScreen() {
	const [inputText, setInputText] = useState({
		entree: "",
		price: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputText({
			...inputText,
			[name]: value,
		});
	};

	const addEntree = async (e) => {
		e.preventDefault();

		const submissionData = {
			...inputText,
			price: parseInt(inputText.price, 10), // Convert string price to integer
		};

        console.log("Submission data:", submissionData);

		try {
			const response = await fetch("/api/entrees", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(submissionData),
			});
			if (response.ok) {
				const data = await response.json();
				console.log("Entree added:", data);
				setInputText({ entree: "", price: "" });
			} else {
				console.error("Failed to add entree");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="flex items-center justify-center w-screen h-screen gap-3 text-white bg-[#09090b]">
			<h1>Add Screen</h1>
			<form onSubmit={addEntree} action="post">
				<input
					type="text"
					name="entree"
					value={inputText.entree}
					onChange={handleChange}
					placeholder="Entree Name"
				/>
				<input
					type="text"
					name="price"
					value={inputText.price}
					onChange={handleChange}
					placeholder="Price"
				/>
				<button type="submit">Add Entree</button>
			</form>
		</div>
	);
}

export default AddScreen;
