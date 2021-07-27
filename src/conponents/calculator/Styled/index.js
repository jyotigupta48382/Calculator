import styled from 'styled-components';
import ReactDom from 'react-dom';
import React from "react";
export const Container = styled.div`
display: grid;
justify-content: center;
align-content: center;
width: 400px;
margin: 40px auto;
grid-template-columns: repeat(4,100px);
grid-template-rows: minmax(120px, auto) repeat(5,100px);
box-shadow: 2px 2px 10px #452;
border-radius: 10px;`


export const Screen = styled.div`
grid-column:1/-1;
background-color: grey;
display: flex;
justify-content: space-around;
flex-direction:column;
padding:10px;
word-wrap:break-word;

border:1px outset black;
word-break:break-all;
text-align:right;
border-top-left-radius:10px;
border-top-right-radius:10px;`

export const Previous= styled.div`
color:white;
font-size:1.5rem;
`

export const Current=styled.div`
color:white;
font-size:2.5rem;
`

export const Button = styled.button`
cursor:pointer;
font-size:2rem;
border:1px outset black;
outline:none;
background-color:pink;
grid-columns-Span:2;
&:hover {
    background-color:lightgreen;
}`;
export const But = styled.button`
cursor:pointer;
font-size:2rem;
border:1px outset black;
outline:none;
background-color:lightblue;
&:hover {
    background-color:pink;
}`;

export const Ton = styled.button`
cursor:pointer;
font-size:2rem;
border:1px outset black;
outline:none;
background-color:lightyellow;
&:hover {
    background-color:white;
}`;
