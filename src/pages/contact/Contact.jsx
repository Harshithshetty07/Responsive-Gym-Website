import HeaderAbout from '../../components/HeaderAbout'
import HeaderImage from '../../images/headerimage2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'




import './contact.css'

const Contact = () => {
  return (
    <>
    <HeaderAbout title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quae incidunt at id! Ratione sunt 
      quos illo laboriosam! Ut error culpa eveniet cupiditate laborum. Explicabo.
    </HeaderAbout>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@harshith.com" target='_blank' rel="noreferrer"><MdEmail/></a>
          <a href="https://m.me/code" target='_blank' rel="noreferrer"><BsMessenger/></a>
          <a href="https://wa.me/+911234567899" target='_blank' rel="noreferrer"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact