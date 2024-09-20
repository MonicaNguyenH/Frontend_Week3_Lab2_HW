export default function ArtistDetails(props) {

    const {artist} = props;

    return (
        <div className="artist">
            <div className="artist-image">
                <img src={artist.image} alt="" />
            </div>
            <div className="artist-bio">
                <h2 className="artist-name">{artist.name}</h2>
                <p>
                    <span></span>
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