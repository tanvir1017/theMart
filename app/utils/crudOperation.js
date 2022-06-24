import slugify from "slugify";
import { db } from "./db.server";

export const newBlog = async (img, title, description) => {
  const slug = slugify(title);
  const blog = await db.PostedBlog.create({
    data: {
      slug,
      img,
      title,
      description,
    },
  });

  if (blog) {
    return {
      status: 201,
      message: "Post created successfully",
    };
  } else {
    return {
      status: 500,
      message: "Something went wrong, please try again",
    };
  }
};

// find all blogs

export const getPosts = async () => {
  const posts = await db.PostedBlog.findMany();
  return { status: 200, posts };
};

// Find single blog post

export const getSinglePost = async (slug) => {
  const post = await db.PostedBlog.findUnique({
    where: {
      slug,
    },
  });

  return {
    status: 201,
    post,
  };
};

// Delete blog post

export const deletePost = async (slug) => {
  const deletedPost = await db.PostedBlog.delete({
    where: {
      slug,
    },
  });
  console.log(deletedPost);
  return {
    status: 201,
    message: "Blog deleted successfully",
  };
};
// Update blog post

export const updatePost = async (slug, img, title, description) => {
  const res = await db.PostedBlog.update({
    where: {
      slug,
    },
    data: {
      img,
      title,
      description,
    },
  });
  console.log(res);
  return {
    status: 201,
    message: "Blog deleted successfully",
  };
};
