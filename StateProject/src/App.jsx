
import './App.css'
import Counter from './components/Counter'
import Studen from './components/Studen'
import Washoom from './components/Washoom'
function App() {


  return (
   <>
 <div className='h-screen flex flex-col gap-10 items-center  overflow-auto p-10'>
    <Counter/>
   <Studen/>
   <Washoom/>
 </div>
   </>
  )
}

export default App
