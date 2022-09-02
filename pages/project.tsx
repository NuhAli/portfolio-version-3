import React from 'react'
import Footer from '../components/Footer'
import ProjectDescription from '../components/ProjectDescription'
import ProjectHero from '../components/ProjectHero'
import ProjectIntroduction from '../components/ProjectIntroduction'

const Project = () => {
  return (
    <>
        <ProjectHero />
        <ProjectIntroduction />
        <ProjectDescription />
        <Footer />
    </>
  )
}

export default Project