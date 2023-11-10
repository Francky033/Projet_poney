import Header from "./components/Header";
import Footer from "./components/Footer";

function Propos() {
    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
      };

    return(
        <>
        <Header />,
        <div className="about">
            <li>{infos.author}</li>,
        <li>{infos.published}</li>,
        <li>{infos.address}</li>,
        </div>
        <Footer/>
        </>
        
        )
        
}

export default Propos