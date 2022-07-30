import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
`

const Texto = styled.p`

`

const Precio = styled.p`

`

const Resultado = ({resultado}) => {
  
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
    <Contenedor>
        <Precio>El Precio es de: <span>{PRICE}</span></Precio>
        <Texto>El Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>El Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
    </Contenedor>
  )
}

export default Resultado