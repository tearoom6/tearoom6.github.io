import React from 'react'
import { Container, Header, List } from 'semantic-ui-react'
import CareerItem from './CareerItem'

const Career = () => (
  <Container id='career'>
    <Header as='h2'>Career</Header>
    <List>
      <CareerItem
        title='Umitron Pte. Ltd.'
        period='Mar 2018 – Present'
        role='Software Engineer'
      />
      <CareerItem
        title='Metaps Inc.'
        period='Nov 2015 – Feb 2018'
        role='Software Engineer'
      />
      <CareerItem
        title='Colopl Inc.'
        period='Jul 2013 – Oct 2015'
        role='Software Engineer'
      />
      <CareerItem
        title='Canon IT Solutions Inc.'
        period='Apr 2010 – Jun 2013'
        role='System Engineer'
      />
      <CareerItem
        icon='lab'
        title='Kyoto University'
        period='Apr 2003 – Mar 2010'
        role='Master of Life Sciences'
      />
    </List>
  </Container>
)

export default Career

