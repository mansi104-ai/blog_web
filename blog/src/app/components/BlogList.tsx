import React from 'react'
import type { Post } from '../../../typings.d.ts';
type Props = {
  posts : Post[];

};

async function BlogList({posts}:Props) {
  return (
    <div>
      Bloglist
    </div>
  )
}

export default BlogList;
