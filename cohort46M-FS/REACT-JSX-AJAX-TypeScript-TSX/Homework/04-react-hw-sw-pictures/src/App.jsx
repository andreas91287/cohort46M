import { useState } from 'react'
import './App.css'
import { friends } from './utils/constants'
import Friend from './components/Friend'

function App() {
  const [friend, setFriend] = useState();

  if (friend) {
    return (
      <div className='App'>
        <Friend changeFriend={setFriend} friend={friend} size='large' />
      </div>
    );
  } else {
    return (
      <div className='App'>
        {friends.map((friend, index) => <Friend changeFriend={setFriend} key={index} friend={friend} />)}
      </div>
    )
  }
}

export default App
