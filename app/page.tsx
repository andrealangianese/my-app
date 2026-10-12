import Hello from "./components/hello"

const home = () => {
  console.log("components");
  return (
    <main>
      <div>
        home
      </div>
      <Hello/>
    </main>
  )
}

export default home
