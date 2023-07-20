import React, { memo, useCallback, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Form(props) {
  const [name, setName] = useState('');
  const [isTouchName, setIsTouchName] = useState(false);
  const [isValidName, setIsValidName] = useState(false);

  const validation = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      gender: 'FEMALE',
      // confirm_password: ""
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, 'Mininum 6 characters')
        .max(12, 'Maximum 12 characters')
        .required('Required!'),
      email: Yup.string().email('Invalid email format').required('Required!'),
      gender: Yup.string().required('Required gender!'),
      password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .required('Required!'),
      // confirm_password: Yup.string()
      //   .oneOf([Yup.ref('password')], "Password's not match")
      //   .required('Required!'),
    }),

    onSubmit: (values) => {
      console.log('««««« values »»»»»', values);
    },
  });
  // const onSubmit = useCallback((e) => {
  //   e.preventDefault();
  //   alert('submit form');
  // }, []);

  console.log('««««« log in form component í rerender »»»»»');

  const onChangeName = useCallback((e) => {
    setName(e.target.value);

    if (e.target.value !== "phuong") {
      console.log('««««« false »»»»»');
      setIsValidName(false);
    } else {
      console.log('««««« true »»»»»');
      setIsValidName(true);
    }
  }, []);

  const onBlurName = useCallback(() => {
    setIsTouchName(true)

    if (name !== "phuong") {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  }, [name]);

  return (
    <>
      <h1>Validation with Formik + Yup</h1>

      <input
            type="text"
            name="name"
            value={name}
            onChange={onChangeName}
            onBlur={onBlurName}
            style={{
              borderColor: isTouchName && (!name || !isValidName) ? 'red' : 'black' // validation.touched && validation.touched.email
            }}
          />

      <form onSubmit={validation.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            value={validation.values.username}
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
            style={{
              borderColor: validation.errors?.username ? 'red' : 'black'
            }}
          />
          <div>{validation.errors?.username}</div>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={validation.values.email}
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
            style={{
              borderColor: validation.errors?.email && validation.touched?.email ? 'red' : 'black' // validation.touched && validation.touched.email
            }}
          />
          {
            validation.touched?.email && validation.errors?.email && (
              <div style={{ color: 'red' }}>{validation.errors?.email}</div>
            )
          }
        </div>
        <div>
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={validation.values.gender}
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
            style={{
              borderColor: validation.errors?.gender ? 'red' : 'black'
            }}
          />
          <div>{validation.errors?.gender}</div>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={validation.values.password}
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
            style={{
              borderColor: validation.errors?.password ? 'red' : 'black'
            }}
          />

          <div>{validation.errors?.password}</div>
        </div>
        {/* <div>
          <label>Confirm Password</label>
          <input type="password" name="confirm_password" />
        </div> */}

        {/* {Object.keys(validation.errors).length > 0 && (
          <ol>
            {
              Object.entries(validation.errors).forEach(([key, value]) => <li>{`${key}: ${value}`}</li>)
            }
          </ol>
        )} */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

// export default Form;
// const componentA = memo(Form);
// export default componentA;
export default memo(Form);
