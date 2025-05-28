import axios from "axios";
import { Post } from "../app/types";
import { API_ENDPOINT } from "@/lib/constants";


const API = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 5000,
});

export async function fetchPosts(): Promise<Post[]> {
  const { data } = await API.get<Post[]>("/posts");
  return data;
}

export async function fetchPost(id: string): Promise<Post> {
  const { data } = await API.get<Post>(`/posts/${id}`);
  return data;
}

export async function fetchComments(postId: number): Promise<Comment[]> {
  const { data } = await API.get<Comment[]>(`/comments`, );
  return data.filter((item) => item.postId === postId);
}