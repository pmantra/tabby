import React, { Component } from 'react'
import {
    Menu,
    Icon,
    Input
} from 'semantic-ui-react'

class AppHeader extends Component {

    handleButtonClick = () => this.props.onToggleMenu()

    render() {
        return (
            <div>
                <Menu fixed='top'>
                    <Menu.Item
                        onClick={this.handleButtonClick} >
                        <Icon name='bars' size='large' />
                    </Menu.Item>
                    <div>
                        <Input size='large'
                        icon='search' placeholder='Search'
                        className='search-bar'/ >
                    </div>
                </Menu>
            </div>
        )
    }
}

export default AppHeader