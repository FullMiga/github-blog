import { HeaderContainer } from "./styles";
import githubBlogLogo from "../../assets/githubBlog_Logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <img src={githubBlogLogo} alt="" />
    </HeaderContainer>
  )
}