import React, {useState, useEffect, useRef} from 'react'

//Icon
import SearchIcon from '../../images/search-icon.svg'

//Styles
import { Wrapper, Content } from './Search.style'

export const SearchBar = ({setSearchTerm}) => {

    const [state, setState] = useState("");
    const initial = useRef(true);

    useEffect(() => {

        if(initial.current){
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer);
    }, [setSearchTerm, state])
    return (
        <Wrapper>
            <Content>
                <img src = {SearchIcon} alt = "search-icon" />
                <input type="text" placeholder="Search Movie" onChange = {(e) => setState(e.target.value)} value = {state}/>
            </Content>
        </Wrapper>
    )
}