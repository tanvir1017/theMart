import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getSinglePost, updatePost } from "../../utils/crudOperation";

export const loader = async ({ params }) => {
    const post = await getSinglePost(params.update)
    return json(post)
};

export const action = async ({ params, request }) => {
    const values = await request.formData()
    const { blogImg, blogTitle, blogDescription } = Object.fromEntries(values)
    const res = await updatePost(params.update, blogImg, blogTitle, blogDescription)
    const redirects = redirect(`/blogs/${params.update}`)
    return (
        json(res),
        redirects
    )
}

const Update = () => {
    const {post} = useLoaderData()
return (
        <div className="container">
            <h2 style={{textAlign:"center"}}>Welcome to update blog page</h2>
            <Form method="post">
                <div className="create-blog-fields">
                <div>
                    <div className="blog-title-input-div">
                    <label htmlFor="blogImg">Paste your blog img link *</label>
                <input type="text" name="blogImg" defaultValue={post.img}   required />
                </div>
                    <div className="blog-title-input-div">
                    <label htmlFor="blogTitle">Type your blog title *</label>
                <input type="text" name="blogTitle" defaultValue={post.title}  required />
                </div>
                <div className="blog-title-textArea-div">
                    <label htmlFor="blogDescription">Type your blog description *</label>
                <textarea rows='10' defaultValue={post.description} name="blogDescription" required  />
                    </div>
                </div>
            </div>
            <div className="create-blog-fields">
                <button type="submit" className="btn blogAdd--btn">Update Blog</button>
                </div>
        </Form>
        </div>
    );
};

export default Update;