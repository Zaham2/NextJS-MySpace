import { Metadata } from "next";

// Next should infer by default that this is a static component since there's
// no data fetching here... but to be extra safe. we can export the dynamic
// prop and set it to force-static
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About NextSpace',
};

export default async function About(){
    return(
        <main>
            <h1>About</h1>
            <p>This page is used as an example for rendering static pages</p>
        </main>
    )
}