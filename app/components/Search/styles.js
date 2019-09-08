import styled from 'styled-components';

export const SearchWrapper = styled.div`
> div {
    position: fixed;
    top: 10px;
    z-index: 999;
    right: 150px;
    display: flex;
    align-items: center;
    @media (max-width: 480px) {
        right: 100px;
    }
    input {
        width: 200px;
        @media (max-width: 550px) {
            width: 100px;
        }
    }
    a {
        font-size: 20px;
        display: flex;
        align-items: center;
        position: absolute;
        right: 6px;
        z-index: 9;
        @media (max-width: 480px) {
            font-size: 16px;
        }
    }
}
    
`;