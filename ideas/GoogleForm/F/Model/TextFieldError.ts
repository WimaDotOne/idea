import { MutableRefObject } from "react"

export interface ITextFieldError {
  error: string
  setError: (error: string)=>void

  revealError: boolean
  setRevealError: (revealError: boolean)=>void

  required?: boolean
  validate?: (newValue: string)=>string
}

/*
  Text field/area error is different from select field error because we don't want to 
  show error all the time when user is still typing
*/
export class TextFieldError {

  error: string
  setError: (error: string)=>void
  revealError: boolean
  setRevealError: (revealError: boolean)=>void

  required?: boolean
  validate?: (newValue: string)=>string


  constructor(fieldError: ITextFieldError) {
    this.error = fieldError.error
    this.setError = fieldError.setError
    this.revealError = fieldError.revealError
    this.setRevealError = fieldError.setRevealError

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


  ResetRevealError() {
    //revealError should be set to true when click submit button, false when editing field
    if(this.revealError) { this.setRevealError(false) }
  }


  GetError(isErrorVisibleRef:MutableRefObject<boolean>, value: string, focus: boolean) {
    /*
      Things to consider whether to show error message
      1. Is there an error
      2. Definitely show error (e.g. when user click submit button)
      3. Should we show error (e.g required field) when field is empty?
      4. Show error if focus is not on field (e.g. user tab away from field)
      5. If focus is on field, keep showing error only if error is already shown (e.g. user edit field after getting submision error)
      Order matters in following if statements
    */

    if(!this.error) {
      isErrorVisibleRef.current = false
      return ""
    }
    if(this.revealError) {
      isErrorVisibleRef.current = true
      return this.error
    }
    if(!value) {
      isErrorVisibleRef.current = false
      return ""
    }
    if(!focus) {
      isErrorVisibleRef.current = true
      return this.error
    }
    if(isErrorVisibleRef.current) {
      return this.error
    }
    return ""
  }
}