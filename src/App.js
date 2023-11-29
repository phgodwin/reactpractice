import logo from './logo.svg';
import './App.css';
import Title from './Components/Titles';
import KeyMash from './Components/KeyMash';
import Learners from './Components/Learners';
import friends from './Data/friends.json';
import MyFriend from './Components/MyFriend';
import KingSolution from './Components/KingsSolution';
import Buttons from './Components/Buttons'
import Counter from './Components/Counter';



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
    );}

  

  console.log("components:", friendComponents)
  return (
    <div>

     

      <Title />

      <KeyMash />

      <Learners name="Paige" age="29" job="Trainee Software Engineer" color="Teal" />
      <Learners name="Eloise" age="24" job="Claims handler" color="Orange" />
      <Learners name="Matthew" age="25" job="Civil servant" color="Black" />

      <MyFriend name="Elliot" age={25} hair="God knows" home="Newport" />

      <div>
        {friendComponents}
        <KingSolution/>


      </div>
<Buttons/>

<br/>
<br/>

<Counter/>


    </div>
  );
}



export default App;
