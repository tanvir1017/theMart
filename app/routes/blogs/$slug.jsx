import { json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData, useTransition } from "@remix-run/react";
import { deletePost, getSinglePost } from "../../utils/crudOperation";

export const loader = async ({ params }) => {
  const slug = params.slug;
  const post = await getSinglePost(slug);
  return json(post);
};

export const action = async ({ params }) => {
  const deletedPost = await deletePost(params.slug)
console.log(deletedPost)
  return redirect('/blog')

}
const DetailsPage = () => {
  const transition = useTransition()
  const { post } = useLoaderData()
  return (
    <div className="container" >
      <div className="blog-title">
        <h2 >{post.title}</h2>
        <div>
          <Form method="post" style={{display:"inline-block"}}>
            <input type="hidden" name="_method" value="delete" />
            <button className="btn danger--btn">
              {transition.state !== 'idle' ? <p> <img width="20px" src="/images/loader.gif" alt="" /> {transition.state}</p> : "Delete"}
            </button>
        </Form>
          <button className="btn primary--btn">
            <Link to={`/updates/${post.slug}`}>Update</Link>
        </button>
        </div>
      </div>
      <span>Posted at -  <span className="created-date">{new Date(post.createdAt).toDateString()}</span></span>
      <div className="blog-author">
        <img src="https://pinotmasters.sk/wp-content/uploads/2015/04/speaker-3-v2.jpg" alt="blog-creator-img" />
        <span style={{fontWeight:600}}>Jhone smith <br /> <small style={{color:"var(--alternative-color)", fontWeight:"normal"}}>@jhone</small> </span>
      </div>
      <div className="blog-body">
        <img src={post.img} alt="blog-related-img" />
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
