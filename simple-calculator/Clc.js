import React,{useState,useEffect,useRef} from 'react'
import './App.css'
//install chakra
//npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
//import chakra
import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
function Clc() {
    const [result,setResult]=useState("")
    const inputref=useRef(null)
    useEffect(()=>inputref.current.focus())
    function handleclick(e) {
        setResult(result.concat(e.target.name))
    }
    function backspace(){
        setResult(result.slice(0,-1))
    }
    function clear(){
        setResult("")
    }
    function calculate(){
        try{
            setResult(eval(result).toString())
        }catch(error){
          setResult("error")
        }
    }
    return(
       <div className="calc-app"> 
        <form>
       <Input type='text' value={result} ref={inputref} variant="filled"/>

       </form>
        <div className="keypad">
            
            <Button id="clear"  onClick={clear} colorScheme="red" variant="solid"size="lg">
                clear</Button>
            <Button id="backspace" onClick={backspace} colorScheme="yellow" variant="solid"size="lg">
                c</Button> 
            <Button name="+" onClick={handleclick} colorScheme="orange" variant="solid"size="lg">
                +</Button> 
            <Button name="7" onClick={handleclick} colorScheme="blue" variant="solid"size="lg" >
                7</Button>
            <Button name="8" onClick={handleclick} colorScheme="blue" variant="solid"size="lg">
                8</Button>
            <Button name="9" onClick={handleclick} colorScheme="blue" variant="solid"size="lg">
                9</Button>
            <Button name="-" onClick={handleclick} colorScheme="orange" variant="solid"size="lg">
                -</Button>
            <Button name="4" onClick={handleclick} colorScheme="blue" variant="solid"size="lg">
                4</Button>
            <Button name="5" onClick={handleclick} colorScheme="blue" variant="solid"size="lg">
                5</Button>
            <Button name="6" onClick={handleclick} colorScheme="blue" variant="solid"size="lg">
                6</Button>
            <Button name="*" onClick={handleclick} colorScheme="orange" variant="solid"size="lg">
                *</Button>
            <Button name="1" onClick={handleclick} colorScheme="blue" variant="solid"size="lg">
                1</Button>
            <Button name="2" onClick={handleclick} colorScheme="blue" variant="solid"size="lg">
                2</Button>
            <Button name="3" onClick={handleclick} colorScheme="blue" variant="solid"size="lg">
                3</Button>
            <Button name="/" onClick={handleclick} colorScheme="orange" variant="solid"size="lg">
                /</Button>
            <Button name="." onClick={handleclick} colorScheme="yellow" variant="solid"size="lg">
                .</Button>
            <Button name="0" onClick={handleclick} colorScheme="blue" variant="solid"size="lg">
                0</Button>
            <Button id="result" onClick={calculate} colorScheme="green" variant="solid"size="lg">
                result</Button>

        </div>
        </div>
    ) 
}
export default Clc