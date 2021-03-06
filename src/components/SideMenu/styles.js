import styled from 'react-emotion'

export const MenuList = styled.ul`
    position: relative;
    background: ${props => props.theme.colors.darkGray};
    box-shadow: 2px 0 4px rgba(0,0,0,0.25);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 100%;
    box-sizing: border-box;
    > button:last-child {
        position: absolute;
        bottom: 0;
    }
    @media (min-width: 1440px) {
        box-sizing: content-box;
        width: 210px;
        button {
            position: relative;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding-left: 20px;
            width: 100%;
            height: 72px;
            svg {
                font-size: 1.4rem;
            }
            h4 {
                position: absolute;
                left: calc(50px + 8px);
                top: 50%;
                transform: translateY(-50%);
                text-align: left;
                margin: 0;
                font-size: 1rem;
                font-weight: 400;
            }
        }
        > button:last-child {
            bottom: 0;
        }
    }
`
