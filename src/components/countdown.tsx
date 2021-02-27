import { useState, useEffect, useContext } from "react"
import { ChallengesContext } from "../contexts/challengesContexts";
import { countdownContext } from "../contexts/countdownContext"
import styles from "../styles/components/countdown.module.css"


export function Countdown(){

    const {minutes,seconds,hasFinished,isActive,resetCountdown,startCountdown} = useContext(countdownContext)

    const [minutesLeft, minutesRight] = String(minutes).padStart(2,"0").split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2,"0").split('')

    return(
        <div>
          <div className={styles.countdownContainer}>
            <div>
                <span>{minutesLeft}</span>
                <span>{minutesRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondsLeft}</span>
                <span>{secondsRight}</span>
            </div>
        </div>
        { hasFinished ? (
             <button
             disabled 
             type="button" 
             onClick = {resetCountdown} 
             className={styles.countdownButton}
             >
                 Ciclo encerrado 
             </button>
        ):(
        <>
            { isActive ? (
            <button 
            type="button" 
            onClick = {resetCountdown} 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
                Abandonar o ciclo   
            </button>
        ):(
            <button 
            type="button" 
            onClick = {startCountdown} 
            className={styles.countdownButton}
            >
                Iniciar um ciclo    
            </button>
        )}
      
        </>
        )}
        </div>
      
    )
}