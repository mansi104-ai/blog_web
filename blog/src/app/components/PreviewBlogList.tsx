// PreviewBlogList.tsx
import React from 'react';
import PreviewProvider from "../../../lib/PreviewProvider";
import BlogList from "./BlogList";
import { Post } from '../../../typings.js';

type Props = {
    query: string;
};

export async function PreviewBlogList({ query }: Props) {
    const posts: Post[] = await PreviewProvider(query ); // Pass the query directly
    return <BlogList posts={posts} />
}

export default PreviewBlogList;