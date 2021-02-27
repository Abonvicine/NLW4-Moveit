import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { ChallengerBox } from '../components/challengerBox';
import { CompletedChallenges } from '../components/completedChallenges';
import { countdownContext, CountdownProvider } from '../contexts/countdownContext'
import { Countdown } from '../components/countdown';
import { ExpBar } from '../components/expbar';
import { Profile } from '../components/profile';
import styles from '../styles/pages/home.module.css';
import { ChallengesProvider } from '../contexts/challengesContexts';
import { ReactNode } from 'react';

interface HomeProps {
  children: ReactNode;
  level:number;
  currentExperience:number;
  challengesCompleted:number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider level = {props.level}
    currentExperience = {props.currentExperience}
    challengesCompleted = {props.challengesCompleted}>
    <div className = {styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      
      <ExpBar/>
      
      <CountdownProvider >
      
        <section>
          <div>
            <Profile />
            <CompletedChallenges/>
            <Countdown />
          </div>
          <div>
            <ChallengerBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
    </ChallengesProvider>

  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return({
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  })
}