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
                    <span className="artist-country">Country: {artist.country}</span>
                    <br/>
                    <span className="artist-years-active">Years active: {artist.years_active}</span>
                </p>
            </div>
        </div>
    )
}
