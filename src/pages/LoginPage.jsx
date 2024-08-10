import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const frmLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      if(values.email === 'cybersoft' && values.password === 'cybersoft') {
        // chuyển hướng profile
        navigate('/profile');
      } else {
        // chuyển hướng forgot
        navigate('/user/forgot-pass');
      }
    }
  });

  return (
    <form className='container' onSubmit={frmLogin.handleSubmit}>
      <div className="w-50 mx-auto">
        <h3 className='text-center fs-1 text-white'>Login</h3>
        <div className="card">
          <div className="card-body">
            <div className="from-group">
              <label htmlFor="email">Email</label>
              <input className='form-control' id='email' name='email' onChange={frmLogin.handleChange} />
            </div>
            <div className="from-group">
              <label htmlFor="password">Password</label>
              <input className='form-control' id='password' name='password' onChange={frmLogin.handleChange} type='password'/>
            </div>
            <div className="from-group mt-2">
              <button type='submit' className='btn btn-dark'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LoginPage