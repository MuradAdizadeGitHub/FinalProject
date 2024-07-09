import React, { createContext } from 'react'
import useLocalstorage from '../../hooks/useLocalStorage'
export const WishListContext = createContext()
function WishListProvider({ children }) {
    const [wishlist, setwishlist] = useLocalstorage("MyKey",[])
    function IncreaseWishlist(item) {
        const index = wishlist.findIndex((x) => x._id === item._id)
        if (index !== -1) {
            setwishlist(wishlist.filter((x) => x._id !== item._id))
        }
        else {
            setwishlist([...wishlist, { ...item }])
        }
    }

function IsExist(item) {
    return wishlist.findIndex((x)=>x._id===item._id)!==-1
}

function RemoveWishList(item) {
    setwishlist(wishlist.filter((x) => x._id !== item._id))
}
    return (
        <>
            <WishListContext.Provider value={{ IncreaseWishlist, IsExist,wishlist,RemoveWishList }}>
                {children}
            </WishListContext.Provider>
        </>
    )
}

export default WishListProvider