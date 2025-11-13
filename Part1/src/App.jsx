import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  let randomAnecdote = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  let voting = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  let mostVoted = Math.max(...votes)
  let famousAnecdote = anecdotes[votes.indexOf(mostVoted)]

  return (
    <div>
      <h1>Anecdote selected</h1>
      {anecdotes[selected]}
      <br />

      <p>has {votes[selected]} votes</p>
      <br />

      <button onClick={voting}>vote</button>
      <button onClick={randomAnecdote}>next anecdote</button>
      <br />

      <h1>Anecdote with most votes</h1>
      {famousAnecdote}
      <p>has {mostVoted} votes</p>
    </div>
  )
}

// Buttons and statistics exercise

// const Statistics = (props) => {
//   const Button = (props) => {
//     return (
//       <button onClick={props.onClick}>
//         {props.text}
//       </button>
//     )
//   }
//   const StatisticLine = (props) => {
//     return (
//         <tr>
//           <td>{props.text}</td> 
//           <td>{props.value}</td>
//         </tr>
//     )
//   }

//   if (props.condition === 0) {
//     return (
//       <div>
//         <h1>give feedback</h1>
//         <Button onClick={props.increase1} text="good" />
//         <Button onClick={props.increase2} text="neutral" />
//         <Button onClick={props.increase3} text="bad" />

//         <h1>statistics</h1>
//         <p>No feedback given</p>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button onClick={props.increase1} text="good" />
//       <Button onClick={props.increase2} text="neutral" />
//       <Button onClick={props.increase3} text="bad" />

//       <h1>statistics</h1>
//       <table>
//         <tbody>
//           <StatisticLine text="good" value={props.num1} />
//           <StatisticLine text="neutral" value={props.num2} />
//           <StatisticLine text="bad" value={props.num3} />
//           <StatisticLine text="all" value={props.num4} />
//           <StatisticLine text="average" value={props.num5} />
//           <StatisticLine text="positive" value={props.num6} />
//         </tbody>
//       </table>
//     </div>    
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [all, setAll] = useState(0)

//   const goodNumber = () => {
//     setGood(good + 1)
//     setAll(all + 1)
//   }

//   const neutralNumber = () => {
//     setNeutral(neutral + 1)
//     setAll(all + 1)
//   }

//   const badNumber = () => {
//     setBad(bad + 1)
//     setAll(all + 1)
//   }

//   let average = ((good*1) + (neutral*0) + (bad*(-1))) / all
//   let positive = (good / all) + " %"

//   return (
//     <div>
//       <Statistics 
//         increase1 = {goodNumber}
//         increase2 = {neutralNumber}
//         increase3 = {badNumber}

//         condition = {all}
//         num1 = {good}
//         num2 = {neutral}
//         num3 = {bad}
//         num4 = {all}
//         num5 = {average}
//         num6 = {positive}
//       />
//     </div>
//   )
// }

export default App