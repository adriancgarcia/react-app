import logo from './logo.svg';
import './App.css';

const GrandChildOne = (props) => {
  return (
    <>
    <h3>{props.bookTitle}</h3>
      <h3>{props.author}</h3>
    </>
  )
}


const ChildOne = (props) => {
  return (
    <>
    <h1>{props.bookTitle}</h1>
    {props.author && <GrandChildOne bookTitle={props.bookTitle} author={props.author}/>}
      </>
    )
}

const ChildOneVersionTwo = (props) => {
  return (
    <>
      <h1>{props.bookTitle}</h1>
      <GrandChildOne
        bookTitle={props.bookTitle}
        author={props.author}
      />
    </>
  )
}

const App = () => {
  return (
    <div className="App">

      <ChildOne bookTitle = "100 years of Solitude" />
      <ChildOne bookTitle ="Love in the Time of Cholera"/>
      <ChildOneVersionTwo author = "Rodolfo Anaya" bookTitle = "Bless me, Ultima" />
    </div>
  );
} 

export default App;
