import FAQs from '../../components/FAQs'
import HeaderMain from '../../components/HeaderMain'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'



import './home.css'
const Home = () => {
  return (
    <>
   <HeaderMain/>
   <Programs/>
    <Values/>
    <FAQs/>
    <Testimonials/>
   </>
  )
}

export default Home