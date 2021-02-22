import React from 'react'
import {List} from './List'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {description: "Before click"}
  }

  changeDescription() {
    this.setState({
      description: "After click"
    })
  }

  render() {
    const {description} = this.state

    return (
      <div>
        {description}
        <List title="Languagessss" />
        <button onClick={() => this.changeDescription()}>PRESS ME</button>
      </div>
    )
  }
}

export default App;
