import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Paragraph from '../../elements/Paragraph';
import Field from '../../components/Field';
import MessageBox from '../../components/MessageBox';

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > *:not(:first-child) {
        margin-top: 10px;
    }
`;
const RegisterPage = () => {
    const [formData, setFormData] = React.useState({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
    const handleFieldChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setFormData(prevState => ({ ...prevState, [key]: e.target.value }));
    };

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <Paragraph fontSize="32" weight="900">
                    Register
                </Paragraph>
                <Field title="Login" onChange={handleFieldChange('login')} />
                <Field title="E-mail" onChange={handleFieldChange('email')} />
                <Field title="Password" onChange={handleFieldChange('password')} />
                <Field title="Repeat password" onChange={handleFieldChange('repeat-password')} />
                <MessageBox type="warning" title="Some warning!" text="WAZZAUP?!?!?" visible />
                <Button type="submit">Submit</Button>
            </Form>
        </Wrapper>
    );
};

export default RegisterPage;
