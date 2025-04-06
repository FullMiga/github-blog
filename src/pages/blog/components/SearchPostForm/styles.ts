import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;

  input
  {
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem;
    
    background-color: ${props => props.theme.baseInput};
    border: 1px solid ${props => props.theme.baseBorder};
    border-radius: 6px;
    outline: none;
    color: ${props => props.theme.baseText};

    line-height: 160%;

    &::placeholder
    {
      color: ${props => props.theme.baseLabel};
    }

    &:focus
    {
      outline: 1px solid ${props => props.theme.brandBlue};
    }
  }
`