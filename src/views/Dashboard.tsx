import { useEffect, useState } from "react"
import { Card, CardBody } from "reactstrap"
import CountryModal from "../components/CountryModal"
import Country from "../constants/interfaces/country"
import { getCountries } from "../services/countries"

export default function Dashboard() {
  const [countries, setCountries] = useState<Country[]>([])
  const [countrySelected, setCountrySelected] = useState<Country | null>(null)

  useEffect(() => {
    getCountries().then((countries) => setCountries(countries))
  }, [])

  return (
    <>
      <div className="container">
        <h1>Países</h1>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {countries.map((country, index) => (
            <Card key={index} className="p-2 bg-light" onClick={() => setCountrySelected(country)}>
              <img src={country.flags.png} alt={country.name.common} />
              <CardBody>
                <h5>{country.name.common}</h5>
                <div>
                  <strong>Sigla:</strong> {country.fifa ? country.fifa : "N/A"}
                </div>
                <div>
                  <>
                    <strong>Moedas: </strong> 
                    {
                      country.currencies ?
                      Object.keys(country.currencies).map((currency, index) => {
                        return (
                          <span key={index}>
                            {currency}
                            {index < Object.keys(country.currencies).length - 1 ? ", " : ""}
                          </span>
                        )
                      })
                      :
                      "N/A"
                    }
                  </>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <CountryModal
        open={countrySelected !== null}
        countryDetails={countrySelected!}
        toggleModal={() => setCountrySelected(null)}
      />
    </>
  )
}
