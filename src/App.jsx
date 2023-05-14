import Hero from './components/Hero';

import Demo from './components/Demo';

import './App.css';

const App = () => {

  return (

    <main>

      <div className="main bg-gradient-to-r from-violet-300 to-violet-400">

        <div className="gradient" />

      </div>

      <div className="app">

        <Hero />
        <Demo />

      </div>

    </main>

  )

}

export default App;