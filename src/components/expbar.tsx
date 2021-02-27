import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContexts';
import styles from '../styles/components/ExpBar.module.css'

export function ExpBar() {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    const percentToNextLevel = Math.round((currentExperience*100) / experienceToNextLevel)
    console.log(percentToNextLevel);
    return(
        <header className={styles.expBar}>
            <span>0 xp</span>
            <div>
                <div style={{width:`${percentToNextLevel}%`}}/>
                <span className={styles.currentExp} style ={{left:`${percentToNextLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}