import { GlobalStyle } from './AppStyles'
import * as C from './AppStyles'
import Sidebar from './components/Sidebar'
import Search from './components/Search'

function App() {
  
  return (
    <>
      <GlobalStyle/>
      <C.Container>
        <div className="push"></div>
        <Sidebar />
        <Search />
      </C.Container>
    </>
  )
}

export default App
