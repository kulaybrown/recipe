import styled from 'styled-components';

export const WrapperNavigation = styled.div`
max-width: calc(768px + 16px * 2);
ul {
    background: #fff;
    padding-left: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0px;
    margin-bottom: 0px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.05);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.05);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.05);
    li {
        list-style: none;
        a {
            font-family: 'Lato', sans-serif;
            .anticon {
                font-size: 20px;
                &.anticon-plus-circle {
                    font-size: 30px;
                }
            }
        }
    }
}
label {
    font-family: 'Lato', sans-serif;
}
`;