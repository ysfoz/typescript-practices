import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Link to='/values'>
            <button>Values</button>
            </Link>
            <Link to='/functions'>
            <button>Funnctions</button>
            </Link>
            <Link to='/classes'>
            <button>Classes</button>
            </Link>
           
        </div>
    )
}
export default HomePage;
