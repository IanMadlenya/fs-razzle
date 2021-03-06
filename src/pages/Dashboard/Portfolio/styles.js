import styled from 'react-emotion'
import { Table, TableHead } from 'components/Table'

export const PortfolioTable = styled(Table)`
    margin: 0 16px;
    width: calc(100% - 32px);
    box-sizing: border-box;

    .name {
        display: flex;
        flex-direction: column;
        .ticker {
            position: relative;
            padding-left: 16px;
            box-sizing: border-box;
            margin-top: 4px;
            font-weight: 100;
            &::before {
                position: absolute;
                top: 50%;
                left: 0;
                border-radius: 50%;
                transform: translateY(-50%);
                content: '';
                height: 8px;
                width: 8px;
                background: ${props => props.theme.colors.primary};
            }
        }
    }

    .return.positive {
        color: ${props => props.theme.colors.secondary}
    }
    .return.negative {
        color: ${props => props.theme.colors.error}
    }
`

export const PortfolioTableHead = styled(TableHead)`
    @media (max-width: 850px) {
        .days-owned {
            display: none;
        }
    }
    @media (max-width: 720px) {
        .last-price {
            display: none;
        }
    }
    @media (max-width: 600px) {
        .cost-basis {
            display: none;
        }
    }
    @media (max-width: 450px) {
        .allocation {
            display: none;
        }
    }
`