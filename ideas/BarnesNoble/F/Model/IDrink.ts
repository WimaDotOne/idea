
export interface IStep {
  oneLine: string
  illustration: string
}

export interface IDrink {
  id: string,
  code: string,
  name: string
  steps: Array<IStep>
}
