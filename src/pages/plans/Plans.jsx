import HeaderAbout from '../../components/HeaderAbout'
import HeaderImage from '../../images/headerimage1.jpg'
import Card from '../../UI/Card'
import { plans } from '../../data'
import './plans.css'

const Plans = () => {
  return (
    <>
    <HeaderAbout title="Membership plans" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur laboriosam vel 
    </HeaderAbout>
    <section className='plans'>
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return <Card key={id} className='plan'>
            <h3>{name}</h3>
            <small>{desc}</small>
            <h1>{`$${price}`}</h1><h2>/mo</h2>
            <h4>Features</h4>
            {
              features.map(({feature, available}, index) => {
                return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
              })
            }
            <button className='btn lg'>Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans