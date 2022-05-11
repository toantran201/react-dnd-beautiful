import styles from './style.module.css'
import {Draggable} from "react-beautiful-dnd";

const Task = ({task, index}) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    className={styles.container}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {task.content}
                </div>
            )}
        </Draggable>
    )
}

export default Task
