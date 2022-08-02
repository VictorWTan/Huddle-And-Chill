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
                <input className="m-2 px-5 py-2 border border-gray-600 rounded-lg w-1/3 self-center text-black" type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
                <input className="m-2 px-5 py-2 border border-gray-600 rounded-lg w-1/3 self-center text-black" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                <input className="m-2 px-5 py-2 border border-gray-600 rounded-lg w-1/3 self-center text-black" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                <input className="m-2 px-5 py-2 border border-gray-600 rounded-lg w-1/3 self-center text-black" type="password" name="confirm" placeholder="Confirm"value={this.state.confirm} onChange={this.handleChange} required />
                <button className="my-5 px-5 py-2 rounded-3xl w-1/3 self-center bg-sky-600 hover:scale-105 duration-300" type="submit" disabled={disable}>Create Account</button>
              </form>
            </div>
            <p className="text-black justify-center self-center">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}