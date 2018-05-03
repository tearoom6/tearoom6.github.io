import React from 'react'
import { Container, Image, List } from 'semantic-ui-react'
import SocialLink from './SocialLink'

const SocialLinks = (props) => (
  <Container>
    <List horizontal link>
      <SocialLink href='https://github.com/tearoom6/' imgSrc='img/github.png' />
      <SocialLink href='https://www.linkedin.com/in/tomohiro-m-604604155/' imgSrc='img/linkedin.png' />
      <SocialLink href='https://twitter.com/tearoom6/' imgSrc='img/twitter.png' />
      <SocialLink href='https://qiita.com/tearoom6/' imgSrc='img/qiita.png' />
    </List>
  </Container>
)

export default SocialLinks

