import './BigImageSection.css'
import { icons } from '../assets/Assets'
function BigImagesSection() {
  return (
    <div className='BigImageSection'>
      <div className="BigImageSectionrow1">
            <div className="leftbigimg">
          <img src={icons.banner1} alt="home big img"/>
      </div>
      <div className="rightsmallimgandcontent">
        <div className="rightsmallimg">
        <img src={icons.cake4} alt='cake image'/>
        </div>
        <div className="rightsmallcontent">
          <h1>Delicious cake</h1>
          <p>IT'S ALWAYS GOOD TIME FOR SWEETS!</p>
          <div>Shop Nows</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default BigImagesSection
