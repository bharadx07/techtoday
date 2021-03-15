import React from 'react'
import PrivateInnerNav from './PrivateInnerNav'
import PrivateOuterNav from './PrivateOuterNav'
import PublicNav from './PublicNav'



function NavBar({variant}) {
    return (
        <div>
           {variant === "public" && <PublicNav />}
           {variant === "privateinner" && <PrivateInnerNav />}
           {variant === "privateouter" && <PrivateOuterNav />}
        </div>
    )
}

export default NavBar
