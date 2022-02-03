import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { LockClosedIcon } from '@heroicons/react/solid'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login = (<form onSubmit={this.authorize}>
      <input type='password' placeholder='Password' />
      <button>Submit</button>
    </form>);
    const contactInfo = (<ul>
      <li>
        client@example.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>);
    return (
      <div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div class="w-full sm:max-w-md p-5 mx-auto">
          <h2 class="mb-12 text-center text-5xl font-extrabold">Welcome</h2>
        </div>
        
        {this.state.authorized ?
          contactInfo
          :
          <form onSubmit={this.authorize}>
            <div class="mb-4">
              <label class="block mb-1" for="password">Password</label>
              <input id="password" type="password" name="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
            </div>
            <div class="mt-6">
              <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Sign In
              </button>
            </div>
          </form>
        }
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />,
  document.getElementById('root')
);