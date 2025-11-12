export default function Card() {

    return (
        <div className="col">
            <div key={actor.id} className="card h-100">
                <img src={actor.image} className="card-img-top" alt={actor.name} />

                <div className="card-body">
                    {actor.name}
                </div>
            </div>
        </div>
    )
}