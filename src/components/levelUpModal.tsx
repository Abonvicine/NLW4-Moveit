import { useContext } from 'react'
import { ChallengesContext } from '../contexts/challengesContexts'
import styles from '../styles/components/levelUpModal.module.css'

export function LevelUpModal() {
    
    const {level, closeLevelUpModal} = useContext(ChallengesContext)

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parábens</strong>
                <p>Você alcançou um novo nível.</p>

                <button type='button' onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="fechar"/>
                </button>
            </div>
        </div>
    )
}