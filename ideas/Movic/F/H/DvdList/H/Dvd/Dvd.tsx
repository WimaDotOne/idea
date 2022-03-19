import cl from "./Dvd.module.scss"

interface IDvdProp {
  imageUrl: string
  onClick: ()=>void
}
export function Dvd({
  imageUrl,
  onClick
}:IDvdProp) {
  const dvdStyle = {
    backgroundImage: `url(${imageUrl})`
  }
  return(<>
    <div className={cl.dvdWrap}>
      <div className={cl.dvd} onClick={onClick} style={dvdStyle}>

      </div>
    </div>
  </>)
}