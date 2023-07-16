"use client";

import { useSession } from "next-auth/react";

export default function AuthCheck({ children }: {children: React.ReactNode}){
    const {data: session, status} = useSession();

    console.log('here');
    console.log(session);
    console.log(status);

    if(status === 'authenticated')
        return <>{children}</>
    
    return <></>
}