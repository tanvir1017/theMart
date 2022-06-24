import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "../utils/crudOperation";

export const loader = async () => {
  const posts = await getPosts()
  return json(posts)
};

const Blog = () => {
  const { posts } = useLoaderData()
return (
    <div className="container">
      <div className="blog-page-header">
        <h2>Welcome to blog page</h2>
        <button className="btn primary--btn">
          <Link to="/create/blog">Create Blog</Link>
        </button>
      </div>
    <div className="all-blogs">
      {posts.map(post => (
        <div className="card-wrapper" key={post.slug}>
          <div className="card-img">
            <img src={post.img} alt="blog-related-img" />
          </div>
          <div className="card-body">
            <h2><Link to={`/blogs/${post.slug}`}>{post.title}...</Link></h2>
          </div>
  </div>
))}
    </div>
    </div>
  );
};

export default Blog;