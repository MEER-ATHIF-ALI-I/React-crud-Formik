import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';


function CreateUsers() {

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const formik = useFormik({
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
            }
            if (values.name && values.name.length < 3) {
                errors.name = "Must contain atleast 3 characters"
            }
            if (!values.age) {
                errors.age = "Required"
            }
            if (values.age && values.age < 13) {
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
                    await axios.post("https://60ebd2d8e9647b0017cdde36.mockapi.io/Users", { name: values.name, age: values.age, email: values.email, imgurl: values.imgurl, description: values.description })
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


    return (
        <div>
            <h3 className="page-title mb-4">Create New User</h3>
            {
                isLoading ? <h1 className="loading">Loading...</h1>
                    : (<form onSubmit={formik.handleSubmit} className="pb-3">
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <label htmlFor="name">Name</label> {formik.errors.name ? <span className="namerequired">{formik.errors.name}</span> : null}
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
                                <input type="email" value={formik.values.email} name="email" onChange={formik.handleChange} id="email" className="form-control" />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <label htmlFor="imgurl">Image Url</label>{formik.errors.imgurl ? <span className="namerequired">{formik.errors.imgurl}</span> : null}
                                <input type="text" value={formik.values.imgurl} name="imgurl" onChange={formik.handleChange} id="imgurl" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-12">
                                <label htmlFor="description">Description</label>{formik.errors.description ? <span className="namerequired">{formik.errors.description}</span> : null}
                                <textarea type="text" value={formik.values.description} name="description" onChange={formik.handleChange} id="description" className="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="btn-container">
                            <input type="submit" value="Create User" className="btn btn-outline-primary btn-container-primary" disabled={isLoading ? true : false} />
                        </div>
                    </form>)
            }

        </div>
    )
}

export default CreateUsers