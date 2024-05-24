// app/page.tsx
import Content from "../components/content";
import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import { Suspense } from "react";
import {PreviewBlogList} from "../components/PreviewBlogList";

const query = groq`
  *[_type =='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Home() {
  const { isEnabled } = draftMode();

  if (isEnabled) {
    return (
      <Content>
        <Suspense fallback={<p>Loading draft preview...</p>}>
          <PreviewBlogList query = {query} />
          <DraftPreviewContent />
        </Suspense>
      </Content>
    );
  }

  const posts = await client.fetch(query);

  return (
    <Content>
      <BlogList posts={posts} />
    </Content>
  );
}

async function DraftPreviewContent() {
  const { isEnabled } = draftMode();

  if (!isEnabled) {
    return <p>Not in draft mode</p>;
  }

  const posts = await client.fetch(query);

  return (
    <div>
      <h2>Draft Preview</h2>
      <BlogList posts={posts} />
    </div>
  );
}

function BlogList({ posts }: { posts: any[] }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.author.name}</p>
          <p>{post.categories.map((category: any) => category.title).join(", ")}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}