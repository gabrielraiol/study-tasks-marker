import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss"
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITask";
import { useEffect, useState} from 'react';

interface Props {
    selected: ITask | undefined
}

function Stopwatch({selected}: Props) {
    
    const [time, setTime] = useState <number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }    
    }, [selected])
    
    return(
        <div className={style.stopwatch}>
            <p className={style.title}>
                Escolha um card e inicie o cronômetro
            </p>
                Tempo: {time}
            <div className={style.watchWrapper}>
                <Watch />
            </div>
            <Button>
                Começar
            </Button>
        </div>
    )
}

export default Stopwatch;