import styled from 'react-emotion'

export const GraphContainer = styled.div`
    position: relative;
    width: 100%;
    height: 360px;
    br {
        display: none;
    }
    .portfolio-legends {
        top: 24px;
    }
    #portfolio-graph {
        height: 100%;
    }
    .chart-balloon {
        display: flex;
        flex-direction: column;
        align-items: center;
        .plan-name {
            color: ${props => props.theme.colors.primary};
            font-size: 0.8rem;
        }
        .balloon-value {
            font-size: 1rem;
            text-align: center;
        }
    }
`

