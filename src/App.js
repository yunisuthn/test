
import React, { useState } from 'react'
import UserTable from './table/UserTable'
import AddUserForm from './form/AddUserForm'

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  const addUser = user => {
    user.id = users.length + 1
    setUsers([ ...users, user ])
  }

const deleteUser = id => {
  setUsers(users.filter(user => user.id !== id))
}
  const [ users, setUsers ] = useState(usersData)
  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App