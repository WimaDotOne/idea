
export interface IMoment {
  narrative: string
  lines: Array<string>
  illustration: string
}

export interface IDvd {
  movieId: string
  illustration: string
}

export type IMomentPage = Array<IMoment>
export type IDvdPage = Array<IDvd>
