import { ComboboxDemo } from "@/components/ui/default/combobox"

function AddScreen() {

    // could use progress bar component here

    return (
        <>
        <div className="flex items-center justify-center w-screen h-screen gap-3 text-white bg-[#09090b]">
            <div className='flex flex-col justify-start mb-16 bg-[#020817] w-2/3 h-2/3 border-2 border-[#1a2436] rounded-md'>
                <h1>Updating Inventory</h1> 
                <h3>Store</h3>
                <h4 className="text-xs text-[#778598]">Select the store location.</h4>
                <ComboboxDemo />
                <h3>Item</h3>
                <h4 className="text-xs text-[#778598]">Select the category, then specifc product. </h4>
                <ComboboxDemo />
                <h3>Price</h3>
                <input type="text" placeholder="choose a price" className="w-32 bg-[#020817] border border-[#1a2436]"/>
                <h3>Quantity</h3>
                <input type="text" placeholder="choose quantity" className="w-32 bg-[#020817] border border-[#1a2436]"/>
            </div>
        </div>
        </>
    )
}

export default AddScreen
