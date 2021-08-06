import styled from "styled-components";

export const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%), url(${(props) => props.image}), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 720px;
    position: relative;
    animation: fade 1s;

    @media screen and (max-height: 768px){
        height: 500px;
    }
    
    @keyframes fade {
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
`

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`

export const Text = styled.div`
    z-index: 10;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    min-height: 100px;
    color: var(--white);
    margin-right: 20px;

    h1{
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px){
            font-size: var(--fontBig);
        }
    }

    p{
        font-size: var(--fontMed);

        @media screen and (max-width: 720px){
            font-size: var(--fontSmall);
        }
    }

    @media screen and (max-width: 720px){
        max-width: 100%;
    }
`