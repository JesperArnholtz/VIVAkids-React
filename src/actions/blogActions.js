import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_ASSET = 'FETCH_ASSET';
import { API_BASE_URL, API_TOKEN, API_SPACE_ID } from "../constants/contentFull";

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blog`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchAsset(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}