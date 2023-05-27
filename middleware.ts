import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  // Clone the request headers and set a new header (can add in cors stuff for casino games here)
  if (request.nextUrl.pathname.startsWith('/npapi')) {
        var temp = (request.url).replace("localhost:10300", "google.com");
        console.log(temp);
        return NextResponse.redirect(new URL('/api/c?url='+temp, request.url))
  }

  if (request.nextUrl.pathname.startsWith('/game_img')) {
    var temp = (request.nextUrl.pathname).replace("/game_img", "");
    console.log(temp);
    return NextResponse.redirect(new URL('/api/c?url='+temp, request.url))
  }
}