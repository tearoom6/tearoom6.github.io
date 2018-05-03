import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'

const HeaderMenu = () => (
  <Menu fixed='top' inverted style={{ 'overflow-y': 'scroll' }}>
    <Container>
      <Menu.Item as='a' href='./' header>
        <Image
          size='mini'
          src='img/icon.png'
          style={{ marginRight: '1.5em' }}
        />
        tearoom6
      </Menu.Item>
      <Menu.Item as='a' href='./'>Home</Menu.Item>
      <Menu.Item as='a' href='#works'>Works</Menu.Item>
      <Menu.Item as='a' href='#career'>Career</Menu.Item>
      <Menu.Item as='a' href='https://blog.tearoom6.biz/blog/'>Blog</Menu.Item>
    </Container>
  </Menu>
)

export default HeaderMenu

