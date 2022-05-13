import styles from './style.module.css'
import Task from "../Task/Task";
import {Droppable} from "react-beautiful-dnd";
import classNames from "classnames";

const Column = ({column, tasks}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{column.title}</h3>
            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    <div
                        className={classNames(styles.taskListContainer, snapshot.isDraggingOver ? styles.isDraggingOver : "")}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default Column
