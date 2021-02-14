import React, {Component, PureComponent} from 'react'

export const HelloCreateElement = React.createElement('div', null, 'Hello world (create element)!');

export class HelloClass extends Component {
  render() {
    return <div>Hello world (class component)!</div>
  }
}

export class HelloPure extends PureComponent {
  render() {
    return <div>Hello world (class component)!</div>
  }
}

export const HelloFunctional = () => (<div>Hello world (Functional component)!</div>);