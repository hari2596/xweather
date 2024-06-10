import './card.css';

const Card = ({title, data, unit}) =>
{
    return(
        <div className="weather-card">
            <h3>{title}</h3>
            <p>{data} {unit}</p>
        </div>
    )
}

export default Card;