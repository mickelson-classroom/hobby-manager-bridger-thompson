
export interface Episode {
  id: number;
  title: string;
  duration: string;
}

export interface Show {
  id: number;
  title: string;
  season: number;
  episodes: Episode[];
  rating: number;
}
