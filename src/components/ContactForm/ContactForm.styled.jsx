import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormContainer = styled(Form)`
  margin: 0 auto;
  padding: 10px 50px;
  background-color: #edc3ca;
  border: 1px solid #48494a;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #120d14;
`;

export const Input = styled(Field)`
  width: 486px;
  height: 24px;
  margin-top: 4px;
  display: block;
  padding: 4px;
  border: 1px solid #48494a;
  font-size: 16px;
`;

export const ErrorValue = styled.div`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  color: red;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #120d14;
  border-radius: 8px;
  background-color: #120d14;
  font-size: 20px;
  color: #edc3ca;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
