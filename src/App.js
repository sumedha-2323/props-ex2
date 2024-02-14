
import './App.css';
import data from './data';
// console.log(data);

const App=()=>{
  return(
    <header className="container">
      <ul className="comments-container">
        {
          data.map((eachComment)=>{
            const {id, email, name, body}= eachComment;
            return(
            <li key={id} className="comment">
              <div className="comments-header">
            <h3 className="email">{email}</h3>
            <h3 className="name">{name}</h3>
          </div>
          <p className="message">{body}</p> 
            </li>
            )

          })
        }
        {/* <li className="comment">
          <div className="comments-header">
            <h3 className="email">email@gmail.com</h3>
            <h3 className="name">some random name</h3>
          </div>
          <p className="message">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eos neque omnis dolorum suscipit rem quibusdam temporibus aspernatur voluptatum aut.</p> 
        </li>
        
         */}
      </ul>
    </header>
  )
}

export default App;
