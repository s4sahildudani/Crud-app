
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function Tabledata() {
    const [users, setusers] = useState([] as any);
    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setusers(data))
            .catch((err) => {
                alert(err)
            })
    }
    console.log(users);
    const Add = async () => {
        const item = { email:"s4sahil.dudani@gmail.com",name: "Sahil", body: "new" }
        await axios.post('https://jsonplaceholder.typicode.com/users', item)
        setusers([item, ...users]);
    }

    const handleupdate = async (item: any) => {
        item.name = "Hitesh wadhwani";
        item.email="sahil.fash@gmail.com";
        await axios.put('https://jsonplaceholder.typicode.com/users' + "/" + item.id);
        const usersClone = [...users];
        const index = usersClone.indexOf(item);
        usersClone[index] = { ...item };
        setusers(usersClone);
    }
    const handledelete = async (item: any) => {
        await axios.delete('https://jsonplaceholder.typicode.com/users' + "/" + item.id + item);
        setusers(users.filter((p: { id: any; }) => p.id !== item.id))
    }
    return (
        <div>Tabledata
            Add Data
            <button onClick={Add}>Add</button>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item: any) =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={() => handleupdate(item)}><EditIcon /></button>
                            </td>
                            <td>
                                <button onClick={() => handledelete(item)}><DeleteIcon /></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Tabledata