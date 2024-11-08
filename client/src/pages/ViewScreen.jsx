import MenuItems from '@/components/ui/custom/MenuItem'



function ViewScreen() {

    return (
        <div className="flex items-center justify-center w-screen h-screen gap-3 text-white bg-[#09090b]">
        <div className="grid grid-cols-3 grid-rows-2">
          {/* <MenuItems apiUrl="/api/entrees" itemType={"entree"} /> */}
          {/* <MenuItems apiUrl="/api/drinks" itemType={"drink"}/>   */}
          <MenuItems apiUrl="/api/desserts" itemType={"dessert"}/>
        </div>
      </div>
    )
}

export default ViewScreen
