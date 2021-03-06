import React from 'react'
import styled from 'styled-components'
import { Route, useRouteMatch } from 'react-router-dom'
import Container from 'components/layout/Container'
import IfoTabButtons from './components/IfoTabButtons'
import Hero from './components/Hero'
import CurrentIfo from './CurrentIfo'
import PastIfo from './PastIfo'

const Ifos = () => {
  const { path } = useRouteMatch()

  return (
    <>
      <Hero />
      <Container>
        <Route exact path={`${path}`}>
          <CurrentIfo />
        </Route>
      </Container>
    </>
  )
}

export default Ifos
