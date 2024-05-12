import hikes from "./data/hikes.json"

const HikesPage = () => {
    return (
        <div className = "card-container">
            {hikes.map((hike) => (
                <div class="card">
                    <img src={`/img/${hike.imageName}`} alt={hike.name} />
                    <h2>{hike.name}</h2>
                    <p>📍{hike.location}</p>
                </div>
            ))}
        </div>
    )
}

export { HikesPage };