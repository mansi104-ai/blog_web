// // middleware.ts
// import { NextResponse, NextRequest } from 'next/server';
// import { draftMode } from 'next/headers';

// export async function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === '/api/draftMode') {
//     draftMode().enable();
//     return NextResponse.redirect(new URL('/', request.url));
//   } else if (request.nextUrl.pathname === '/api/exitDraftMode') {
//     draftMode().disable();
//     return NextResponse.redirect(new URL('/', request.url));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
