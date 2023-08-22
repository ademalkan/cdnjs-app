export interface Library {
  name: string;
  latest: string;
  filename: string;
  description: string;
  version: string;
  github: Github;
}

export interface Github {
  user: string;
  repo: string;
  stargazers_count: number;
  forks: number;
  subscribers_count: number;
}

export interface FetchLibrariesI {
  results: Library[];
  total: number;
  available: number;
}

export interface initialStateI {
  libraries: FetchLibrariesI;
  loading: boolean;
  error: boolean;
  searchQuery: string;
}
