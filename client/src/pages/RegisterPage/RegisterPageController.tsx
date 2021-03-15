import { Formik, FormikValues } from 'formik';
import React from 'react';

import { useMutation } from '@apollo/react-hooks';

import { REGISTER_USER } from '../../utils/apollo/mutations';
import RegisterPageView from './RegisterPageView';

const RegisterPageController = () => {
    const [registerUser, { data, error, loading }] = useMutation(REGISTER_USER);
    const initialValues: FormikValues = { username: '', password: '', repeatPassword: '', email: '' };

    console.log(data, error, loading);
    const handleSubmit = async (values: FormikValues) => {
        const response = await registerUser({ variables: values });
        console.log(response);
    };
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <RegisterPageView />
        </Formik>
    );
};

export default RegisterPageController;
