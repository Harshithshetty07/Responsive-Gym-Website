import HeaderAbout from '../../components/HeaderAbout'
import HeaderImage from '../../images/headerimage.jpg'
import StoryImage from '../../images/storyimage.jpg'
import VisionImage from '../../images/visionimage.jpg'
import MissionImage from '../../images/missionimage.jpg'
import './about.css'




const About = () => {
  return (
  <>
  <HeaderAbout title="About Us" image={HeaderImage} >
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa nemo, 
    excepturi quis in, voluptatibus fugiat adipisci aspernatur aliquam.
  </HeaderAbout>

  <section className="about__story">
    <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImage} alt="Our StoryImage" />
      </div>
      <div className="about__section-content">
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iusto 
          nemo error quis veniam sit, quas provident ratione dolorem tenetur ab aperiam asperiores
           inventore ullam at culpa repudiandae porro eius. Sit, quam! In eum facilis a! Nulla vitae 
           in autem consequuntur doloremque eaque tempore. Quam sequi dolorem temporibus amet necessitatibus 
        </p>
        <p>
        vero a assumenda maiores nobis labore. Architecto dicta autem enim quaerat consequatur iure
         a delectus nihil nobis, quas id quos harum cupiditate? Quos exercitationem blanditiis dignissimos assumenda
          praesentium, neque magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, rerum.
        </p>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa nemo, 
    excepturi quis in, voluptatibus fugiat adipisci aspernatur aliquam.
        </p>
      </div>
    </div>
  </section>

  <section className="about__vision">
    <div className="container about__vision-container">
      <div className="about__section-content">
        <h1>Our Vision</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iusto 
          nemo error quis veniam sit, quas provident ratione dolorem tenetur ab aperiam asperiores
           inventore ullam at culpa repudiandae porro eius. Sit, quam! In eum facilis a! Nulla vitae 
           in autem consequuntur doloremque eaque tempore. Quam sequi dolorem temporibus amet necessitatibus 
        </p>
        <p>
        vero a assumenda maiores nobis labore. Architecto dicta autem enim quaerat consequatur iure
         a delectus nihil nobis, quas id quos harum cupiditate? Quos exercitationem blanditiis dignissimos assumenda
          praesentium, neque magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, rerum.
        </p>
      </div>
      <div className="about__section-image">
        <img src={VisionImage} alt="Our VisionImage" />
      </div>
    </div>
  </section>

  <section className="about__mission">
    <div className="container about__mission-container">
      <div className="about__section-image">
        <img src={MissionImage} alt="Our MissionImage" />
      </div>
      <div className="about__section-content">
        <h1>Our Mission</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iusto 
          nemo error quis veniam sit, quas provident ratione dolorem tenetur ab aperiam asperiores
           inventore ullam at culpa repudiandae porro eius. Sit, quam! In eum facilis a! Nulla vitae 
           in autem consequuntur doloremque eaque tempore. Quam sequi dolorem temporibus amet necessitatibus 
        </p>
        <p>
        vero a assumenda maiores nobis labore. Architecto dicta autem enim quaerat consequatur iure
         a delectus nihil nobis, quas id quos harum cupiditate? Quos exercitationem blanditiis dignissimos assumenda
          praesentium, neque magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, rerum.
        </p>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa nemo, 
    excepturi quis in, voluptatibus fugiat adipisci aspernatur aliquam.
        </p>
      </div>
    </div>
  </section>
  </>
  )
}

export default About