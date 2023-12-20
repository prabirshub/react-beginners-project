import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

export default function App() {
  return (
    <div className='App'>
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Color Generator */}
      {/* <RandomColor /> */}

      {/* Star Rating Components */}
      <StarRating noOfStars={10} />
    </div>
  )
}
