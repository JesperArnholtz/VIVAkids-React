import axios from 'axios';
export const FETCH_MUSIC = 'FETCH_MUSIC';
import { API_BASE_URL, API_TOKEN, API_SPACE_ID } from "../constants/contentFull";

export function fetchMusic() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=music`);
  return {
    type: FETCH_MUSIC,
    payload: request
  };
}