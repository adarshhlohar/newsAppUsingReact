import React, { Component } from 'react'
import loading from "./__Iphone-spinner-1.gif"

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center my-2'>
                <img src={loading} alt="loading_img" />
            </div>
        )
    }
}

export default Spinner
