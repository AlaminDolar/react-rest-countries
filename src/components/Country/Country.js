import "./Country.css";
const Country = (props) => {
    // console.log(props)
    const { name, flags, capital, population, region } = props.country;
    return (
        <div className="country">
            <h3>This is : {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Capital:{capital}</h4>
            <p>Population: {population}</p>
            <p>Region: {region}</p>

        </div>
    );
};

export default Country;