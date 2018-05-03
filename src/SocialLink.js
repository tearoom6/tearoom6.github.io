import React from 'react'
import { Image, List } from 'semantic-ui-react'

const SocialLink = (props) => (
  <List.Item as='a' href={props.href}>
    <Image centered style={{ height: '1.5em' }} src={props.imgSrc} />
  </List.Item>
)

export default SocialLink

