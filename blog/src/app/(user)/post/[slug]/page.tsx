import { groq } from 'next-sanity';
import { ScriptProps as NextScriptProps } from 'next/script';
import React from 'react';
import client from '../../../../../lib/sanity.client';
import urlFor from '../../../../../lib/urlFor';
import Image from 'next/image.js';
import { PortableText } from 'next-sanity';
import { RichTextComponents } from '../../../components/RichTextComponents';
import type{ Post } from '../../../../../typings';
// import { Post } from '../../../../../typings';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = groq`*[_type == 'post']{
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

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

  return (
    <article className="px-10 pb-20">
      {/* Rest of your code */}
    </article>
  );
}

export default Post;