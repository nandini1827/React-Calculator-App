import React, {useState} from 'react'
import { Container, Current, Previous, Screen, Button, CalIcon} from '../styles/Main';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

const Calculator = () => {

  const [current, setCurrent] = useState('');
  const [previous, setPrevious] = useState('');
  const [operations, setOperations] = useState('');

  const appendValueHandler = (el) => {
    const value = el.target.getAttribute('data');
    if(value === '.' && current.includes('.')) return;
    setCurrent(current + value);
  }

  const deleteHandler = () => {
    setCurrent(String(current).slice(0,-1))
  }

  const allClearHandler = () => {
    setCurrent('');
    setOperations('');
    setPrevious('');
  }
  
  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  const operationHandler = (el) => {
      if(current === '') return
      if(previous !== ''){
        let value = compute()
        setPrevious(value)
      }
      else{
        setPrevious(current)
      }
      setCurrent('');
      setOperations(el.target.getAttribute('data'))
  }

  const percentHandler = (el) => {
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    let value;
    if(current === '') return
    if(previous !== ''){
      value = ((currentNumber/100)*previousNumber)+previousNumber;
    }
    else{
      value = currentNumber/100;
    }
    setCurrent(value);
    setPrevious('');
    setOperations('');
  }

  const invertHandler = (el) => {

    if(current === '') return
    if(current.charAt(0)=== '-'){
      setCurrent(current.substring(1));
    }
    else{
      setCurrent('-' + current);
    }
    setPrevious('');
    setOperations('');
  }

  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevious("");
    setOperations("");
    }

  return (
    <Container>
      <Screen>
        <CalIcon>
          <CalculateOutlinedIcon fontSize="large"/>
        </CalIcon>
        <Previous>{previous} {operations}</Previous>
        <Current>{current}</Current>
      </Screen>
      <Button onClick={allClearHandler} allClear>AC</Button>
      <Button onClick={deleteHandler}><BackspaceOutlinedIcon/></Button>
      <Button data={'%'} onClick={percentHandler} operation>%</Button>
      <Button data={'÷'} onClick={operationHandler} operation>÷</Button>
      <Button data={7} onClick={appendValueHandler}>7</Button>
      <Button data={8} onClick={appendValueHandler}>8</Button>
      <Button data={9} onClick={appendValueHandler}>9</Button>
      <Button data={'x'} onClick={operationHandler} operation>×</Button>
      <Button data={4} onClick={appendValueHandler}>4</Button>
      <Button data={5} onClick={appendValueHandler}>5</Button>
      <Button data={6} onClick={appendValueHandler}>6</Button>
      <Button data={'+'} onClick={operationHandler} operation>+</Button>
      <Button data={1} onClick={appendValueHandler}>1</Button>
      <Button data={2} onClick={appendValueHandler}>2</Button>
      <Button data={3} onClick={appendValueHandler}>3</Button>
      <Button data={'-'} onClick={operationHandler} operation>-</Button>
      <Button data={'.'} onClick={appendValueHandler} decimal>.</Button>
      <Button data={0} onClick={appendValueHandler}>0</Button>
      <Button data={'+/-'} onClick={invertHandler} operation>+/-</Button>
      <Button onClick={equalHandler} operation equals>=</Button>
      {/* <Button gridSpan={2} onClick={equalHandler} operation equals>=</Button> */}
    </Container>
  )
}

export default Calculator