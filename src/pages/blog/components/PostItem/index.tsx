import { useNavigate } from "react-router";
import { PostPreviewInterface } from "../../../../contexts/BlogContext";
import { PostContainer, PostDescription, PostHeader } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import removeMarkdown from 'remove-markdown';

interface PostItemProps {
  content: PostPreviewInterface;
}

export function PostItem({ content }: PostItemProps) {
  const navigate = useNavigate();

  const contentBody = removeMarkdown(content.body);  
  const formattedDate = formatDistanceToNow(content.created_at, {
    addSuffix: true,
  });
  
  function handleOpenPost() {
    navigate(`/post/${content.number}`);
  }

  return (
    <PostContainer onClick={handleOpenPost}>
      <PostHeader>
        <p>{content.title}</p>
        <span>{formattedDate}</span>
      </PostHeader >
      <PostDescription>
        {contentBody}
      </PostDescription>
    </PostContainer>
  )
}