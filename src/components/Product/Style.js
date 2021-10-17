import styled from 'styled-components'
import { Wrapper } from '../../styles/GlobalStyles'

export const Container = styled(Wrapper)`
    display: flex;
    padding-top: 90px;

    @media (max-width: 768px) {
        padding: 0;
        padding-top: 0;
        flex-direction: column;
    }
`
export const Left = styled.div`
    flex: 1;
    .images{
        width: 82%;
        @media (max-width: 768px) {
            width: 100%;
        }

    }
    .selected-image{
        height: 400px;
    }
`
export const Right = styled.div`
    flex: 1;
    .product-details{
        max-width: 450px;
    }
`