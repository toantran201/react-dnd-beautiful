import React from "react";
import initialData from "./initial-data";
import Column from "./components/Column/Column";
import {DragDropContext} from "react-beautiful-dnd";

function App() {
    const [state, setState] = React.useState(initialData)

    const onDragStart = () => {
        document.body.style.color = 'orange'
    }

    const onDragUpdate = () => {

    }

    const onDragEnd = (result) => {
        document.body.style.color = 'inherit'
        const {destination, source, draggableId} = result
        if(!destination){
            return
        }
        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ){
            return
        }

        const column = state.columns[source.droppableId]
        const newTaskIds = Array.from(column.taskIds)
        newTaskIds.splice(source.index, 1)
        newTaskIds.splice(destination.index, 0, draggableId)

        const newColumn = {
            ...column,
            taskIds: newTaskIds
        }

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn
            }
        }

        setState(newState)
    }

    return (
        <DragDropContext
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
        >
            {
                state.columnOrder.map((columnId) => {
                    const column = state.columns[columnId]
                    const tasks = column.taskIds.map(taskId => state.tasks[taskId])

                    return <Column key={column.id} column={column} tasks={tasks}/>
                })
            }
        </DragDropContext>
    )
}

export default App
