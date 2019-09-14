import React from 'react'
import Home from './Section/Home'
import About from './Section/About'
import Objective from './Section/Objective'
import Skill from './Section/Skills'
import Education from './Section/Education'
import Experience from './Section/Experience'

class Main extends React.Component {
  render () {
    return (
      <main className='App-Main'>
        <Home />
        <About />
        <Objective />
        <Skill />
        <Education />
        <Experience />
      </main>
    )
  }
}

export default Main
