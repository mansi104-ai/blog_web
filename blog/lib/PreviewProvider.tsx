"use client";
import { LiveQueryProvider } from '@sanity/preview-kit';
import { client } from './sanity.client';

export function PreviewProvider({
  children,
}: {
  // token: string;
  children: React.ReactNode;
}) {
  // if (!token) throw new TypeError('Missing token');
  return (
    <LiveQueryProvider client={client} >
      {children}
    </LiveQueryProvider>
  );
}

export default PreviewProvider;