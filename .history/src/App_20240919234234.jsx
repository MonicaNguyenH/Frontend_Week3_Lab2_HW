import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {

  const artistList = artists.map(artist => <ArtistDetails key={artist.name} artist={artist} />);
  // const productList = PRODUCTS.map(product => <Product key={product.name} product={product} />);

  return (
    <div className="app">
      <header>
        <h1>Best-selling music artists</h1>
      </header>
      <main>
        {artistList}
      </main>
    </div>
  );
}

export default App;
