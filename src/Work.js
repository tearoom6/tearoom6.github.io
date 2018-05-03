import React from 'react'
import { Button, Icon, Item } from 'semantic-ui-react'

const Work = (props) => (
  <Item>
    <Item.Image size='small' href={props.href} src={props.imgSrc} />

    <Item.Content verticalAlign='middle'>
      <Item.Header>
        <Icon name={props.icon} size='small' />
        {props.title}
      </Item.Header>
      <Item.Description>
        {props.description}
      </Item.Description>
      <Item.Extra>
        <Button floated='right' href={props.href}>{props.buttonText}</Button>
      </Item.Extra>
    </Item.Content>
  </Item>
)

export default Work

