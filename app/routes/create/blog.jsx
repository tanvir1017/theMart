import { redirect } from "@remix-run/node";
import { Form, useTransition } from "@remix-run/react";
import { newBlog } from "../../utils/crudOperation";

export const action = async ({ request }) => {
    const formData = await request.formData()
    try {
        const values = Object.fromEntries(formData)
        const { blogImg, blogTitle, blogDescription } = values
        const response = await newBlog(blogImg, blogTitle, blogDescription)
        console.log("response",response)
    }
    catch (err) {
        console.log(err);
    }
    return redirect("/blog")
}


const Blog = () => {
    const transition = useTransition()
    return (
        <div className="container">
            <h2>Welcome to create blog page</h2>
            <Form method="post">
                <div className="create-blog-fields">
                <div>
                    <div className="blog-title-input-div">
                    <label htmlFor="blogImg">Paste your blog img link *</label>
                <input type="text" name="blogImg"  required />
                </div>
                    <div className="blog-title-input-div">
                    <label htmlFor="blogTitle">Type your blog title *</label>
                <input type="text" name="blogTitle"  required />
                </div>
                <div className="blog-title-textArea-div">
                    <label htmlFor="blogDescription">Type your blog description *</label>
                <textarea rows='10'  name="blogDescription" required  />
                    </div>
                </div>
            </div>
            <div className="create-blog-fields">
                    <button type="submit" className="btn blogAdd--btn">
                        {transition.state !== "idle" ?<p><img src="/images/loader.gif" width='20px' alt="" /> {transition.state}</p> : "Post Blog"}</button>
                </div>
        </Form>
        </div>
    );
};

export default Blog;