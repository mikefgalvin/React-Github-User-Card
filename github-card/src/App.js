import './App.css';
import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard';
import Followers from './Components/Followers';
import GitHubCalendar from 'react-github-calendar';

class App extends React.Component {
    state = ({
      user: [],
      followers: [],
      inputValue: []
    })

    componentDidMount() {
      axios.get('https://api.github.com/users/mikefgalvin')
      .then((res)=>{
          this.setState({
              user: res.data
          })
      })
      .catch((err)=> {
          console.log(err);
      })
      axios.get('https://api.github.com/users/mikefgalvin/followers')
    .then((res)=>{
        this.setState({
            followers: res.data
        })
    })
    .catch((err)=> {
        console.log(err);
    })
  }

  handleClick = e => {
      e.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.inputValue}`)
      .then((res) => {
          this.setState({
              user: res.data
          })
      })
      .catch((err)=> {
          console.log(err);
      })
      axios.get(`https://api.github.com/users/${this.state.inputValue}/followers`)
    .then((res)=>{
        this.setState({
            followers: res.data
        })
    })
    .catch((err)=> {
        console.log(err);
    })

    this.setState({
      inputValue: [],
    })
    
}

handleChange = e => {
  this.setState   ({
      inputValue: e.target.value
  });
}

// onSubmit = e => {
//   e.preventDefault();
//   this.state.handleClick(this.state.inputValue)
//   this.setState   ({
//     inputValue: '',
// });
// }




  render(){
    return (
      <div className="App">
        <header className="App-header">
          <form>
              <input onChange={this.handleChange} type='text' placeholder='Search another username' value={this.state.inputValue} />
              <button onClick={this.handleClick}><span>&#128269;;</span></button>
          </form>
          <UserCard user={this.state.user}/>
          <GitHubCalendar username={this.state.user.login} />
          <Followers followers={this.state.followers}/>
        </header>
      </div>
    );
  }
}

export default App;
