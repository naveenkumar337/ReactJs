import React from 'react'
import '.././Styles/SocialLinks.css'
class SocialLinks extends React.Component {

    render() {
        return (
            <div className="social-Links">
                <div>
                    <p>
                        You can also sign in with these:
                    </p>
                </div>
                <div>
                    <input type="button" id="fb-btn" value="FaceBook" />
                </div>
                <div>
                    <input type="button" id="google-btn" value="Google" />
                </div>
                <div>
                    <input type="button" id="twitter-btn" value="Twitter" />
                </div>
            </div>
        )
    }
}
export default SocialLinks;