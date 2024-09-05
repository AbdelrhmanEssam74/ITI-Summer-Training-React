// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Component} from 'react'

class Hero extends Component {
    render() {
        return (
            <>
                <div className='container-fluid'>
                    <div className='main-text'>
                        <h1>Katie Reed</h1>
                        <p>
                            Web Developer & Designer
                        </p>
                        <div>
                            <button type="button" className="btn btn-outline-light">Contact US</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Hero;