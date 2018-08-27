import React, { Component } from 'react'
import { Menu, Icon, Sidebar, Segment } from 'semantic-ui-react'

class AppSidebar extends Component {

    handleSidebarHide = () => this.props.onHideSidebar()

    render () {
        const { visible } = this.props
        return (
            <div className='side-bar'>
                    <Sidebar
                        as={Menu}
                        animation='slide along'
                        icon='labeled'
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width="thin"
                        className="side-bar">
                            <Menu.Item as='a'>
                                <Icon size='tiny'/>
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='users' size='small'/>
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='images outline' size='small' />
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='dollar' size='small' />
                            </Menu.Item>
                    </Sidebar>
            </div>
        )
    }
}

export default AppSidebar