import React from 'react'

export default function Array(props) {
    const users = [
        { name: "Paavan", email: "Paavan@123", roll: 1 },
        { name: "Hardik", email: "Hardik@456", roll: 2 },
        { name: "Darshil", email: "Darshil@789", roll: 3 },
        { name: "Parva", email: "Parva@309", roll: 4 }
    ]


    return (
        <>
         {users.map((list, a) =>
        <ul key={a}>
            <li> <b>Name : </b>  {list.name}</li>
            <li> <b>Email :</b> {list.email}</li>
            <li> <b>Roll :</b> {list.roll}</li>
        </ul>
    )}
        </>
    )
}