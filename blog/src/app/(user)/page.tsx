import Content from "../components/content";
import { draftMode } from "next/headers";
import {groq} from "next-sanity";
import {client} from "../../../lib/sanity.client"
import { Suspense } from "react";

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
        <p>Draft Mode</p>
      </Content>
    );
  }
  const posts =await client.fetch(query);
  // console.log(posts);
  return (
      <Content>
        <p>Not in Draft mode</p>
      </Content>
    )
};