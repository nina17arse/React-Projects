import {
  Hero,
  CustomerReviews,
  Subscribe,
  SpecialOffer,
  Footer,
  SuperQuality,
  Services,
  PopularProducts,
} from "./sections";
import { Nav } from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
      </section>
    <section className="padding">
      <PopularProducts />
      </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-1">
      <Services />
      </section>
    <section className="padding">
      <SpecialOffer />
      </section>
    <section className="padding">
      <CustomerReviews />
    </section>
    <section className="padding">
      <Subscribe />
      </section>
    <section className="padding">
      <Footer />
      </section>
  </main>
);

export default App;
