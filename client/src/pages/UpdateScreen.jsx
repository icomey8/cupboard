import { ComboboxDemo } from '@/components/ui/default/combobox';

function UpdateScreen() {
    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen text-white bg-[#09090b]">
                <div className="flex flex-col mb-16 bg-[#020817] w-1/3 h-2/3 border-2 border-[#1a2436] rounded-md p-6 gap-6">
                    <h1 className="mb-6 text-3xl font-semibold">
                        Updating Inventory
                    </h1>
                    <div className="flex flex-col flex-grow gap-6">
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col mr-auto">
                                <h3>Store</h3>
                                <h4 className="text-xs text-[#778598]">
                                    Select the store location.
                                </h4>
                            </div>
                            <ComboboxDemo />
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex flex-col mr-auto">
                                <h3>Item</h3>
                                <h4 className="text-xs text-[#778598]">
                                    Select the category, then a specific
                                    product.
                                </h4>
                            </div>
                            <ComboboxDemo />
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex flex-col mr-auto">
                                <h3>Price</h3>
                                <p className="text-xs">Current price: </p>
                            </div>
                            <input
                                type="text"
                                placeholder="choose a price"
                                className="w-32 bg-[#020817] border border-[#1a2436]"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex flex-col mr-auto">
                                <h3>Quantity</h3>
                                <p className="text-xs">Current Quantity:</p>
                            </div>
                            <input
                                type="text"
                                placeholder="choose quantity"
                                className="w-32 bg-[#020817] border border-[#1a2436]"
                            />
                        </div>

                        <div className="flex items-center justify-center flex-grow">
                            <button className="w-1/2 bg-[#3c82f6] py-2 rounded-md">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateScreen;
