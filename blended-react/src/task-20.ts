import axios from "axios";

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]> ("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

async function logThreePosts() {
const posts = await fetchPosts();
posts.slice(0,3).forEach((post, index) => console.log('$ {index +1}. "${post.title}": - ${post.body}'));
}
logThreePosts();