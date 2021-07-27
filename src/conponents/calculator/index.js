
import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import { Container,Screen , Previous, Current, But,Ton,Button} from "./Styled"

export default function Calculator(){
    
    const [pre, setPre]=useState('');
    const [current, setCurrent]=useState('');
    const [operation, setOperation]=useState('');

    const op=(el) =>{
        setOperation(el.target.getAttribute('data'));
         if(current=='')return '';
         if(pre!==''){
             let value=compute();
             setPre(value);
             setCurrent(value);
             setOperation('')
         }else {setPre(current)
         }
         setCurrent('')
        
                

          
            
           
        }

      
    

    const handelequal =(ele)=>{
        const value=ele.target.getAttribute('data')
        if(value==='='&& current==='' && pre===''){
            return alert('Type an expression');
        }
        else if(value==='='){
            setPre(compute())
            setOperation('')
            return setCurrent(compute())
            
            
        }    }
    const compute=()=>{
            let result;
            let prenum=parseFloat(pre)
            let currnum=parseFloat(current)
            if(isNaN(prenum)|| isNaN(currnum))return
            switch(operation){
                case '/':
                    result= prenum/currnum;
                    break;
                case '*':
                    result=prenum*currnum;
                    break;
                case '-':
                    result=prenum-currnum;
                    break;
                case '+':
                    result=prenum+currnum;
                    break;
                default:
                    return '';
            }
            return result;

    }

    const handleclear=()=>{
        setCurrent('');
        setPre('');
        setOperation('');
    }

    const handledel=()=>{
        setCurrent(current.slice(0,-1));
     }
    
    const appendValue=(ele)=>{ 
        const value=ele.target.getAttribute('data')
            if(value==='AC'){
                return setCurrent(''),setPre(''),setOperation('')
                }
            if(value==='.' && current.includes(".")){ return ''}
                setCurrent(current+value);
               }
    return (
        <Container>
            <Screen>
                <Current>{current}</Current>
                < Previous> {pre} {operation} </Previous>
            </Screen>
            <Ton data={'AC'} onClick={handleclear}>AC</Ton>
            <Ton data={'D'} onClick={handledel}>DEL</Ton>
        
            <Button data={'7'} onClick={appendValue}>7</Button>
            <Button data={'8'}  onClick={appendValue}>8</Button>
            <Button data={'9'} onClick={appendValue}>9</Button>  
            <But data={'/'} onClick={op}>/</But>
            <Button data={'4'}  onClick={appendValue}>4</Button>
            <Button data={'5'} onClick={appendValue}>5</Button>
            <Button data={'6'}  onClick={appendValue}>6</Button>
            <But data={'-'} onClick={op} >-</But>
            <Button data={'1'}  onClick={appendValue}>1</Button>
            <Button  data={'2'} onClick={appendValue}>2</Button>
            <Button  data={'3'} onClick={appendValue}>3</Button>
            <But data={'*'} onClick={op}>x</But>
            <Button  data={'.'} onClick={appendValue}>.</Button>
            <Button data={'0'} onClick={appendValue}>0</Button>
            <But data={'='} onClick={handelequal} >=</But>
            <But data={'+'} onClick={op} >+</But>

            

        </Container>
    )
}
