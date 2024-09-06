// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Component} from 'react'

class Skills extends Component {
    render() {
        return (
            <>
                <div className='skills-section'>
                    <div className='skills-text'>
                        <h2>Skills</h2>
                        <p>
                            lorem ipsum dolor sit amet con et connex et
                            lorem ipsum dolor sit amet connex et lorem ipsum dolor sit amet con ne consequ id el met
                            lorem ipsum dolor sit amet con et connex et
                            lorem ipsum dolor sit amet connex et lorem ipsum dolor sit amet con ne consequ id el met
                            n lorem ipsum dolor sit amet con et connex et
                            lorem ipsum dolor sit amet connex et lorem ipsum dolor sit amet con ne consequ id el met
                            lorem ipsum dolor sit amet con et connex et
                            lorem ipsum dolor sit amet connex et lorem ipsum dolor sit amet con ne consequ id el met
                        </p>
                    </div>
                    <div className='skills'>
                        <div className='my-focus'>
                            <p>my focus</p>
                            <p>UI/UX Design</p>
                            <p> Responsive Design</p>
                            <p> Web Design</p>
                            <p> Mobile App Design </p>
                        </div>
                        <div className='skills-bar'>
                            <progress max="100" value="90" data-label="PHP"></progress>
                            <progress max="100" value="50" data-label="JavaScript"></progress>
                            <progress max="100" value="70" data-label="JQuery"></progress>
                            <progress max="100" value="50" data-label="React"></progress>
                            <progress max="100" value="60" data-label="Python"></progress>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Skills;