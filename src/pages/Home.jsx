import React  from 'react'
import Collage from '../components/Collage'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import data from "../data/data.json"


const Home = () => {

  return (
    <>
      <header >
      <Navbar/>
      <Hero/>
      </header>
      <main>
      <Content data={data}/>
      <Testimonials/>
      <Collage />
      </main>
      <footer>
      <Footer/>
      </footer>
    </>
  )
}

export default Home