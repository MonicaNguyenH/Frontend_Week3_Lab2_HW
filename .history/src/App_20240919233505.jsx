import { ARTIST } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {

  const artistList = ARTIST.map(artist => <ArtistDetails key={artist.name} ArtistDetails={ArtistDetails} />);
  // const productList = PRODUCTS.map(product => <Product key={product.name} product={product} />);

  return (
    <div className="app">
      {artistList};
    </div>
  );
}

export default App;
