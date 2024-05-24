import { NextResponse } from 'next/server';
import { draftMode } from 'next/headers';

export async function middleware(request: Request) {
  draftMode().enable();
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/api/draftMode'],
};
