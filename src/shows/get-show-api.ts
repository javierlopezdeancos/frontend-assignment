import { type Show } from './shows.ts';

async function getShowApi(id?: number): Promise<Show> {
  if (!id) {
    throw new Error(`no found id, failed to fetch show details`);
  }

  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch show details');
  }

  return response.json();
};

export default getShowApi;
