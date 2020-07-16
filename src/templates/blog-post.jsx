import React, { Fragment } from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'

import 'react-quill/dist/quill.snow.css'

const BlogPost = () => {
  return (
    <Fragment>
      <Layout>
        <SEO title="Content Type / Blog Post" />
        <div className="post-container">
          <PostActions />
          <form>
            <PostTitle />
            <PostDescription />
            <PostCoverImage />
            <PostEditor />
          </form>
        </div>
      </Layout>
    </Fragment>
  )
}

const PostActions = () => (
  <div className="d-flex justify-content-end mb-3">
    <button className="btn btn-outline-warning">Save Draft</button>
    <button className="btn btn-warning ml-2">Publish</button>
  </div>
)

const PostTitle = () => (
  <div className="mb-3">
    <label
      className="form-label display-6"
      htmlFor="post-title"
      id="post-title-label">
      Title
    </label>
    <input
      className="form-control"
      type="text"
      name="post-title"
      id="post-title-input"
    />
  </div>
)

const PostDescription = () => (
  <div className="mb-3">
    <label
      className="form-label display-6"
      htmlFor="post-description"
      id="post-description-label">
      Description
    </label>
    <textarea className="form-control" />
  </div>
)

const PostCoverImage = () => (
  <div className="mb-3">
    <label
      className="form-label display-6"
      htmlFor="post-cover-image"
      id="post-cover-image-label">
      Cover Image
    </label>
    <div className="form-file">
      <input type="file" className="form-file-input" id="customFileLong" />
      <label className="form-file-label" htmlFor="customFileLong">
        <span className="form-file-text text-muted">
          Select an cover image for your post.
        </span>
        <span className="form-file-button">Browse</span>
      </label>
    </div>
  </div>
)

// https://github.com/zenoamaro/react-quill/issues/122
const PostEditor = () => {
  return (
    <Fragment>
      <div className="mb-3">
        <label
          className="form-label display-6"
          htmlFor="post-content"
          id="post-content-label">
          Content
        </label>
        {/* <ReactQuill theme="snow" /> */}
        <textarea className="form-control" />
      </div>
    </Fragment>
  )
}

export default BlogPost
