import "./Country.css";
const Country = (props) => {
    console.log(props)
    return (
        <div className="country">
            <h3>This is : {props.country.name.common}</h3>
            <img src={props.country.flags.png} alt="" />
            <h4>Capital:{props.country.capital}</h4>
            <p>Population: {props.country.population}</p>

        </div>
    );
};

export default Country;