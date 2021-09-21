/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Profile(props) {

    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        try {
            let getUser = async () => {
                setIsLoading(true);
                let userdata = await axios.get(`https://60ebd2d8e9647b0017cdde36.mockapi.io/Users/${props.match.params.id}`);
                setIsLoading(false);
                setUser(userdata.data);
            }
            getUser();
        } catch (error) {
            setIsLoading(false);
            console.log(error)
        }
    }, [])

    return (
        <>
            {
                isLoading ? <h1 className="loading">Loading...</h1>
                    : <div className="container">
                        <div className="profile-container row mt-1">
                            <div className="card text-dark bg-info mb-2 col-12 profile-container p-3" style={{ maxWidth: "25rem" }}>
                                <img className="image-container mb-3" src={user.imgurl} alt="profile pic" height="200" width="200" />
                                <div className="card-header card-name"><h4>{user.name}</h4></div>
                                <div className="card-body">
                                    <h5 className="card-mail">{user.email}</h5>
                                    <h5 className="card-age">{user.age}</h5>
                                    <div className="card-desc">{user.description}</div>
                                </div>
                                <Link to={`/edit-profile/${user.id}`} className="btn btn-outline-primary">Edit profile</Link>
                            </div>
                        </div>
                    </div>
            }
        </>

    )
}

export default Profile