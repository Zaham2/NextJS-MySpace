import Link from 'next/link';

interface Props {
    id: string,
    name: string | null,
    age: string | null | number;
    image: string | null
}

export default function UserCard({ id, name, age, image }: Props){
    return(
        <div className="styles.card">
            <img
                src={image ?? '../app/favicon.ico'}
                alt={`${name}'s profile`}
                className="styles.cardImage"
            />
            <div className="styles.cardContent">
                <h3>
                    <Link href={`/users/${id}`}>{name}</Link>
                </h3>
                <p>Age: {age}</p>
            </div>
        </div>
    )
}
