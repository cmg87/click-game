import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";



function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
      score: 0,

  };

  myArr = [];

  shuffle = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
        if(this.myArr.indexOf(id) === -1){
            this.setState({score: this.state.score +1});
            this.myArr.push(id)

        }else {
            this.setState({score: 0})
            this.myArr = [];
        }

    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
      const shuffledImages = shuffleArray(this.state.friends);
    return (
      <Wrapper>
          <div>Score <span>{this.state.score}</span></div>
        <Title>Click Game</Title>
        {shuffledImages.map(friend => (
          <FriendCard
            removeFriend={this.shuffle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
