export default function savedProducts({
  globalState
}) {
console.log(globalState.length)
console.log(globalState)
  return (
    <>
      {
        globalState.length > 0 &&
        globalState.map(p => <p>{p.description}</p>)
      }
    </>
  )
}