import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import Footer from "./components/Footer";
//import data from "./data"
 


function App() {
  const [data, setData] = React.useState([])
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const dataCardsRef = React.useRef(null);
  
  React.useEffect(() => {
        fetch("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    
  
  const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })
  return (
    <div className="container">
            <Navbar />
            <Main />
            <section className="cards-list">
                {cards}
            </section>
            <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 



