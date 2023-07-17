import { prisma } from "@/lib/prisma";
import { Metadata } from 'next';

interface Props {
    params: {
        id: string;
    }
}

// We can't hardcode static metadata here, so we use the generateMetadata function
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({where: {id: params.id }})
    return {title: `User profile of ${user?.name}`}
}

export default async function UserProfile({ params } : Props){

    const user = await prisma.user.findUnique({ where: { id: params.id }})
    const {name, bio, image} = user ?? {}
    return(
        <div>
            <h1>{name}</h1>

            <img
                width={300}
                src={image ?? ''}
                alt={`${name}'s profile`}
            />

            <h3>Bio</h3>
            <p>{bio}</p>
        </div>
    )
}
