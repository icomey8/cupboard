import { Link } from 'wouter'
import { SquareLibrary } from 'lucide-react'

const Navbar = () => {
    return (
        <>
            <nav className="bg-[#09090b] text-white p-4 px-6 flex items-center justify-around">
                <div className="flex gap-1">
                    <SquareLibrary
                        size={32}
                        color="#3c82f6"
                        strokeWidth={1.5}
                    />
                    <Link to="/">
                        <h1 className="pb-1 text-2xl border-b-2 border-transparent hover:border-b-[#3c82f6]">
                            cupboard
                        </h1>
                    </Link>
                </div>
                <div className="flex gap-6">
                    <Link to="/add">
                        <div className="border-b-2 border-transparent hover:border-b-[#3c82f6]">
                            Add
                        </div>
                    </Link>
                    <Link to="/view">
                        <div className="border-b-2 border-transparent hover:border-b-[#3c82f6]">
                            View
                        </div>
                    </Link>
                    <Link to="/view">
                        <div className="border-b-2 border-transparent hover:border-b-[#3c82f6]">
                            Delete
                        </div>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <h1 className="pb-1 border-b-2 border-transparent hover:border-b-[#3c82f6]">
                        GitHub
                    </h1>
                    <h1 className="pb-1 border-b-2 border-transparent hover:border-b-[#3c82f6]">
                        LinkedIn
                    </h1>
                </div>
            </nav>
        </>
    )
}

export default Navbar

// pb-1 text-2xl border-b-2 border-transparent hover:border-b-orange-600
