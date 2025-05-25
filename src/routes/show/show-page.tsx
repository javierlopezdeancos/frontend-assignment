import React  from 'react'
import { Bookmark as BookmarkIcon } from 'lucide-react'
import { getRouteApi } from '@tanstack/react-router'
import TypographyHeader1Component from '@/components/typography/typography-header-1-component.tsx'
import TypographyParagraphComponent from '@/components/typography/typography-paragraph-component.tsx'
import ShowComponent from '@/components/show/show-component'
import ButtonComponent from '@/components/button/button-component.tsx'
import useFavoritesShowsHook from '@/hooks/use-favorites-shows'

function ShowPage(): React.ReactElement {
  const showApi = getRouteApi('/show/$id')
  const show = showApi.useLoaderData()
  const {
    favorites,
    saveFavorite,
    removeFromSavedFavorites
  } = useFavoritesShowsHook();

  if (!show) {
    return <div>Loading...</div>
  }

  const handleClickSetFavorite = (): void => {
    if (favorites.includes(String(show.id))) {
      removeFromSavedFavorites(String(show.id))
    }

    saveFavorite(String(show.id))
  }

  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-4 items-start space-x-4 w-full h-full">
        <header className="flex items-center justify-between w-full px-10 h-25 border-b-1 border-b-slate-500">
          <TypographyHeader1Component>🎞️ {show.name}</TypographyHeader1Component>
          <ButtonComponent variant={favorites.includes(String(show.id)) ? "destructive" : "outline"} onClick={handleClickSetFavorite}>
            {favorites.includes(String(show.id)) ?
            <TypographyParagraphComponent >Eliminar de favoritos</TypographyParagraphComponent> : <TypographyParagraphComponent >Añadir a favoritos</TypographyParagraphComponent>}
            {favorites.includes(String(show.id)) ? <BookmarkIcon size={24} className="text-white" /> : <BookmarkIcon size={24} />}
          </ButtonComponent>
        </header>
        <ShowComponent className="flex-1" show={show} />
      </div>
    </section>
  );
}

export default ShowPage;
