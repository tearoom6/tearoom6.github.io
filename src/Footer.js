import React from 'react'
import { Container, Header, Image, Segment } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    inverted
    vertical
    style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
  >
    <Container inverted textAlign='center'>
      <Header inverted as='h4' content='Go more. Go fast.' />
      <p>tearoom6 - software developer</p>

      <Image centered size='mini' src='img/icon.png' />
      <Header as='h5' inverted color='grey'>Copyright tearoom6 All right reserved</Header>
    </Container>
  </Segment>
)

export default Footer

