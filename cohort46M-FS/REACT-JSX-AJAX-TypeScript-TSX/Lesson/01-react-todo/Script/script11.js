const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Component (begins with UpperCase)
const Task = ({ children, removeTask, index, editTask }) => {
    const [isEdit, setIsEdit] = React.useState(false);
    const textId = React.useRef();

    const handleClickEdit = () => {
        setIsEdit(true);
    }

    const handleClickSave = () => {
        editTask(index, textId.current.value);
        setIsEdit(false);
    }

    const handleClickRemove = () => {
        removeTask(index);
    }

    const renderNorm = () => (
        <div className='box'>
            <div>{children}</div>
            <button onClick={handleClickEdit} className='btn light'>Edit</button>
            <button onClick={handleClickRemove} className='btn red'>Remove</button>
        </div>
    )

    const renderEdit = () => (
        <div className='box'>
            <textarea ref={textId} defaultValue={children}></textarea>
            <button onClick={handleClickSave} className='btn success'>Save</button>
        </div>
    )
    return isEdit ? renderEdit() : renderNorm();
}

const TaskList = () => {
    const [tasks, setTasks] = React.useState([]);

    const addTask = () => {
        setTasks([...tasks, 'New Task']);
    }

    const updateTask = (index, text) => {
        const tasksCopy = [...tasks];   // spread - verbreiten, verteilen
        tasksCopy[index] = text;
        setTasks(tasksCopy);
    }

    const deleteTask = index => {
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    }
    
    return (
        <div className='field'>
            <button onClick={addTask} className="btn new">Add Task</button>
            {tasks.map((task, index) => <Task editTask={updateTask} removeTask={deleteTask} index={index} key={index}>{task}</Task>)}
        </div>
    )
}

root.render(<TaskList />);