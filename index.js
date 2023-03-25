// code your solution here

function superbowlWin(array) {
   const win = array.find(record => record.result === "W")
   if (win) {
    return win.year
   } else return undefined
}