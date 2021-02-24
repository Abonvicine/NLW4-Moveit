import styles from '../styles/components/ExpBar.module.css'

export function ExpBar() {
    return(
        <header className={styles.expBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: "60%"}}/>
                <span className={styles.currentExp} style ={{ left: "50%"}}>300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}