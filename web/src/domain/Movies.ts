export interface Movies {
    id: number;
    title: string;
    year: number;
    genre: string[];
    budget: number;
    popularity: number;
    posterPath: string;
    productionCompany: ProductionCompany[];
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagLine: string;
    production_countries: string[];
    overview: string;
}

export interface ProductionCompany {
    id: number;
    logo: string;
    name: string;
    originCountry: string;
    movieId: string;
}

export interface MovieImages {
    id: number;
    backdrops: ImageDetail[];
    posters: ImageDetail[];
}

export interface ImageDetail {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
}