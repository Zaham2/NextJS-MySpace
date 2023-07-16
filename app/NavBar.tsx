import Image from "next/image";
import Link from "next/link";
import styles from './NavBar.module.css'


export default function NavBar() {
    return(
        <nav>
            <Link href={'/'}>
                <Image 
                    src="/favicon.ico"
                    width={30}
                    height={30}
                    alt="Some Logo"
                />
            </Link>
            <ul>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/blog'}>Blog</Link>
                </li>
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
            </ul>
        </nav>
    )
}
