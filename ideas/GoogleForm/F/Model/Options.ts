
interface IOption {
  value: string
  text: string
}

export class Options {
  array: IOption[] = []

  Add(value: string, text:string) {
    this.array.push({value, text})
  }
}