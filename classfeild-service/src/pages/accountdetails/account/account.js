import React,{useEffect,useState} from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components'

const wrapper = styled.div`
color:${props=>props.theme.motar};
font-size:.9rem;

`

const Account= ()=>{

    const session = useSelector(state=>state.session)

    return(
        <wrapper>
            logged in as {session.user.name}
        </wrapper>
    )


}

export default Account