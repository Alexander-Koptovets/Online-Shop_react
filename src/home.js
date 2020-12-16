import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkName: false,
            checkPassword: false
        };
        this.checkName = this.checkName.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
    }
    checkName(e) {
        e.target.value.length >= 5  
        ? this.setState({checkName: true})
        : this.setState({checkName: false})
    }

    checkPassword(e) {
        e.target.value.length >= 5  
        ? this.setState({checkName: true})
        : this.setState({checkName: false})
    }

    render() {
        return (
            <div className='sign-in-wrapper'>
                <div className='sign-in-header'>
                    <p className='sign-in-header-text'>Signe in</p>
                </div>
                <div className='signe-in-main'>
                    <input className='signe-in-input name' placeholder='Name' onChange={this.checkName}></input>
                    <div> 
                        <span className='signe-in-check'>*You must enter at least five any characters</span>
                    </div>
                    <input className='signe-in-input password' placeholder='Password' onChange={this.checkPassword}></input>
                    <div>
                        <span className='signe-in-check'>*You must enter at least five any characters</span>
                    </div>
                    <div className='sign-in-link'>
                    {this.state.checkName 
                        ? <NavLink className='active-link' to='/Products'>Signe In</NavLink>
                        : <NavLink className='non-active-link' to='/Products'>Signe In</NavLink>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage; 