import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import SocialLink from './SocialLink'

const SocialLinks = (props) => (
  <Container>
    <Image.Group size='mini'>
      <SocialLink href='https://github.com/tearoom6/' imgSrc='img/github.png' />
      <SocialLink href='https://www.linkedin.com/in/tearoom6/' imgSrc='img/linkedin.png' />
      <SocialLink href='https://twitter.com/tearoom6/' imgSrc='img/twitter.png' />
      <SocialLink href='https://qiita.com/tearoom6/' imgSrc='img/qiita.png' />
    </Image.Group>
  </Container>
)

export default SocialLinks

