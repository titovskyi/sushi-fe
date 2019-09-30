
export interface PosterStateInterface {
  posterProducts: any[];
  posterCategories: any[];
  loading: boolean;
  loaded: boolean;
}

export const initialPosterState: PosterStateInterface = {
  posterProducts: [],
  posterCategories: [],
  loading: false,
  loaded: true
};
