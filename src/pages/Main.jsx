import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <button>
        <Link to="/drive">Drive</Link>
      </button>
      <button>
        <Link to="/firebase">Firebase</Link>
      </button>
    </div>
  )
}

export default Main