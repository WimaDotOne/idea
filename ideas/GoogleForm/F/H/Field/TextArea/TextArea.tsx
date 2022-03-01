import { useRef } from "react"
import cl from "./TextArea.module.scss"

interface ITextAreaProp {
  value: string
  onChange: (newValue: string)=>void
  maxLength: number
  ghost?: string
  setFocus?: (focus: boolean)=>void
}
export function TextArea({
  value,
  onChange,
  ghost,
  maxLength,
  setFocus
}: ITextAreaProp) {

  const areaRef = useRef<HTMLTextAreaElement>(null)

  function onFocus() {
    if(setFocus) { setFocus(true) }
  }

  function onBlur() {
    if(setFocus) { setFocus(false) }
  }

  function resize() {
    const area = areaRef.current
    if(!area) return
    area.style.height = "auto"
    area.style.height = area.scrollHeight + "px"
  }

  function delayedResize() {
    setTimeout(resize, 0)

  }

  return(<>
    <div className={cl.div0}>
      <textarea ref={areaRef} rows={1}
        className={cl.area} 
        maxLength={maxLength} 
        placeholder={ghost}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value} 
        onChange={(e)=>{
          resize()
          onChange(e.target.value)}
        }
        onCut={delayedResize}
        onPaste={delayedResize}
      />
      <div className={cl.count}>{value ? value.length : 0}/{maxLength}</div>
    </div>
  </>)
}