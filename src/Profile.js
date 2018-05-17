import React from 'react'
import { Container, Header, Grid, Image, List } from 'semantic-ui-react'
import SocialLinks from './SocialLinks'

const Profile = () => (
  <Container id="profile">
    <Header as='h1'>Tomohiro Murota, a.k.a. tearoom6</Header>

    <Grid relaxed>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image src='img/portrait.jpg' size='small' circular style={{ marginTop: '1em', marginBottom: '1em' }} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Header as='h2'>Full-stack software developer</Header>
          <p>
            <List>
              <List.Item>
                <List.Icon name='code' />
                <List.Content>Java, Ruby, PHP, Python, Swift, Kotlin, JavaScript, Go</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='settings' />
                <List.Content>Rails, Spring Framework, Android, iOS, CodeIgniter, React</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='tags' />
                <List.Content>AWS, Game, IoT</List.Content>
              </List.Item>
            </List>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <SocialLinks />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Profile

