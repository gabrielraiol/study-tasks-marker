import React from 'react';
import './style.scss';

function Lista() {

    const tasks = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }];


    return (
        <aside className="taskList">
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li className="item" key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;