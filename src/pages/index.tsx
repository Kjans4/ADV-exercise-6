import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2; 
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc; 
  background-color: #fff; 
`;

const Index = () => {
  const { register: registerLogin, handleSubmit: handleLoginSubmit, formState: { errors: loginErrors } } = useForm();
  const { register: registerRegister, handleSubmit: handleRegisterSubmit, formState: { errors: registerErrors } } = useForm();

  useEffect(() => {
  }, []);

  return (
    <Container>
      <FormContainer>
        <h1>Welcome!</h1>
        <p>Please select an option:</p>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </FormContainer>
    </Container>
  );
};

export default Index;
