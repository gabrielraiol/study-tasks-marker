import { ITask } from "../../../types/ITask";
import style from "../List.module.scss";

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}

function Item({task, time, selected, completed, id, selectTask}: Props) {
    return(
        <li onClick={() => selectTask({task, time, selected, completed, id})} className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item;