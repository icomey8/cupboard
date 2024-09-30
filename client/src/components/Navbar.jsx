import { Link } from "wouter";
import { SquareLibrary } from "lucide-react";

const Navbar = () => {
	return (
		<>
			<nav className="bg-[#09090b] text-white p-4 px-6 flex items-center justify-around">
				<div className="flex gap-1">
					<SquareLibrary size={32} color="#3c82f6" strokeWidth={1.5} />
					<Link to="/">
						<h1 className="text-2xl">cupboard</h1>
					</Link>
				</div>
				<div className="flex gap-6">
					<Link to="/add">Add</Link>
                    <Link to="/view">View</Link>
                    <Link to="/view">Delete</Link>
				</div>
				<div className="flex gap-2">
                    <h1>gitHub</h1>
					<h1>linkedIn</h1>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
