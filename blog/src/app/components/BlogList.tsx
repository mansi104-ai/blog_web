import Image from 'next/image.js';
import urlFor from '../../../lib/urlFor';
import type { Post } from '../../../typings.d.ts';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import ClientSide from './ClientSide';

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className='border-[#F7AB0A] mb-10' />
      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16'>
        {posts.map((post, index) => (
          <ClientSide key={index} route={`/post/${post.slug.current}`}>
            <div className='flex flex-col group cursor-pointer'>
              <div className='relative w-full h-80 drop-shadow-xl rounded-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                {post.mainImage && (
                  <Image
                    className="object-cover object-left lg:object-center"
                    src={urlFor(post.mainImage).url()}
                    alt={post.author?.name || 'author'}
                    fill
                  />
                )}
                <div className='absolute bottom-4 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                  <div>
                    <p className='font-bold'>{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                    {post.categories.map((category, index) => (
                      <div key={index} className='bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className='underline text-lg font-bold'>{post.title}</p>
                <p className='text-gray-500'>{post.description}</p>
              </div>
              <p className='ml-5 font-bold flex items-center group-hover:underline'>
                Read Post
                <ArrowUpRightIcon className='ml-2 h-4 w-4' />
              </p>
            </div>
          </ClientSide>
        ))}
      </div>
    </div>
  );
}

export default BlogList;