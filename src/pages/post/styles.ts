import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const PostContainer = styled.div`
  margin: 0 auto;
  margin-top: -5.5rem;

  max-width: 54rem;
  width: 100%;
`

export const PostInfoContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;

  background-color: ${props => props.theme.baseProfile};
  border-radius: 10px;
  overflow: hidden;
  
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const PostNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    text-transform: uppercase;
    
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => props.theme.brandBlue};
    
    cursor: pointer;
  }
`

export const PostTitle = styled.h1`
  margin-top: 1.25rem;

  font-size: 1.5rem;
  line-height: 130%;
  color: ${props => props.theme.baseTitle};
`

export const PostInfo = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  span
  {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    color: ${props => props.theme.baseSubtitle};
  }

  svg
  {
    color: ${props => props.theme.baseLabel}
  }
`
export const PostContentContainer = styled.main`
  width: 100%;
  padding: 2.5rem 2rem;

  p
  {
    font-size: 1rem;
    line-height: 160%;
    color: ${props => props.theme.baseText};
    margin-bottom: 1.5rem;
  }

  img 
  {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }

  ul {
    margin-left: 2rem;

    li
    {
      margin-bottom: 1rem;
    }
  }


  a
  {
    color: ${props => props.theme.brandBlue}
  }

  strong
  {
    font-weight: 700;
  }
  
  code
  {
    padding: 0 0.25rem;
    background-color: ${props => props.theme.basePost};
    border-radius: 3px;
    font-size: 0.875rem;
    font-family: "Fira Code", monospace !important;
  }
`

export const CodeBlock = styled(SyntaxHighlighter)`
  margin: 1.5rem 0 !important;
  padding: 1rem 1rem !important;
  background-color: ${props => props.theme.basePost} !important;
  line-height: 160% !important;
  border-radius: 4px;
  font-size: 0.875rem !important;

  code
  {
    font-family: "Fira Code", monospace !important;
  }
`