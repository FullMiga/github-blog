import { PostItem } from "./components/PostItem";
import { SearchPostForm } from "./components/SearchPostForm";
import { BlogContainer, ErrorMessage, PostsContainer, PostsInfor, Profile, ProfileBio, ProfileHeader, ProfileImage, ProfileInfo, ProfileInfoContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";

import { BlogContext } from "../../contexts/BlogContext";

export function Blog(){
  const { blogProfileInfo, postList } = useContext(BlogContext)

  return (
    <BlogContainer>
      <Profile>
        <ProfileImage src={blogProfileInfo?.avatar_url}/>
        <ProfileInfoContainer>
          <ProfileHeader>
            <h1>{blogProfileInfo?.name}</h1>
            <a href={blogProfileInfo?.html_url} target="_blank">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
            </a>
          </ProfileHeader>
          <ProfileBio>
            {blogProfileInfo?.bio}
          </ProfileBio>
          <ProfileInfo>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {blogProfileInfo?.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {blogProfileInfo?.company ? blogProfileInfo?.company : "unknown"}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {blogProfileInfo?.followers} followers
            </span>
          </ProfileInfo>
        </ProfileInfoContainer>
      </Profile>
      <PostsInfor>
        <h2>Publications</h2>
        <span>{postList?.total_count} publications</span>
      </PostsInfor>

      <SearchPostForm />

      {!postList && (
        <ErrorMessage>Publication not found</ErrorMessage>
      )}
      
      <PostsContainer>
        {postList ? postList.items.map(item => 
          <PostItem key={item.id} content={item}/>
        ) : (
          null
        )}
      </PostsContainer>

    </BlogContainer>
  )
}