import styled from 'styled-components';

export const DetailWrapper = styled.div`
max-width: calc(1200px + 16px * 2);
margin: 0 auto;
width: 100%;
margin-top: 70px;
padding: 0px 15px;
margin-bottom: 20px;
.recipe-cont {
    background: #fff;
    > img {
        width: 100%;
    }
}
.recipe-header {
    padding: 20px;
    @media (max-width: 480px) {
        padding: 10px;
    }
    h2 {
        font-family: 'Lato', sans-serif;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 0px;
    }
    p {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
    }
}
.ingredients {
    padding: 20px;
    @media (max-width: 480px) {
        padding: 10px;
    }
    h3 {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        font-weight: 700;
    }
}
.ant-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    i {
        padding-right: 10px;
    }
}
.ant-collapse-header {
    display: flex;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #202121!important;
    cursor: pointer!important;
    padding: 12px 16px!important;
    @media (max-width: 480px) {
        padding: 5px 5px!important;
    }
}
.ingredient-side {
    font-weight: 400;
    color: gray;
}
.item-no-collapse {
    padding: 12px 16px;
    p {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #202121;
        margin-bottom: 0px;
        span {
            font-weight: 400;
            color: gray;
        }
    }
}
.ant-collapse {
    border: 0px;
    background: #fff;
    > .ant-collapse-item {
        border: 0px;
        &:hover {
            background: #F3F7FB;
        }
    }
}
.ant-collapse-content {
    border: 0px;
    > {
        .ant-collapse-content-box {
            padding: 0px 0px 10px 30px;
        }
    }
}
.anticon-tag {
    padding-left: 10px;
    &.event {
        color: #eb2f96;
    }
    &.local {
        color: black;
    }
    &.promocode {
        color: #fa8c16;
    }
    &.sale {
        color: #f5222d;
    }
}
.with-tag {
    p {
        font-family: 'Lato', sans-serif;
        color: gray;
        margin-bottom: 0px;
    }
    b {
        font-weight: 700;
        color: black;
        padding: 1px 3px;
        border: 1px solid #c6c6c6;
        border-radius: 3px;
        background: #e7e7e7;
    }
}
`;