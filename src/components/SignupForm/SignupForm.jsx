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
                <input className="px-5 py-2 border border-gray-600 rounded w-1/4 self-center bg-black" type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
                <input className="px-5 py-2 border border-gray-600 rounded w-1/4 self-center bg-black" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                <input className="px-5 py-2 border border-gray-600 rounded w-1/4 self-center bg-black" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                <input className="px-5 py-2 border border-gray-600 rounded w-1/4 self-center bg-black" type="password" name="confirm" placeholder="Confirm"value={this.state.confirm} onChange={this.handleChange} required />
                <button className="my-5 px-5 border border-white rounded w-1/4 self-center" type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}