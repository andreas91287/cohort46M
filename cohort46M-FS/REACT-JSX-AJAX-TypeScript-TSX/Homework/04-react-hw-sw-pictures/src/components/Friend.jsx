import React from 'react'

const Friend = ({ friend, changeFriend, size }) => {
    const handleClick = () => {
        if (size) {
            changeFriend();
        } else {
            changeFriend(friend);
        }
    }

    return (
        <img onClick={handleClick} className={size || ''} src={friend} alt='Friend' />
    )
}

export default Friend