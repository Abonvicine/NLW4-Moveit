import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/challengesContexts';
import styles from '../styles/components/profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);
    return(
        <div className = {styles.profileContainer}>
            <img src="https://github.com/Abonvicine.png" alt="Angelo"/>
            <div>
                <strong>Angelo Bonvicine</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level { level }
                </p>
            </div>
        </div>
    )
}