import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./challengesContexts"
interface countdownContextData {
    minutes:number;
    seconds:number;
    hasFinished:boolean;
    isActive:boolean;
    startCountdown:()=>void;
    resetCountdown:()=>void; 
}

interface countdownProviderProps{
    children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const countdownContext = createContext({} as countdownContextData)

export function CountdownProvider({children}:countdownProviderProps) {

    const{startNewChallenge} = useContext(ChallengesContext)

    const [time, setTime] = useState(25 * 60); 
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false);
        setTime(0.1*60);
        setHasFinished(false);
    }

    useEffect(() => {
        if (isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            },1000)
        } else if (isActive && time === 0) {
            console.log('finalizado');
            setIsActive(false);
            setHasFinished(true);
            startNewChallenge();
        }
    }, [isActive,time])

    return(
        <countdownContext.Provider value={{
            minutes,seconds,hasFinished,isActive,startCountdown,resetCountdown}}>
            {children}
        </countdownContext.Provider>
    )
}