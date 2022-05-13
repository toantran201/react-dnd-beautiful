import styles from './style.module.css'
import {Draggable} from "react-beautiful-dnd";
import classNames from "classnames";

const Task = ({task, index}) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    className={classNames(styles.container, snapshot.isDragging ? styles.onDrag : styles.normal)}
                    {...provided.draggableProps}
                >
                    <div className={styles.handler}
                         {...provided.dragHandleProps}/>
                    {task.content}
                </div>
            )}
        </Draggable>
    )
}

export default Task
