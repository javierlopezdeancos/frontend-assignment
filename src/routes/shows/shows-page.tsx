import React, { use }  from 'react';
import getShowsApi from '@/shows/get-shows-api';
import TypographyHeader1Component from '@/components/typography/typography-header-1-component.tsx';
import ShowsComponent from '@/components/shows/shows-component';

const showsPromise = getShowsApi();

function ShowsPage(): React.ReactElement {
  const shows = use(showsPromise);

  if (!shows) {
    return <div>Loading...</div>
  }

  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-0 items-start space-x-4 w-full h-full">
        <TypographyHeader1Component className="w-full py-5 px-10 h-25 border-b-1 border-b-slate-500">
          🍿 Shows
        </TypographyHeader1Component>
        <ShowsComponent className="flex-1" shows={shows} />
      </div>
    </section>
  );
}

export default ShowsPage;
