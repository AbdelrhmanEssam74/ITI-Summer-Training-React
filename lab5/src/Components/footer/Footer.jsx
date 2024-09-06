// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className='left'>
                        <p className='text'>get in touch</p>
                        <div className='contact'>
                            <p>
                                <i className="fa-solid fa-envelope"></i>
                                <a
                                    href='mailto:webmaster@example.com"'>webmaster@example.com</a>
                            </p>
                            <p>
                                <i className="fa-solid fa-square-phone"></i>
                                <a href='tell:01234567890"'>01234567890</a>
                            </p>
                        </div>
                    </div>
                    <div className='center'>
                        <button type="button" className="btn btn-outline-light">Contact US</button>
                    </div>
                    <div className='right'>
                        <div className='icons'>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-square-x-twitter"></i>
                        </div>
                        <p>Copyright &copy;2019 KR</p>
                    </div>

                </footer>
            </>
        )
    }
}

export default Footer