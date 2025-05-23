import { type Shows } from './shows.ts';

async function getShowsApi(): Promise<Shows[]> {
  const response = await fetch('https://api.tvmaze.com/shows');

  if (!response.ok) {
    throw new Error('Failed to fetch shows');
  }

  return response.json();
};

export default getShowsApi;
