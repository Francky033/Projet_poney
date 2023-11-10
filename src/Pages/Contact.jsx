import Footer from '../components/Footer';
import Header from '../components/Header';
import './App.scss';
 
function Contact() {
    
  return (
    <>

    <Header/>
    <div className="App">
    <div className="App-header"> 
    <h2>Contact</h2>
    <form >
    <h2> Formulaire d'inscription </h2>
    <img className='FormInscription' src="https://th.bing.com/th/id/R.63f9f244ff7bdcf02b28fc8d1c84b2dd?rik=ZYeB5n47j3YE8Q&pid=ImgRaw&r=0" alt=''/>
        <label >
          Nom:
        </label>
        <input type="text" 
              />
        <label >
          Age:
        </label>
        <input type="text" />

        <label>
          Email:
        </label>
        <input type="email" />
              
        <label>
          Mot de passe: 
        </label>   
        <input type="password" />     
          
        <label>
        Confirmation mot de passe:
        </label>
        <input type="password"  />
            
        <input className='sumit' type="submit" value="Submit"/>
      </form>
    </div>
    </div>
  <Footer/>
  </>
  );
 }


 export default Contact