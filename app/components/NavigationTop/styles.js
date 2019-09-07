import styled from 'styled-components';

export const WrapperTopNavigation = styled.div`
background: #fff;
-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.05);
-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.05);
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.05);
position: fixed;
top: 0;
z-index: 99;
width: 100%;
.nav-top-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    @media (max-width: 480px) {
        padding: 10px 10px;
    }
    .action-tool{
        display: flex;
        align-items: center;
        > * {
            margin-left: 20px;
        }
        a {
            font-size: 20px;
            display: flex;
            align-items: center;
            @media (max-width: 480px) {
                font-size: 16px;
            }
        }
        .ant-btn {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    p {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 16px;
        margin: 0px;
        color: #202121;
        line-height: 1;
        b {
            font-weight: 700;
        }
    }
    h1 {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 20px;
        margin: 0px;
        color: #202121;
        @media (max-width: 500px) {
            display: none;
        }
    }
}

`;