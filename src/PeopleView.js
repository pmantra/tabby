import React from 'react'
import { Image, List, Segment, SegmentGroup } from 'semantic-ui-react'


const PeopleView = () => (

    <Segment.Group >
    <Segment compact>
    <List.Item className='line-item' active>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header as='a'>Daniel Louise</List.Header>
        <List.Description>
            Project Manager
            New York
        </List.Description>
      </List.Content>
    </List.Item>
    </Segment>
    <Segment compact>
    <List.Item className='line-item'>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
      <List.Content>
        <List.Header as='a'>Stevie Feliciano</List.Header>
        <List.Description>
            Senior Software Engineer
            New York
        </List.Description>
      </List.Content>
    </List.Item>
    </Segment>
    <Segment compact>
    <List.Item className='line-item'>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <List.Content>
        <List.Header as='a'>Elliot Fu</List.Header>
        <List.Description>
            Software Engineer
            London
        </List.Description>
      </List.Content>
    </List.Item>
    </Segment>
    <Segment compact>
    <List.Item className='line-item'>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
      <List.Content>
        <List.Header as='a'>Jenny Lee</List.Header>
        <List.Description>
            UX Lead
            London
        </List.Description>
      </List.Content>
    </List.Item>
    </Segment>
    </Segment.Group>
)

export default PeopleView
