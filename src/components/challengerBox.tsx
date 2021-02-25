import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContexts';
import styles from '../styles/components/challengerBox.module.css';

export function ChallengerBox(){

    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
    
    
    const hasActiveChallenge = true;

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
                        onClick={resetChallenge}
                    >
                        Falhei
                    </button>
                    <button 
                        type="button"
                        className={styles.challengeCompletedButton}
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