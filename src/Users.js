/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users(props) {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    let handledelete = async (id) => {
        try {
            let confirm = window.confirm("Are you sure to delete the user?");
            if (confirm) {
                setIsLoading(true);
                await axios.delete(`https://60ebd2d8e9647b0017cdde36.mockapi.io/Users/${id}`);
                setIsLoading(false)
                getUsers();
            }
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }
    let getUsers = async () => {
        try {
            setIsLoading(true)
            let users = await axios.get('https://60ebd2d8e9647b0017cdde36.mockapi.io/Users');
            setIsLoading(false)
            setUserData([...users.data])
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            <h3 className="page-title mb-4">Users</h3>

            {
                isLoading ? <h1 className="loading">Loading...</h1>
                    : <div className="col-12 table-responsive-lg">
                        <table className="table table-info table-hover mb-0">
                            <thead>
                                <tr>
                                    <th className="text-center theader">ID</th>
                                    <th className="text-center theader">Name</th>
                                    <th className="text-center theader">Age</th>
                                    <th className="text-center theader">Description</th>
                                    <th className="text-center theader">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((obj, index) => {
                                    return (

                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td><Link to={`/profile/${obj.id}`}>{obj.name}</Link></td>
                                            <td>{obj.age}</td>
                                            <td>{obj.description}</td>
                                            <td><div className="btn-containers mt-1"><Link to={`/edit-user/${obj.id}`} className=" btn btn-sm btn-primary">Edit</Link><button onClick={() => handledelete(obj.id)} className=" btn btn-sm btn-danger">Delete</button></div></td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                            <tfoot>
                                <tr>
                                    <th className="text-center theader">ID</th>
                                    <th className="text-center theader">Name</th>
                                    <th className="text-center theader">Age</th>
                                    <th className="text-center theader">Description</th>
                                    <th className="text-center theader">Actions</th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
            }
        </div>
    )
}

export default Users