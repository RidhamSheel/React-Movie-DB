import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    background: var(--darkGrey);
    align-items: center;
    min-height: 100px;
    padding: 0 20px;
`
export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    flex: 1;

    .column{
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--medGrey);
        border-radius: 10px;
        margin: 0 20px;
        padding: 5px 15px;
        width: 600px;

        :first-child{
            margin-left: 0;
        }
        :last-child{
            margin-right: 0;
        }
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;

        .column{
            margin: 20px 0;
        }
    }
`
