import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss"
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITask";
import { useEffect, useState} from 'react';

interface Props {
    selected: ITask | undefined,
    endTask: () => void
}

function Stopwatch({selected, endTask}: Props) {
    
    const [time, setTime] = useState <number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    function countdown(count: number = 0) {
        setTimeout(() =>{
            if(count>0) {
                setTime (count - 1);
                return countdown (count -1);
            } endTask();
        }, 1000)
    }
    
    return(
        <div className={style.stopwatch}>
            <p className={style.title}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.watchWrapper}>
                <Watch time = {time}/>
            </div>
            <Button onClick = {() => countdown(time)
            }>
                Começar
            </Button>
        </div>
    )
}

export default Stopwatch;