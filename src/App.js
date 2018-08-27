import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader'
import AppSidebar from './AppSidebar'
import AppContainer from './AppContainer'

class App extends Component {

  state= {
    visible: false
  }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    return (
      <div>
          <div className="sidebar">
            <AppSidebar
              onHideSidebar={this.handleSidebarHide}
              visible={this.state.visible} />
          </div>
          <div>
            <AppHeader
              onToggleMenu={this.handleButtonClick} />
          </div>
          <div>
            <AppContainer />
          </div>
      </div>
    )
  }
}

export default App;
