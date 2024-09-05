const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Component (begins with UpperCase)
const Task = ({ children }) => {
    const [isEdit, setIsEdit] = React.useState(false);
    
    const handleClickEdit = () => {
        setIsEdit(true);
    }

    const handleClickSave = () => {
        setIsEdit(false);
    }
    
    const handleClickRemove = () => {
        alert(`Pressed remove button ${children}`);
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
            <textarea defaultValue={children}></textarea>
            <button onClick={handleClickSave} className='btn success'>Save</button>
        </div>
    )

    return isEdit ? renderEdit() : renderNorm();
}

root.render(
    <div className='field'>
        <Task>Task 1</Task>
        <Task>Task 2</Task>
        <Task>Task 3</Task>
    </div>
);