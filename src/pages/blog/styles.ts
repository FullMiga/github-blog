import styled from "styled-components";

export const BlogContainer = styled.div`
  margin: 0 auto;
  margin-top: -5.5rem;

  max-width: 54rem;
  width: 100%;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 2rem;
  gap: 2rem;

  background-color: ${props => props.theme.baseProfile};
  border-radius: 10px;
  overflow: hidden;
  
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;
  object-fit: cover;
  overflow: hidden;
`

export const ProfileInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1
  {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${props => props.theme.baseTitle};
  }

  a
  {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 160%;
    color: ${props => props.theme.brandBlue};
  }
`

export const ProfileBio = styled.p`
  margin-top: 0.5rem;
  max-width: 38.25rem;
  width: 100%;
  
  color: ${props => props.theme.baseText};
  line-height: 160%;
`

export const ProfileInfo = styled.div`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  span
  {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    color: ${props => props.theme.baseSubtitle};

    svg
    {
      color: ${props => props.theme.baseLabel};
    }
  }
`

export const PostsInfor = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 
  {
    font-size: 1.125rem;
    line-height: 160%;
    color: ${props => props.theme.baseSubtitle};
  }

  span
  {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${props => props.theme.baseSpan};
  }
`

export const PostsContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const ErrorMessage = styled.div`
  margin-top: 3rem;

  text-align: center;
  font-weight: 700;
  font-size: 1.125rem;
`