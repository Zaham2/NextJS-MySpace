// This is how we expose APIs
// Just export a function with the name of the HTTP method you want to use

import { NextResponse } from "next/server";

// Dummy data
const posts = [
    {
      title: 'Lorem Ipsum',
      slug: 'lorem-ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
        title: 'post2 title',
        slug: 'post2',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      },
  ];

export async function GET() {
    return NextResponse.json(posts);
}
