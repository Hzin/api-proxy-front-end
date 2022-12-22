import { useEffect, useState } from "react"
import { Card, CardBody, Label, Input, Form, Button } from "reactstrap"
import { getRoute } from "../services/route"

export default function Route() {
  const [route, setRoute] = useState<Array<string>>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const paisOrigem = form.elements.namedItem('pais-origem') as HTMLInputElement
    const paisDestino = form.elements.namedItem('pais-destino') as HTMLInputElement
    getRoute(paisOrigem.value, paisDestino.value)
      .then((route) => setRoute(route))
      .catch((err) => alert('Erro ao buscar rota: ' + err))
  }

  return (
    <>
      <div className="container">
        <h1>Pesquise a melhor rota entre países</h1>
        <Card>
          <CardBody>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <Label className='form-label' for='pais-origem'>
                  Sigla do país de origem
                </Label>
                <Input
                  id="pais-origem"
                  autoFocus
                  placeholder='BRA'
                  max={3}
                  min={3}
                />
              </div>
              <div>
                <Label className='form-label' for='pais-destino'>
                  Sigla do país de destino
                </Label>
                <Input
                  id="pais-destino"                
                  placeholder='PAN'
                  max={3}
                  min={3}
                />
              </div>
              <div className="mt-2">
                <Button type='submit' color='primary' block>
                  Buscar rota
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <div className="mt-2">
          <h3>Resultado</h3>
          <div>
            {route.map((pais, index) => (
              <span key={index}>
                {pais}
                {index < route.length - 1 ? " -> " : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
