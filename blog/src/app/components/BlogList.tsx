// import React from 'react'
import type { Post } from '../../../typings.d.ts';
type Props = {
  posts : Post[];

};

function BlogList({posts}:Props) {
  console.log(posts.length);
  return (
    <div>
      Bloglist
    </div>
  )
}

export default BlogList;