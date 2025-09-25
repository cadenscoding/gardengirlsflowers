import Carousel from "../components/Carousel";
import ContactForm from "../components/ContactForm.jsx";

function Home() {
  return (
    <div>
      <Carousel />
      <section className="info">
        <h2>Welcome to Garden Girls Flowers</h2>
        <p>Fresh, seasonal, and beautiful arrangements grown locally with love.</p>
      </section>
      <ContactForm />
    </div>
  );
}

export default Home;