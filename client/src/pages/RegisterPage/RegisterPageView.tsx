import { Form } from 'formik';
import React from 'react';

import Button from '../../components/Button';
import InputField from '../../components/forms/InputField';
import MessageBox from '../../components/MessageBox';
import Page from '../../components/Page';
import Paragraph from '../../elements/Paragraph';

import styles from './RegisterPage.module.scss';

const RegisterPageView = () => {
    return (
        <div className={styles.wrapper}>
            <Page>
                <Form className={styles.form}>
                    <Paragraph fontSize="32" weight="900">
                        Register
                    </Paragraph>
                    <InputField title="Login" name="username" />
                    <InputField title="E-mail" name="email" />
                    <InputField title="Password" name="password" />
                    <InputField title="Repeat password" name="repeatPassword" />
                    <MessageBox type="warning" title="Some warning!" text="WAZZAUP?!?!?" visible />
                    <Button type="submit">Submit</Button>
                </Form>
            </Page>
        </div>
    );
};

export default RegisterPageView;
