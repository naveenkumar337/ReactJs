import React, { Component } from 'react'
import SocialLinks from './SocialLinks'
import SignUp from './SignUp'
import '../Styles/MainPage.css'
class MainPage extends Component {
    render() {
        return (
            <div className="signup-form">
                <div className="header">
                    <div className="circle-group">
                    <div><span>SignUp Form</span></div>
                    <div className="circles">
                        <div className="circle1">
                            <span></span>
                        </div>
                        <div className="circle2">
                        <span></span>
                        </div>
                        <div className="circle3">
                        <span></span>
                        </div>
                        </div>
                    </div>
                <div className="horizantal-line"></div>
                </div>
                <div className="description">
                    <div>
                        <h2>Create a New Account</h2>
                    </div>
                    <div>
                        <p>Come Join our community! Let's set up your account. Already have one? <a href="#">Sign in here</a> </p>
                    </div>
                </div>
                <div className="form-main-tag">
                    <div className="link">
                        <SocialLinks />
                    </div>
                    <div className="bar"></div>
                    <div className="form">
                        <SignUp />
                    </div>
                </div>
            </div>
        )
    }
}
export default MainPage;
