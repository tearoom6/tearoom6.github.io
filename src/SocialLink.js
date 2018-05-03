import React from 'react'
import { Image } from 'semantic-ui-react'

const SocialLink = (props) => (
  <Image as='a' href={props.href} src={props.imgSrc} />
)

export default SocialLink

