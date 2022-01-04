import React, {useState} from 'react';

import UserBoard from './components/user/UserBoard';
import AddUser from './components/user/AddUser';

const DUMMY_USERS = [
  {id: 'u1', username: 'Max', age: 31},
  {id: 'u2', username: 'Bas', age: 21}
]

function App() {
  const [users, setUsers] = useState(DUMMY_USERS)

  const addNewUser = (newUser) => {
    setUsers(prevUsers => {
      return [
        newUser,
        ...prevUsers
      ]
    })
  }

  let content = <h2>There are no users</h2>
  if(users.length > 0){
    content = <UserBoard users={users}/>
  }

  return (
    <div className="App">
      <AddUser onAddUser={addNewUser}/>
      {content}
    </div>
  );
}

export default App;
