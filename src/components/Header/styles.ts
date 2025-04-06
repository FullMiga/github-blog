import styled from "styled-components";

import githubBlogCover from "../../assets/githubBlog_Cover.png"

export const HeaderContainer = styled.header`
  height: 18.5rem;

  display: flex;
  justify-content: center;
  
  background-image: url(${githubBlogCover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  img
  {
    margin-top: 4rem;
    width: 148px;
    height: 98px;
  }
`