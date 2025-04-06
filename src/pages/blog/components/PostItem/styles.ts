import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 2rem;

  background-color: ${props => props.theme.basePost};
  border: 2px solid transparent;
  border-radius: 10px;
  text-align: start;

  overflow-x: hidden;
  transition: border 0.2s linear;
  cursor: pointer;
  
  &:hover
  {
    border: 2px solid ${props => props.theme.baseLabel};
  }
`

export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  p
  {
    flex: 1;
    font-size: 1.25rem;
    line-height: 160%;
    color: ${props => props.theme.baseTitle};

    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  span
  {
    width: 7.25rem;
    text-align: right;
    font-size: 0.875rem;
    line-height: 160%;
    color: ${props => props.theme.baseSpan};
  }
`

export const PostDescription = styled.p`
  width: 100%;

  font-size: 1rem;
  line-height: 160%;
  color: ${props => props.theme.baseText};

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`