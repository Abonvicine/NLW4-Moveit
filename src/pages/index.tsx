import Head from 'next/head'
import { CompletedChallenges } from '../components/completedChallenges';
import { Countdown } from '../components/countdown';
import { ExpBar } from '../components/expbar';
import { Profile } from '../components/profile';
import styles from '../styles/pages/home.module.css';

export default function Home() {
  return (
    
    <div className = {styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      
      <ExpBar/>
      
      <section>
        <div>
          <Profile />
          <CompletedChallenges/>
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>

  )
}
