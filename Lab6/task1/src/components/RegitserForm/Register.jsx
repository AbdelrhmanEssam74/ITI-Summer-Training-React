import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {Formik} from 'formik';
import {BsEye, BsEyeSlash} from 'react-icons/bs';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Formik
            initialValues={{name: '', email: '', username: '', password: '', confirmPass: ''}}
            validate={
                values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Name is required';
                    } else if (values.name.length < 3) {
                        errors.name = 'Name Must Be More Than 3 Character';
                    }
                    if (!values.username) {
                        errors.username = 'Username is required';
                    } else if (values.username.length < 5) {
                        errors.username = 'Username Must Be More Than 5 Character';
                    } else if (values.username.includes(" ")) {
                        errors.username = 'Username can not contain space'
                    }
                    if (!values.email) {
                        errors.email = 'Email is required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Password is required';
                    } else if (values.password.length <= 8) {
                        errors.password = 'Password must be at least 8 characters';
                    } else if (values.password[0]) {
                        errors.password = 'Password must be at least 8 characters';
                    }

                    if (!values.confirmPass) {
                        errors.confirmPass = 'Password must be at least 8 characters';
                    } else if (values.confirmPass !== values.password) {
                        errors.confirmPass = 'Not Match Password';
                    }
                    return errors;
                }
            }
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400)
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isSubmitting,
              }) => (
                <Container className='container'>
                    <Row>

                        <Form className='login-form' md="4">
                            <h1>Register</h1>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name='name'
                                    placeholder="Enter Your Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <p className='text-danger'>{errors.name && touched.name && errors.name}</p>
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    name='email'
                                    placeholder="email@example.com"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <p className='text-danger'>{errors.email && touched.email && errors.email}</p>
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name='username'
                                    placeholder="Enter Your Username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                />
                                <p className='text-danger'>{errors.username && touched.username && errors.username}</p>
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Password</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        required
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        name='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <InputGroup.Text className='show-pass' onClick={togglePasswordVisibility}>
                                        {showPassword ? <BsEyeSlash/> : <BsEye/>}
                                    </InputGroup.Text>
                                </InputGroup>
                                <p className='text-danger'>{errors.password && touched.password && errors.password}</p>
                                <div id="emailHelp" className="form-text">
                                    Password Length Must Be More
                                    than 8 characters.
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Confirm Password</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        required
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password Again"
                                        name='confirmPass'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmPass}
                                    />
                                    <InputGroup.Text className='show-pass' onClick={togglePasswordVisibility}>
                                        {showPassword ? <BsEyeSlash/> : <BsEye/>}
                                    </InputGroup.Text>
                                </InputGroup>
                                <p className='text-danger'>{errors.confirmPass && touched.confirmPass && errors.confirmPass}</p>
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Button disabled={isSubmitting} type="submit">Submit form</Button>
                            </Form.Group>
                        </Form>
                    </Row>
                </Container>
            )}

        </Formik>
    )
}

export default Register;