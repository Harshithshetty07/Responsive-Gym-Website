import HeaderAbout from "../../components/HeaderAbout";
import HeaderImage from "../../images/galleryheader.jpg";
import "./gallery.css";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <HeaderAbout title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        saepe beatae alias ipsam, eum cumque molestias numquam.
      </HeaderAbout>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`GalleryImage ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
