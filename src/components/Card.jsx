export default function Card({ actor }) {

    return (
        <div key={actor.id} className="col">
            <div className="card h-100">
                <img src={actor.image} className="card-img-top h-25 fit_cover" alt={actor.name} />

                <div className="card-body h-50">
                    <h4>{actor.name}</h4>
                    <p>{actor.birth_year}</p>
                    <p>{actor.nationality}</p>
                    <label>Awards:</label>
                    <ul className="list-unstyled">
                        {Array.isArray(actor.awards) ?
                            actor.awards.map(award => (
                                <li>{award}</li>
                            )) : <li>{actor.awards}</li>
                        }
                    </ul>
                </div>
                <div className="card-footer h-25">
                    <p>{actor.biography}</p>
                </div>
            </div>
        </div>
    )
}