import { MutableRefObject } from "react"

export interface ISelectFieldError {
  error: string
  setError: (error: string)=>void

  required?: boolean
  validate?: (newValue: string)=>string
}

export class SelectFieldError {

  error: string
  setError: (error: string)=>void

  required?: boolean
  validate?: (newValue: string)=>string


  constructor(fieldError: ISelectFieldError) {
    this.error = fieldError.error
    this.setError = fieldError.setError

    if(fieldError.required !== undefined) { this.required = fieldError.required}
    if(fieldError.validate !== undefined) { this.validate = fieldError.validate}
  }

  UpdateError(newValue: string) {
    let hasError = false
    if(this.required && !newValue) { 
      hasError = true
      this.setError("This is a required question") 
    }
    if(this.validate) {
      const errorMsg = this.validate(newValue)
      if(errorMsg) {
        hasError = true
        this.setError(errorMsg)
      }
    }
    if(!hasError) { this.setError("") }
  }


  GetError() {
    return this.error
  }
}