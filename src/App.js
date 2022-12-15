import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const like = 50;
  /* jsx converts everything to string (before converting to html)
   except booleans and objects */
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {like} times</p>

        <p>{10}</p>
        <p>{"hello"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
