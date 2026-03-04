
import Hero from '../Components/Hero'
import DeliciousOfferSection from '../Components/DeliciousOfferSection'
import AllItemsSection from '../Components/AllItemsSection'
import BigImageSection from '../Components/BigImagesSection'
import HomeBigImageSection from '../Components/HomeBigImageSection'

function homePage1() {
  return (
    <div className='home'>
      <Hero/>
      <DeliciousOfferSection/>
      <AllItemsSection/>
      <HomeBigImageSection/>
    </div>
  )
}

export default homePage1
