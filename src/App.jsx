import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

//css
import "./styles/components/app.sass";

function App() {
  return (

    <div id="portfolio" >
      <h1>Evangelista Franco</h1>
      <Sidebar/>
      <MainContent/>
    </div>

  )
}

export default App
