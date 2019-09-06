import styled from 'styled-components';

export const HomeWrapper = styled.section`
ul {
    list-style: none;
    padding-left: 0px;
    li {
        margin-bottom: 20px;
        .list-box {
            display: flex;
            align-items: center;
            background: #fff;
            > img {
                width: 250px;
            }
            h1,p {
                width: 100%;
                margin: 0px;
                color: #202121;
                font-family: 'Lato', sans-serif;
            }
            h1 {
                font-size: 25px;
                line-height: 1;
            }
            p {
                font-size: 18px;
                color: gray;
            }
            .short-info {
                padding: 20px;
                .cook-time {
                    color: gray;
                    font-size: 18px;
                }
            }
        }
    }
}
a {
    text-decoration: none;
}
.wlogo {
    padding: 20px 0px;
    margin-bottom: 20px;
    h1 {
        margin: 0px;
        font-family: 'Courgette', cursive;
        display: flex;
        align-items: center;
    }
    img {
        width: 50px;
    }
    p {
        font-family: 'Lato', sans-serif;
        color: gray;
        margin: 0px;
    }
}

`;