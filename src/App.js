import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <body className='h-screen bg-darkBlue'>
      <NavBar />
      <About />
      <Projects />
      <Skills />
    </body>
  )
}
export default App
