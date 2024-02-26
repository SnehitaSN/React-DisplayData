
import './App.css';


const user = {
name:"Fruits",
imageUrl:"https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
imageSize:90,
}

const user1 = {
  name:"vegetables",
  imageUrl:'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  imageSize:90,
}

const user2 = {
  name:"grains",
  imageUrl:'https://images.unsplash.com/photo-1542990253-a781e04c0082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  imageSize:90,
}
function App() {
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <img className="avatar"
      src ={user.imageUrl}
      alt={'photo of ' + user.name}
      style ={{
        width:user.imageSize,
        height:user.imageSize
      }}/>
      <h2>{user1.name}</h2>
      <img className="avatar"
      src={user1.imageUrl}
      alt={'photo of '+ user1.name}
      style={{
        width:user1.imageSize,
        height:user1.imageSize,
      }}/>
      <h2>{user2.name}</h2>
      <img className="avatar"
      src={user2.imageUrl}
      alt={'photo of'+user2.name}
      style={{
        width:user2.imageSize,
        height:user2.imageSize,
      }}/>
    </div>
  );
}

export default App;
