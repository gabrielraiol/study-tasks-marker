import style from "./Watch.module.scss"

function Watch() {
    return(
        // React.Fragment also may be use in this case to 'cheat' JSX return (must have a father element)
        <>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchDivider}>:</span>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchNumber}>0</span>
        </>
    )
}

export default Watch;