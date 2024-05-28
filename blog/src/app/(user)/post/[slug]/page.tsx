import { groq } from 'next-sanity';
import { Props } from 'next/script';
import React from 'react';
import client from '../../../../../lib/sanity.client';
import urlFor from '../../../../../lib/urlFor';
import Image from 'next/image.js';

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == 'post' && slug.current == "${slug}"][0]
    {
      ...,
      author ->,
      categories[] ->
    }
  `;

  const post: any = await client.fetch(query, { slug });
//   console.log(post);
  return <article className='px-10 pb-20'>
    <section className='space-y-2 border border-[#F7AB0A] text-white'>
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
            <div className = "absolute top-0 w-full h-full opacity-10 blur-sm p-10" >
                <Image
                  className = "object-cover object-center mx-auto"
                  src= {urlFor(post.mainImage).url()}
                  alt = {post.author.name}
                  fill
                />
            </div>

            <section className='p-5 bg-[#F7AB0A] w-full'>
                <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                    <div>
                        <h1 className = "text-4xl font-extrabold">{post.title}
                            
                        </h1>

                        <p>
                        {new Date(post._createdAt).toLocaleDateString(
                    "en-US",{
                      day : "numeric",
                      month : "long",
                      year : "numeric",
                    }
                  )
                  
                  }
                        </p>
                    </div>
                </div>

            </section>

        </div>

    </section>
  </article>
}

export default Post;
