import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap'
import Country from '../constants/interfaces/country'

interface CountryModalProps {
  countryDetails: Country | null
  open: boolean
  toggleModal: () => void
}

const CountryModal = (props: CountryModalProps) => {
    // ** Props
  const { countryDetails, open, toggleModal } = props

  return (
    <Modal
      isOpen={open}
      toggle={toggleModal}
      className='modal-dialog-centered modal-xl'
      backdrop={true}
      modalClassName='modal-primary'
    >
      <ModalHeader tag='h4' toggle={toggleModal}>{countryDetails?.name.common}</ModalHeader>
      <ModalBody>
        <Row>
          <Col md='3'>
            <div>
              <p className='fs-5'>
                <strong>População:</strong> {countryDetails?.population ? countryDetails?.population : "N/A"}
              </p>
            </div>
            <div>
              <p className='fs-5'>
                <strong>Timezone:</strong> {countryDetails?.timezones ? countryDetails?.timezones.map(
                  (timezone, index) => {
                    return (
                      <span key={index}>
                        {timezone}
                        {index < countryDetails?.timezones.length - 1 ? ", " : ""}
                      </span>
                    )
                  }
                ) : "N/A"}
              </p>
            </div>
          </Col>
          <Col md='3'>
            <div>
              <p className='fs-5'>
                <strong>Moedas: </strong> 
                {
                  countryDetails?.currencies ?
                  Object.keys(countryDetails?.currencies).map((currency, index) => {
                    return (
                      <span key={index}>
                        {currency}
                        {index < Object.keys(countryDetails?.currencies).length - 1 ? ", " : ""}
                      </span>
                    )
                  })
                  :
                  "N/A"
                }
              </p>
            </div>
            <div>
              <p className='fs-5'>
                <strong>Línguas: </strong> 
                {
                  countryDetails?.languages ?
                  Object.entries(countryDetails?.languages).map((language, index) => {
                    return (
                      <span key={index}>
                        {language[1]}
                        {index < Object.entries(countryDetails?.languages).length - 1 ? ", " : ""}
                      </span>
                    )
                  })
                  :
                  "N/A"
                }
              </p>
            </div>
          </Col>
          <Col md='3'>
            <div>
              <p className='fs-5'>
                <strong>Capital:</strong> {countryDetails?.capital ? countryDetails?.capital : "N/A"}
              </p>
            </div>
            <div>
              <p className='fs-5'>
                <strong>Blocos econômicos:</strong> N/A
              </p>
            </div>
          </Col>
          <Col md='3'>
            <div>
              <p className='fs-5'>
                <strong>Países fronteiriços:</strong> {countryDetails?.borders ? countryDetails?.borders.map(
                  (border, index) => {
                    return (
                      <span key={index}>
                        {border}
                        {index < countryDetails?.borders.length - 1 ? ", " : ""}
                      </span>
                    )
                  }
                ) : "N/A"}
              </p>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  )
}

export default CountryModal