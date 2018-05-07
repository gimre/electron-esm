
import styled from 'cjs:styled-components'
import jsx from  './utils/jsx'

const Container = styled.div`
    background-color: red;
    height: 50px;
    width: 100px;
`

const sayHi = ( ) => console.log( '!' )

export default ( ) => jsx`
    <${ Container } onClick=${ sayHi }>
        hai thar
    </${ Container }>
`
