import style from "./Watch.module.scss"

interface Props {
    time?: number
}

function Watch({time = 0}: Props) {
    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    //added "downlevelIteration": true on ts.config to TypeScript understand a String as an Array
    const [tenMinute, unitMinute] = String(minutes).padStart(2, "0");
    const [tenSecond, unitSecond] = String(seconds).padStart(2, "0");
    
    return(
        // React.Fragment also may be use in this case to 'cheat' JSX return (must have a father element)
        <>
            <span className={style.watchNumber}>{tenMinute}</span>
            <span className={style.watchNumber}>{unitMinute}</span>
            <span className={style.watchDivider}>:</span>
            <span className={style.watchNumber}>{tenSecond}</span>
            <span className={style.watchNumber}>{unitSecond}</span>
        </>
    )
}

export default Watch;