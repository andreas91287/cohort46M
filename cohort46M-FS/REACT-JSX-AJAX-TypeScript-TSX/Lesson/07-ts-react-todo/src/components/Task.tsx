import { useRef, useState } from "react";

interface TaskProps {
    index: number,
    children: string,
    removeTask: (index: number) => void
    editTask: (index: number, text: string) => void
}

const Task = ({ children, removeTask, index, editTask }: TaskProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const textId = useRef<HTMLTextAreaElement>(null);

    const handleClickEdit = () => {
        setIsEdit(true);
    }

    const handleClickSave = () => {
        editTask(index, textId.current!.value);
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

export default Task