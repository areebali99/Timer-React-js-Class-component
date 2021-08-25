import React from 'react'

function User(props) {
    const {userName,userDesc,userIntrestFields} = props
   
    return (
        <div>
            <h1>{userName}</h1>
            <h1>{userDesc}</h1>
            <h1>{userIntrestFields}</h1>
            
        </div>
    )
}

export default User
