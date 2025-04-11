import { css } from "@emotion/react";

export const header = css`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 1rem 3rem;
    width: 100%;
    height: 10rem;
    border-bottom: 0.1rem solid #dbdbdb;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    box-shadow: 0 0.1rem 0.3rem 0.1rem #00000017;
    

    & > img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80%;
        width: auto;
    }

    & > p {
        display: flex;
        height: 100%;
        width: 20%;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: 550;
        margin: 0; 
        cursor: default;
    }
`;

export const pay = css`
    box-sizing: border-box;
    display: flex;
    padding: 2rem;
    width: 100%;
    height: 100%;
    background-color:#fafafa;

    & > div {
        display: flex;
        width: 100%;
        font-size: 1.1rem;
        overflow-y: auto;

        & > ul {
            flex-grow: 1;
            margin: 0;
            padding: 0;
            list-style-type: circle;

            & > li {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                padding: 0.6rem;
                width: 100%;
            }
        }

    
        &::-webkit-scrollbar {
            display: none;
        }
    }
    
    & > span {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        & > p {
            box-sizing: border-box;
            display: flex;
            margin: 0;
            width: 10rem;
            height: 10rem;
            justify-content: center;
            align-items: center;
            background-color: #1c7a2c;
            border-radius: 1rem;
            font-size: 1.4rem;
            color: white;
            cursor: pointer;
            &:nth-of-type(1) {
                margin-bottom: 1rem;
            }
        }
    }
`;

export const xUpDown = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1rem;
    font-weight: 550;
    overflow-y: auto;
        
    & ::-webkit-scrollbar {
        display: none;
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 0.1rem;
        margin: 1rem;
    }

    & > div > div {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
    }

    & button {
        font-size: 0.8rem;
        font-weight: 550;
        justify-content: center;
        align-items: center;
        margin-right: 1px;
    }
`;

export const footer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30%;
    width: 100%;
    border-top: 0.1rem solid #dbdbdb;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    box-shadow: 0 0.1rem 0.3rem 0.1rem #00000017;
    background-color: #fafafa;

    & > div {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        
        & > p {
            margin: 0;
            font-size: 2rem;
            cursor: default;
        }

        & > div {
            display: flex;
            width: 45%;
            height: 7rem;
            margin: 1rem;
            border-radius: 1rem;
            justify-content: center;
            align-items: center;
            background-color: #1c7a2c;
            font-size: 1.6rem;
            color: white;
            
            
        }
    }
`;

export const cartList = css`
    display: flex;
    width: fit-content;
    font-size: 1.4rem;
    cursor: default;
`;

export const cartListButtons = css`
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-left: 1rem;

    & > div {
        display: flex;
        flex-direction: column;
        
        & > button {
            border: none;
            cursor: pointer;
            background-color: transparent;
            font-size: 1.2rem;
            line-height: 0.8rem;
        }
    }

    & > span  {
        & > button {
            border: none;
            cursor: pointer;
            background-color: transparent;
            font-size: 1.2rem;
            margin-left: 1rem;
            background-color: #db4455;
            border-radius: 0.4rem;
            padding: 0.3rem 1rem;
            color: #fafafa;
        }
    }
`;