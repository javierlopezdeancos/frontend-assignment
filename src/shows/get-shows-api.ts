import { type Show } from './shows.ts';

async function getShowsApi(): Promise<Show[]> {
  const response = await fetch('https://api.tvmaze.com/shows');

  if (!response.ok) {
    throw new Error('Failed to fetch shows');
  }

  return response.json();
};

export default getShowsApi;
