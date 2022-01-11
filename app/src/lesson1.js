import React from 'react'
import ReactDom from 'react-dom'


const Greeting2 = () => {
  return React.createElement('h1', {}, 'helloz')
}

const Greeting3 = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, 'hellom'))
}

const Greeting = () => {
  return (
    <div>
      <Greeting2/>
      <h1 style={{color: 'green'}}>
        Hellon
      </h1>
    </div>
  )
}

ReactDom.render(<Greeting/>, document.getElementById('root'))
