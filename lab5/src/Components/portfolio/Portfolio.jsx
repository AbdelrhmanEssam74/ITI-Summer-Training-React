// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Component} from 'react'

class Portfolio extends Component {
    render() {
        return (
            <>
                <div className="portfolio">
                    <div className='main-title'>
                        <h2>Portfolio</h2>
                    </div>
                    <div className='widgets'>
                        <div className='gray'>
                            WEB DESIGN

                        </div>
                        <div className='dark-gray'>
                            WEB APPLICATION
                        </div>
                        <div className='gray'>
                            DEVELOPMENT
                        </div>
                        <div className='dark-gray'>
                            MOBILE DESIGN
                        </div>
                        <div className='gray'>
                            MOBILE APPLICATION
                        </div>
                        <div className='dark-gray'>
                            DEVELOPMENT
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Portfolio;