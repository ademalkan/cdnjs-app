export interface useGetOneByLibrarieQueryI {
  name: string;
  latest: string;
  sri: string;
  authors: Author[];
  autoupdate: Autoupdate;
  description: string;
  filename: string;
  homepage: string;
  keywords: string[];
  license: string;
  repository: Repository;
  version: string;
  author: string;
  assets: Asset[];
  versions: string[];
}

export interface Asset {
  version: string;
  files: string[];
  rawFiles: string[];
}

export interface Author {
  name: string;
}

export interface Autoupdate {
  source: string;
  target: string;
  fileMap: FileMap[];
  ignoreVersions: string[];
}

export interface FileMap {
  basePath: string;
  files: string[];
}

export interface Repository {
  type: string;
  url: string;
}
