import React from 'react'
import Banners from '../../components/Banners'
import Trees from '../../components/Three'
import Projects from '../../components/ProjectLists/Projects'
import Who from '../../components/Who'

export default function Home() {
  return (
    <main className='dr-container'>
        <Banners />
        <Trees />
        <Projects />
        <Who />
    </main>
  )
}

