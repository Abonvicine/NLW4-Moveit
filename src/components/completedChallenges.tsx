import { useContext } from "react"
import { ChallengesContext } from "../contexts/challengesContexts"
import styles from "../styles/components/completedChallenges.module.css"

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)
    return(
         <div className={styles.completedChallenges}>
             <span>Desafios Completos</span>
             <span>{challengesCompleted} desafios</span>
         </div>
    )
}