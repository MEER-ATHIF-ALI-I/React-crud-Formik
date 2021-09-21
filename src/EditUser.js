/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';

export default function EditUsers(props) {

    const [isLoading, setIsLoading] = useState(false);

    let formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
            imgurl: '',
            description: ''
        },
        validate: (values) => {
            let errors = { };
            if (!values.name) {
                errors.name = "Required"
            } else if (values.name.length < 3) {
                errors.name = "Must contain atleast 3 characters"
            }
            if (!values.age) {
                errors.age = "Required"
            } else if (values.age < 13) {
                errors.age = "Must be 13 & above"
            }
            if (!values.email) {
                errors.email = "Required"
            } else if (!values.email.includes('@')) {
                errors.email = "Enter valid e-mail"
            }
            if (!values.imgurl) {
                errors.imgurl = "Required"
            }
            if (values.imgurl && !values.imgurl.startsWith('https://')) {
                errors.imgurl = "Enter valid url"
            }
            if (!values.description) {
                errors.description = "Required"
            }
            return errors;
        },
        onSubmit: (values) => {
            let handleformSubmit = async () => {
                try {
                    setIsLoading(true);
                    await axios.put(`https://60ebd2d8e9647b0017cdde36.mockapi.io/Users/${props.match.params.id}`, { name: values.name, age: values.age, email: values.email, imgurl: values.imgurl, description: values.description })
                    setIsLoading(false);
                    history.push('/users')
                } catch (error) {
                    setIsLoading(false)
                    console.log(error);
                }
            }
            handleformSubmit();
        }
    })

    useEffect(() => {
        let getUser = async () => {
            try {
                setIsLoading(true);
                let user = await axios.get(`https://60ebd2d8e9647b0017cdde36.mockapi.io/Users/${props.match.params.id}`);
                formik.values.name = user.data.name;
                formik.values.age = (user.data.age);
                formik.values.email = (user.data.email);
                formik.values.imgurl = (user.data.imgurl);
                formik.values.description = (user.data.description);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error)
            }
        }
        getUser();
    }, [])

    const history = useHistory();

    return (
        <div>
            <h3 className="page-title mb-4">Edit Existing User</h3>
            {
                isLoading ? <h1 className="loading">Loading...</h1>
                    : <form onSubmit={formik.handleSubmit} className="pb-3">
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <label htmlFor="name">Name</label>{formik.errors.name ? <span className="namerequired">{formik.errors.name}</span> : null}
                                <input type="text" value={formik.values.name} name="name" onChange={formik.handleChange} id="name" className="form-control" />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <label htmlFor="age">Age</label>{formik.errors.age ? <span className="namerequired">{formik.errors.age}</span> : null}
                                <input type="number" value={formik.values.age} name="age" onChange={formik.handleChange} id="age" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <label htmlFor="email">E-mail</label>{formik.errors.email ? <span className="namerequired">{formik.errors.email}</span> : null}
                                <input type="mail" value={formik.values.email} name="email" onChange={formik.handleChange} id="email" className="form-control" />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <label htmlFor="imgurl">Image Url</label>{formik.errors.imgurl ? <span className="namerequired">{formik.errors.imgurl}</span> : null}
                                <input type="text" value={formik.values.imgurl} name="imgurl" onChange={formik.handleChange} id="imgurl" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-12">
                                <label htmlFor="description">Description</label>{formik.errors.description ? <span className="namerequired">{formik.errors.description}</span> : null}
                                <textarea type="text" name="description" value={formik.values.description} onChange={formik.handleChange} id="description" className="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="btn-container">
                            <input type="submit" value="Update User" className="btn btn-outline-primary btn-container-primary" />
                        </div>
                    </form>
            }

        </div >
    )
}