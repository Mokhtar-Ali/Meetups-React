import { createContext, useState } from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetUpId) => {},
    itemIsFavorite: (meetUpId) => {}
})

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevSnapShot) => { // React provides a prev snapshot of the array
            return prevSnapShot.concat(favoriteMeetup)
        })
    }
    function removeFavoriteHandler(meetupID) {
        setUserFavorites((prevSnapshot) => {
            return prevSnapshot.filter(meetup => meetup.id !== meetupID)
        })
    }
    function itemIsFavoriteHandler(meetupID) {
        return userFavorites.some(meetup => meetup.id === meetupID)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;