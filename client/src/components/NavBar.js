import React from 'react'
import PrivateInnerNav from './PrivateInnerNav'
import PrivateOuterNav from './PrivateOuterNav'
import PublicNav from './PublicNav'



function NavBar({variant, path}) {
    return (
        <div>
           {variant === "public" && <PublicNav />}
           {variant === "privateinner" && <PrivateInnerNav path={path} />}
           {variant === "privateouter" && <PrivateOuterNav />}
        </div>
    )
}

export default NavBar
