export interface Movies {
    id: number;
    title: string;
    year: number;
    genre: string[];
    budget: number;
    popularity: number;
    posterPath: string;
    productionCompanies: ProductionCompany[];
    releaseDate: string;
    revenue: number;
    runtime: number;
    status: string;
    tagLine: string;
    productionCountries: string[];
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
    filePath: string;
    height: number;
    iso_639_1: string | null;
    voteAverage: number;
    voteCount: number;
    width: number;
}

export interface TrendingMovies {
    id: number;
    title: string;
    year: number;
    posterPath: string

}