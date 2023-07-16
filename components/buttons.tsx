'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <>...</>;
      }
    
    if(status === 'authenticated'){
        return(
            <Link href={'/about'}>
                <Image src={session.user?.image ?? '/favicon.ico'} alt='favicon' width={32} height={32}/>
            </Link>
        )
    }
    return <button onClick={()=> {signIn()}}>Sign In</button>
}

export function SignOutButton() {

    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <>...</>;
      }

    if(status === 'authenticated'){
        return <button onClick={() => signOut()}>Sign Out</button>
    }
}