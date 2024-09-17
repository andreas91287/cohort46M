const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Component (begins with UpperCase)
const Task = ({ children }) => {
    const [isEdit, setIsEdit] = React.useState(false);
    const textId = React.useRef();

    const handleClickEdit = () => {
        setIsEdit(true);
    }

    const handleClickSave = () => {
        alert(textId.current.value);
        setIsEdit(false);
    }

    const handleClickRemove = () => {
        alert(`Pressed remove button ${children}`);
    }

    const renderEdit = () => (
        <div className='box'>
            <textarea ref={textId} defaultValue={children}></textarea>
            <button onClick={handleClickSave} className='btn success'>Save</button>
        </div>
    )

    const renderNorm = () => (
        <div className='box'>
            <div>{children}</div>
            <button onClick={handleClickEdit} className='btn light'>Edit</button>
            <button onClick={handleClickRemove} className='btn red'>Remove</button>
        </div>
    )

    return isEdit ? renderEdit() : renderNorm();
}

const TaskList = () => {
    const [tasks, setTasks] = React.useState(['Task 1', 'Task 2', 'Task 3']);

    return (
        <div className='field'>
            {tasks.map((task, index) => <Task key={index}>{task}</Task>)}
        </div>
    )
}

root.render(<TaskList />);