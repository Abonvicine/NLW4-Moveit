import styles from "../styles/components/completedChallenges.module.css"

export function CompletedChallenges() {
    return(
         <div className={styles.completedChallenges}>
             <span>Desafios Completos</span>
             <span>5 desafios</span>
         </div>
    )
}