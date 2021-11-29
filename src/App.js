import { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

function App() {

  // State
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
  const [index, setIndex] = useState(3)

  // Set State
  const leftClick = i => {
    setIndex(i - 1)
  }
  const rightClick = i => {
    setIndex(i + 1)
  }

  // Use Effect
  useEffect(() => {
    const lastIdx = reviews.length - 1
    if (index < 0) {
      setIndex(lastIdx)
    }
    if (index > lastIdx) {
      setIndex(0)
    }
  }, [index, reviews])

  return (
    <div className="App">
      <h1><span>/</span> Review</h1>
      <div className="container">
        {reviews.map((r, rIndex) => {
          let position = 'slide-right'
          if (rIndex === index) {
            position = 'slide-active'
          }
          if (rIndex === index - 1 || (index === 0 && rIndex === reviews.length - 1)) {
            position = 'slide-left'
          }
          return (
            <div className={`review ${position}`} key={r.id}>
              <img className="review-img" src={r.img} alt={r.name} />
              <p className="name">{r.name}</p>
              <p className="job">{r.job}</p>
              <p className="description">{r.description}</p>
              <FaQuoteRight />
            </div>
          )
        })}
        <div className="btn btn-left" onClick={() => leftClick(index)}> <FiChevronLeft /> </div>
        <div className="btn btn-right" onClick={() => rightClick(index)}> <FiChevronRight /> </div>
      </div>
    </div>
  );
}

export default App;
