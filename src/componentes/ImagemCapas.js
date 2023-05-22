import React, { Component } from 'react'
import './ImagemCapasStyle.css'

export class ImagemCapas extends Component {
  render() {
    return (
      <div className='capa-img'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default ImagemCapas