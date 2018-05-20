import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import HeaderMenu from './HeaderMenu'
import Profile from './Profile'
import Works from './Works'
import Career from './Career'
import Footer from './Footer'

// Based on https://react.semantic-ui.com/layouts/fixed-menu
const Layout = () => (
  <div>
    <HeaderMenu />

    <Container text style={{ marginTop: '7em' }}>
      <Profile />

      <Divider section />
      <Works />

      <Divider section />
      <Career />
    </Container>

    <Footer />
  </div>
)

export default Layout

