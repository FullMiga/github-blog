import { NavLink } from "react-router";
import { CodeBlock, PostContainer, PostContentContainer, PostInfo, PostInfoContainer, PostNavigation, PostTitle } from "./styles";
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import { formatDistanceToNow } from 'date-fns';
import ReactMarkdown from "react-markdown";

export function Post() {
  const { post } = useContext(BlogContext);
  
  let formattedDate;

  if (post?.created_at) {
    formattedDate = formatDistanceToNow(post.created_at, {
      addSuffix: true,
    })
  }

  const githubBlogStyle = {
    ...nightOwl,
    keyword: {
      color: "#80ABD6",
    },
    boolean: {
      color: "#6AD445",
    },
    number: {
      color: "#6AD445"
    },
    string: {
      color: "#6AD445"
    },
    operator: {
      color: "#D5DCE3"
    },
    comment: {
      color: "#4F6173"
    },
    punctuation: {
      color: "#D5DCE3"
    }
  }
  
  return(
    <PostContainer>
      <PostInfoContainer>
        <PostNavigation>
          <NavLink to={"/"}>
            <FontAwesomeIcon icon={faChevronLeft} />
            BACK
          </NavLink>

          <a href={post?.html_url} target="_blank">
            VIEW ON GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </a>
        </PostNavigation>
        <PostTitle>{post?.title}</PostTitle>
        <PostInfo>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post?.user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formattedDate}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />    
            {post?.comments} comments
          </span>
        </PostInfo>
      </PostInfoContainer>
      <PostContentContainer>
        <ReactMarkdown
          components={{
            code({ className, children }) {
              const match = /language-(\w+)/.exec(className || '');
              
              if (match) {
                return (
                  <CodeBlock style={githubBlogStyle} language={match[1]} PreTag="div">
                    {children}
                  </CodeBlock>
                );
              }
              
              return (
                <code>
                  {children}
                </code>
              );
            }
          }}
        >
          {post?.body}
        </ReactMarkdown>
      </PostContentContainer>
    </PostContainer>
  )
}