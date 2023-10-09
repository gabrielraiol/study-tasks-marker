import { ITask } from "../../../types/ITask";
import style from "./Item.module.scss";

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
        <li onClick={() => !completed && selectTask(taskItem)} className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.completedItem : ''}`}>
            <h3>{task}</h3>
            <span>{time}</span>
            <br/>
            {/* conditional render */}
            {!completed && <h6>Clique aqui para poder cronometrar</h6>}
            {completed && <span className={style.done}></span>}
        </li>
    )
}

export default Item;