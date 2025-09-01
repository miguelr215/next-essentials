import React from 'react'

interface Params {
    slug: string
}

const BlogPostPage = ({ params }: { params: Params }) => {
  return (
    <main>
        <h1>Blog Post</h1>
        <p>{ params.slug }</p>
    </main>
  )
}

export default BlogPostPage