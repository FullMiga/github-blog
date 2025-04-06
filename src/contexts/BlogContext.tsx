/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface BlogContextProviderProps {
  children: ReactNode
}

interface BlogProfileInfo {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  company: string;
  bio: string;
  html_url: string;
}

export interface PostPreviewInterface {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: Date;
}

interface PostListInterface {
  items: PostPreviewInterface[];
  total_count: number;
}

interface CompletePostInterace {
  id: number
  html_url: string,
  title: string,
  body: string;
  comments: number;
  created_at: Date;
  user: {
    login: string;
  }
}

interface BlogContextType {
  blogProfileInfo: BlogProfileInfo | undefined;
  postList: PostListInterface | undefined;
  post: CompletePostInterace | undefined;

  fechPosts: (query?: string) => void;
  fetchPostContent: (number: number, id: number) => void;
}

export const BlogContext = createContext({} as BlogContextType);

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [postList, setPostList] = useState<PostListInterface>();
  const [blogProfileInfo, setBlogProfileInfo] = useState<BlogProfileInfo>();
  const [post, setPost] = useState<CompletePostInterace>();

  async function fechProfileInfo() {
    const response = await api.get('/users/tailwindlabs');

    setBlogProfileInfo(response.data)
  }

  async function fechPosts(query?: string) {
    const postSearch = `?q=${query}%20repo:tailwindlabs/tailwindcss`

    if(query) {
      const response = await api.get(`search/issues${postSearch}`)
      return setPostList(response.data)
    }

    const response = await api.get(`search/issues?q=%20repo:tailwindlabs/tailwindcss`)
    setPostList(response.data)
  }

  async function fetchPostContent(number: number, id: number) {
    if (post?.id === id) {
      return post;
    }   

    const response = await api.get(`repos/tailwindlabs/tailwindcss/issues/${number}`);
    const stateJSON = JSON.stringify(response.data);

    setPost(response.data);
    localStorage.setItem('@github-blog:post-state-1.0.0', stateJSON);
  }

  useEffect(() => {
    fechProfileInfo()
    fechPosts()

    const storedPostContent= localStorage.getItem('@github-blog:post-state-1.0.0');

    if(storedPostContent) {
      setPost(JSON.parse(storedPostContent))
    }

  }, [])
  return (
    <BlogContext.Provider value={{
      blogProfileInfo,
      postList,
      fechPosts,
      post,
      fetchPostContent,
    }}>
      {children}
    </BlogContext.Provider>
  )
  
}