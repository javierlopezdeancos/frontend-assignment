import useLocalStorageHook from "./use-local-storage-hook.ts"

function useFavoritesShowsHook (): {
  favorites: string[]
  saveFavorite: (id: string) => void
  removeFromSavedFavorites: (id: string) => void
} {
  const [value, setValue] = useLocalStorageHook("favorites", JSON.stringify([]))

  const saveFavorite = (id: string): void => {
    if (value.includes(id)) {
        return
    }

    setValue([...value, id])
  }

  const removeFromSavedFavorites = (id: string): void => {
    if (!value.includes(id)) {
        return
    }

    setValue(value.filter((f: string) => f !== id))
  }

  return {
    favorites: value,
    saveFavorite,
    removeFromSavedFavorites
  }
}

export default useFavoritesShowsHook
