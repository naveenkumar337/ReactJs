import React from 'react'
import '../Styles/signup.css'

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }
    handleForm = event => {
        event.preventDefault();
        if (isValidForm(this.state))
            alert(`${this.state.username} ${this.state.email} ${this.state.password}`);
        // if (isValidForm(eve)) {
        // }
    }
    handleChanges = eve => {
        debugger
        let name = eve.target.name;
        let value = eve.target.value;
        this.setState({
            [name]: value
        })
    }
    tagClicked = eve => {
        debugger
        if (eve.target.name === "username") {
            document.getElementById("username-error").style.display = "none";
        }
        else if (eve.target.name === "email") {
            document.getElementById("email-error").style.display = "none";
        }
        else if (eve.target.name === "password") {
            document.getElementById("password-error").style.display = "none";
        }
    }
    render() {
        return (
            <div className="form-tag">
                <form onSubmit={this.handleForm}>
                    <span>
                        <div>
                            <label>User Name:</label>
                        </div>
                        <div>
                            <input name="username" value={this.state.username} id="txtUserName" onClick={this.tagClicked} onChange={this.handleChanges} type="text" placeholder="JohnJodha" />
                            <label className="error" id="username-error">Please enter username</label>
                        </div>
                    </span>

                    <span>
                        <div>
                            <label>Email:</label>
                        </div>
                        <div>
                            <input name="email" id="txtEmail" value={this.state.email} type="email" onClick={this.tagClicked} onChange={this.handleChanges} placeholder="example@email.com" />
                            <label className="error" id="email-error">Please enter email</label>
                        </div>
                    </span>

                    <span>
                        <div>
                            <label>PassWord:</label>
                        </div>
                        <div>
                            <input name="password" id="txtPassword" value={this.state.password} onClick={this.tagClicked} onChange={this.handleChanges} type="password" placeholder="********" />
                            <label className="error" id="password-error">Please enter password</label>
                        </div>
                    </span>

                    <span>
                        <p>By submiting the form you agree to our <a href="" >Terms of Service</a></p>
                    </span>

                    <span>
                        <div>
                            <button type="submit">Join</button>
                        </div>
                    </span>

                </form>
                <div id="message">
                    <h3>Password must contain the following:</h3>
                    <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                    <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                    <p id="number" class="invalid">A <b>number</b></p>
                    <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                </div>
            </div>
        )
    }
}
function isValidForm(obj) {
    debugger
    let { username, email, password } = obj;
    // let x = document.getElementById("username-error");
    // x=x==null?document.getElementById("username-error"):x;
    // let x = username === "" ? 
    let x = document.getElementById("username-error");
    if (username === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    x = document.getElementById("email-error");
    if (email === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    x = document.getElementById("password-error");
    if (password === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    if (username === "" || password === "" || email === "")
        return false;
    else return true;
}
export default SignUp;