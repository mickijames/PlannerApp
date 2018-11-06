import React, {Component} from 'react';
import {List, Icon} from 'semantic-ui-react';

class Item extends Component {
    render() {
        return (
            <List>
                <List.Item as='a'>
                <Icon name='plus' />
                <List.Content>
                    <List.Header>CSCD303 Midterm due at 12am</List.Header>
                    <List.Description>
                    This text will always have a left margin to make sure it sits alongside your icon
                    </List.Description>
                </List.Content>
                </List.Item>
                <List.Item as='a'>
                <Icon name='plus' />
                <List.Content>
                    <List.Header>CSCD303 Midterm due at 12am</List.Header>
                    <List.Description>
                    Floated icons are by default top aligned. To have an icon top aligned try this example.
                    </List.Description>
                </List.Content>
                </List.Item>
            </List>
        )
    }
}

export default Item;