export default function ArtistDetails(props) {

    const {artist} = props;

    return (
        <div className="artist-card">
            <div className="artist-url">
                <img src={artist.photo_url} alt="" />
            </div>
            <div className="artist-bio">
                <h2 className="artist-name">{artist.name}</h2>
                <p>
                    <span className="artist-country">{artist.country}</span>
                    <br/>
                    <span className="artist-years-active">{artist.years_active}</span>
                </p>
            </div>
        </div>
    )
}


// export default function Product(props) {

//     const {product} = props;

//     return (
//         <div className="product">
//             <div className="product-image">
//                 <img src={product.image} alt="" />
//             </div>
//             <p>
//               <span className="pr-name">{product.name}</span>
//               <span className="pr-price">{product.price}</span>
//             </p>
//             <button className="add-to-cart">Add to cart</button>
//             <button>
//                 <span>&#129293;</span>Add to wishlist
//             </button>
//           </div>
//     )
// }