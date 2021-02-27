import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContexts';
import { countdownContext } from '../contexts/countdownContext';
import styles from '../styles/components/challengerBox.module.css';

export function ChallengerBox(){

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(countdownContext)
    
    function handleChallengeComplete(){
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed(){
        resetChallenge()
        resetCountdown()
        
    }

    return(
        <div className={styles.challengerBoxContainter}>
          { activeChallenge ? (
            <div className={styles.challengeActive}>
                <header>Ganhe {activeChallenge.amount} XP</header>
                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}  alt="type"/>
                    <strong>Novo Desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>
                <footer>
                    <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}
                    >
                        Falhei
                    </button>
                    <button 
                        type="button"
                        className={styles.challengeCompletedButton}
                        onClick={handleChallengeComplete}
                    >
                        Completei
                    </button>
                </footer>
            </div>
          ):(

            <div className={styles.challengeNotActive}>
            <strong>Inicie um ciclo para receber desafios para serem completados</strong>
            <p>
                <img src="icons/level-up.svg" alt="Level Up"/>
                Avance de nível completando desafios.
            </p>
            </div>
            
          )}
        </div>
    )
}