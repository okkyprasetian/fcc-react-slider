import { useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

function App() {

  const [reviews, setReviews] = useState([
    {
      id: 1,
      img: './images/susanna.jpg',
      name: 'Susanna Johnasson',
      job: 'Website Designer',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, amet pariatur omnis inventore saepe nisi est velit commodi in aspernatur?'
    },
    {
      id: 2,
      img: './images/loberto.jpg',
      name: 'Loberto Nickson',
      job: 'CTO in Vinecook.inc',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, amet pariatur omnis inventore saepe nisi est velit commodi in aspernatur?'
    },
    {
      id: 3,
      img: './images/aaron.jpg',
      name: 'Aaron McArthur',
      job: 'Developer',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, amet pariatur omnis inventore saepe nisi est velit commodi in aspernatur?'
    },
    {
      id: 4,
      img: './images/tifanny.jpg',
      name: 'Tifanny Ponnilissa',
      job: 'Marketing Manager',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, amet pariatur omnis inventore saepe nisi est velit commodi in aspernatur?'
    }
  ])

  return (
    <div className="App">
      <h1><span>/</span> Review</h1>
      <div className="container">
        {reviews.map(r => {
          return (
            <div className="review" key={r.id}>
              <img className="review-img" src={r.img} alt={r.name} />
              <p className="name">{r.name}</p>
              <p className="job">{r.job}</p>
              <p className="description">{r.description}</p>
            </div>
          )
        })}
        <div className="btn btn-left">L</div>
        <div className="btn btn-right">R</div>
      </div>
    </div>
  );
}

export default App;
