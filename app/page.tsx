import { getServerSession } from 'next-auth'
import styles from './page.module.css'
import { redirect } from 'next/navigation'

export default async function Home() {

  const session = await getServerSession();

  if(!session){
    console.log('not logged in!')
    redirect('/api/auth/signin');
  }

  return (
    <main>
      <h1>Helllo</h1>
    </main> 
  )
}
