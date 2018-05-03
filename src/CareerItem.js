import React from 'react'
import { List } from 'semantic-ui-react'

const CareerItem = (props) => (
  <List.Item>
    <List.Icon name={props.icon || 'building'} />
    <List.Content>
      <List.Header>{props.title}&nbsp;({props.role})</List.Header>
      <List.Description>{props.period}</List.Description>
    </List.Content>
  </List.Item>
)

export default CareerItem

