
export interface IStep {
  optional: boolean
  oneLine: string
  illustration: string
}

export interface IDrink {
  id: string,
  code: string,
  name: string
  steps: Array<IStep>
}
