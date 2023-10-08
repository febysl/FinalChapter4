import { useState } from "react";
import Search from "./Search";
import Button from "./Button";
import Brand from "./Brand";


const Header = () => {
    

    return(
        <div className="flex justify-between items-center p-4 fixed top-0 left-0 z-50 w-full">
        <Brand/>
        <Search/>
        <div className="flex gap-2">
            <Button variant='transparent'>Login</Button>
            <Button variant='color'>Register</Button>
        </div>
    </div>
    )
    
}
export default Header