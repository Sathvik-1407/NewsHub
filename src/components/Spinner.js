import React, { Component } from 'react'
import loading from './loader.gif'

export class Spinner extends Component {
  render() {
    return (
        <div className='text-center my-3'>
            <img className='my-4' src={loading} alt='loading' style={{height:'30px',width:'30px'}}/>
        </div>
    )
  }
}

export default Spinner