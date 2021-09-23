import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing  : border-box;
        outline     : none;
    }
    html,
    body{
        margin: 0;
        padding: 0;
    }
    @media (max-width: 576px) and (min-width: 360.99px) {
        html{
            font-size:11px
        }
    }
    @media (max-width: 360px) {
        html{
            font-size:8px
        }
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color:#000000 !important;
        color:white
    }
    .full-height{
        height: 100%;
    }
    .full-width {
        width: 100%;
    }
    .height-inherit{
        height:inherit
    }
    .flex {
        display: flex;
    }
    .f-v-center{
        align-items: center;
    }
    .f-h-center{
        justify-content: center;
    }
    .plain-notification{
        background-color: #fff;
    }

    .elipsis {
        overflow        : hidden;
        text-overflow   : ellipsis;
        white-space     : nowrap;
    }
    
    .no-data-text {
        color       : #707070;
        font-size   : 15px;
        text-align  : center;
        width       : 100%;
    }

    .cursor-pointer{
        cursor: pointer;
    }
    //Color Palett
    .bg-white{
        background-color: #fff;
    }
    .bg-black{
        background-color: #000000;
    }
    .bg-black-light{
        background-color:#262626
    }
    .bg-orange{
        background-color: #ed5a23;
    }
    .bg-green{
        background-color: #76c047;
    }
    .white-text{
        color:#fff;
    }
    .black-text{
        color:#000000;
    }
    .orange-text{
        color: #ed5a23;
    }
    .green-text{
        color: #76c047;
    }

    .fs-12{
        font-size:12px;
    }
    .fs-14{
        font-size:14px;
    }
    .fs-16{
        font-size:16px;
    }
    .fs-18{
        font-size:18px;
    }
    .fs-20{
        font-size:20px;
    }
    .fs-22{
        font-size:22px;
    }
    .fs-24{
        font-size:24px;
    }
    .fs-26{
        font-size:26px;
    }

    .ma-0{
        margin:0 !important
    }
    .mt-0{
        margin-top:0 !important
    }
    .mr-0{
        margin-right:0 !important
    }
    .ml-0{
        margin-left:0 !important
    }
    .mb-0{
        margin-bottom:0 !important
    }
    .m-auto{
        margin:auto !important
    }
    .pa-0{
        padding:0 !important
    }
    .pt-0{
        padding-top:0 !important
    }
    .pr-0{
        padding-right:0 !important
    }
    .pl-0{
        padding-left:0 !important
    }
    .pb-0{
        padding-bottom:0 !important
    }
    .bottom0{
        bottom:0
    }
    .left0{
        left:0
    }
    .right0{
        right:0
    }
    .border{
        border:1px solid
    }
`;

export default GlobalStyle