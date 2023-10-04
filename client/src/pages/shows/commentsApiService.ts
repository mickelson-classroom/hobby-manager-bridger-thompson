import axios from "axios"
import { Comment } from "../../models/Comment"

export const commentsService = {
  async updateComments(comments: Comment[]) {
    // const url = "https://bridger-shows.duckdns.org:3003/api/store?key=showComments"
    const url = "https://100.68.122.57:3003/api/store?key=showComments"
    const response = await axios.post(url, comments)
    return response.data
  },
  async getComments(): Promise<Comment[]> {
    // const url = "https://bridger-shows.duckdns.org:3003/api/store?key=showComments"
    const url = "https://100.68.122.57:3003/api/store?key=showComments"
    const response = await axios.get(url)
    return response.data
  },
}