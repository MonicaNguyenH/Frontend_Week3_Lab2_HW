import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {

  const artistList = artists.map(artist => <ArtistDetails key={artist.name} artist={artist} />);
  // const productList = PRODUCTS.map(product => <Product key={product.name} product={product} />);

  return (
    <div className="app">
      <main>
        {artistList}
      </main>
    </div>
  );
}

export default App;
