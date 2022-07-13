import Wrapper from "./CardInfo.style";
import PropTypes from 'prop-types'; 

function CardInfo({ commonName, population, region, capital }) {
  return (
    <Wrapper>
      <h1>{ commonName }</h1>

        <div> 
        <span>
            <p style={{ fontWeight: 600}}>Population:</p> 
            {' '}
            <p>{ population.toLocaleString('en-US') }</p>
        </span>

        <span>
            <p style={{ fontWeight: 600}}>Region:</p>
            {' '}
            <p> { region }</p>
        </span>

        <span>
            <p style={{ fontWeight: 600}}>Capital:</p>
            {' '}
            <p>{ capital }</p>
        </span>
        </div>

    </Wrapper>
  );
}

CardInfo.propTypes = { 
    commonName: PropTypes.string.isRequired, 
    population: PropTypes.number.isRequired, 
    region: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired
}

export default CardInfo;
