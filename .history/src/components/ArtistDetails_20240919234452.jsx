export default function ArtistDetails(props) {

    const {artist} = props;

    return (
        <div className="">
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
