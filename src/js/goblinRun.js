import { goblinInit } from "./goblinInit"
export function goblinRun (timeInSecs) {
    let timeInMilisecs = timeInSecs*1000;
    setInterval(goblinInit, timeInMilisecs)
}