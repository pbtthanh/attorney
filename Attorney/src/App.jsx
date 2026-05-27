import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Pillars />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
