interface Movies {
  _id: string;
  id: string;
  primaryImage: primaryImage;
  titleType: titleType;
  titleText: titleText;
  originalTitleText: titleText;
  releaseYear: releaseYear;
  releaseDate: releaseDate;
  position: number;
}

interface caption {
  plainText: string;
  _typename: string;
}

interface primaryImage {
  id: string;
  width: number;
  height: number;
  url: string;
  caption: caption;
  _typename: string;
}

interface titleType {
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  _typename: string;
}

interface titleText {
  text: string;
  _typename: string;
}

interface releaseYear {
  year: number;
  endYear: number | null;
  _typename: string;
}

interface releaseDate {
  day: number;
  month: number;
  year: number;
  _typename: string;
}

type ApiResponse = {
  entries: number;
  next: string | null | undefined;
  page: number;
  results: Movies[];
};
