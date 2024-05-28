import { groq } from 'next-sanity';
import { Props } from 'next/script'
import React from 'react'

type Props = {
    params: {
        slug:string;
    };
};

async function Post(prop:Props) {
  const query = groq
  return (
    <div>
      Post
    </div>
  )
}

export default Post;
