import styled from 'styled-components';

export const HomeWrapper = styled.section`
max-width: calc(1200px + 16px * 2);
margin: 0 auto;
width: 100%;
margin-top: 70px;
padding: 0px 15px;
.list-box-container {
    .list-box {
        // display: flex;
        // align-items: flex-start;
        margin-bottom: 20px;
        background: #fff;
        > img {
            width: 100%;
        }
        h1,p {
            width: 100%;
            margin: 0px;
            color: #202121;
            font-family: 'Lato', sans-serif;
        }
        h1 {
            font-size: 20px;
            line-height: 1;
            margin-bottom: 5px;
        }
        p {
            font-size: 14px;
            color: gray;
            line-height: 1;
        }
        .short-info {
            padding: 20px;
            .cook-time {
                color: gray;
                font-size: 14px;
                margin-top: 8px;
            }
        }
    }
}
ul {
    list-style: none;
    padding-left: 0px;
    li {
        margin-bottom: 20px;
        
    }
}
a {
    text-decoration: none;
}
// .wlogo {
//     padding: 20px 0px;
//     margin-bottom: 20px;
//     h1 {
//         margin: 0px;
//         font-family: 'Courgette', cursive;
//         display: flex;
//         align-items: center;
//     }
//     img {
//         width: 50px;
//     }
//     p {
//         font-family: 'Lato', sans-serif;
//         color: gray;
//         margin: 0px;
//     }
// }

`;