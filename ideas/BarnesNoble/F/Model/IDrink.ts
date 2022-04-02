
export interface IStep {
  optional: boolean
  oneLine: string
  illustration: string
}

export interface IDrink {
  id: string
  code: string
  name: string
  hot: boolean
  steps: Array<IStep>
}
