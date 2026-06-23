import { useEffect } from 'react'

function Header() {
        useEffect(() => {
        document.title = 'Pet Care'
    }, [])
    return null


}

export default Header;