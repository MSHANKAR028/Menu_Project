
import Header from './components/Header'; 
import Entry from './components/Entry';
import data from './assets/data/data.js';


export default function App() {
  const entries = data.map((entry) => {
    return (
      <Entry
        key = {entry.id}
        {...entry}
      />
    )
  })

  return (
    <div>
      <Header />
      {entries}
      
    </div>
  )
}