import logo from './logo.svg';
import './App.css';
import Title from './Components/Titles';
import KeyMash from './Components/KeyMash';
import Learners from './Components/Learners';
import friends from './Data/friends.json';
import MyFriend from './Components/MyFriend';


function App() {
// Log friends json component to the console
  console.log("Friends:", friends);

const friendComponents = [];
// loop through your array (from json) and print each one to the console
for (const friend of friends) {
  console.log(friend)
// convert the data into components
  friendComponents.push(
  <MyFriend name={friend.name} age={friend.age} hair={friend.hair} home={friend.home} />
  );
 

}
console.log("components:", friendComponents)
  return (
<div>
    
<h1>I am React
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <ul>

        <li>I</li>
        <li>am</li>
        <li>React</li>

      </ul>

      <Title /> 
    
   <KeyMash />

   <Learners name ="Paige" age="29" job="Trainee Software Engineer" color="Teal" />
   <Learners name ="Eloise" age="24" job="Claims handler" color="Orange" />
   <Learners name ="Matthew" age="25" job="Civil servant" color="Black" />

    <div>
{friendComponents}
      </div>
    

      </div>
    );
}

 

      export default App;
