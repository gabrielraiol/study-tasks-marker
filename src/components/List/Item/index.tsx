import { ITask } from "../../../types/ITask";
import style from "../List.module.scss";

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}

function Item({task, time, selected, completed, id, selectTask}: Props) {

    const taskItem = {
        task: task, 
        time: time, 
        selected: selected, 
        completed: completed,
        id: id
    }

    return(
        <li onClick={() => selectTask(taskItem)} className={`${style.item} ${selected ? style.selectedItem : ''}`}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item;