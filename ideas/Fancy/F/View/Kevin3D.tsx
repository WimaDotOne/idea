import cl from "./Kevin3D.module.scss"

export function Kevin3D() {
  return(<>
    <div className={cl.scene}>
      <div className={cl.objects}>
        <div className={cl.floor}></div>
        <div className={cl.cube}>
          <div className={cl.front}></div>
          <div className={cl.back}></div>
          <div className={cl.left}></div>
          <div className={cl.right}></div>
          <div className={cl.top}>
            <div className={cl.ballShadow}></div>
          </div>
          <div className={cl.bottom}></div>
        </div>
        <div className={cl.ball}>
        </div>
      </div>
    </div>
  </>)
}