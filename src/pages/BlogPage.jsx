import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";
const BlogPage = () => {

  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h1>Our news</h1>
      <Link to="/posts/new">Add new post</Link>
      {posts &&
      posts.map(post => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))
      }
    </div>
  )
}

export default BlogPage