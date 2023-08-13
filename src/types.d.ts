interface Movies {
  _id: string;
  id: string;
  ratingsSummary: ratingsSummary;
  primaryImage: primaryImage;
  titleType: titleType;
  genres: genres;
  titleText: titleText;
  originalTitleText: titleText;
  releaseYear: releaseYear;
  releaseDate: releaseDate;
  runtime: runtime;
  series: null;
  meterRanking: meterRanking;
  plot: plot;
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

interface ratingsSummary {
  aggregateRating: number;
  voteCount: number;
  _typename: string;
}

interface genres {
  genres: genre[];
  _typename: string;
}

interface genre {
  text: string;
  id: string;
  _typename: string;
}

interface runtime {
  seconds: number;
  _typename: string;
}

interface meterRanking {
  currentRank: number;
  rankChange: {changeDirection: string; difference: number; _typename: string};
  _typename: string;
}

interface plot {
  plotText: {plainText: string; _typename: string};
  language: {id: string; _typename: string};
  _typename: string;
}

type ApiResponse = {
  entries: number;
  next: string | null | undefined;
  page: number;
  results: Movies[];
};
