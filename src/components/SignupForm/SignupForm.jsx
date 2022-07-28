import { Component } from 'react'
import { signUp } from '../../utilities/users-service'

export default class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            error: ''
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
          const formData = {...this.state}
          delete formData.error
          delete formData.confirm
          const user = await signUp(formData)
          this.props.setUser(user)
        }
        catch {
          this.setState({error: 'Sign Up Failed - Try Again'})          
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="px-10">
              <form className="flex flex-col" autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input className="px-5 border border-black rounded" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label>Email</label>
                <input className="px-5 border border-black rounded" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input className="px-5 border border-black rounded" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Confirm</label>
                <input className="px-5 border border-black rounded" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <button className="my-5 px-5 border border-black rounded" type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}