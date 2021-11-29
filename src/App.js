import { useState } from 'react'

function App() {

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Susana Johnasson',
      job: 'Website Designer',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, amet pariatur omnis inventore saepe nisi est velit commodi in aspernatur?'
    },
    {
      id: 2,
      name: 'Loberto Nickson',
      job: 'CTO in Vinecook.inc',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, amet pariatur omnis inventore saepe nisi est velit commodi in aspernatur?'
    },
    {
      id: 3,
      name: 'Aaron McArthur',
      job: 'Developer',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, amet pariatur omnis inventore saepe nisi est velit commodi in aspernatur?'
    },
    {
      id: 4,
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
              <div className="id">{r.id}</div>
              <p className="name">{r.name}</p>
              <p className="job">{r.job}</p>
              <p className="description">{r.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
