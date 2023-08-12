interface Movies {
  results: any;
}

type ApiResponse = {
  entries: number;
  next: string | null | undefined;
  page: number;
  results: Movies[];
};
