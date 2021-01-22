import styled from 'styled-components';
// import { useState } from 'react';

const StyledContactDiv = styled.div`
background-color: #c1d7e6;
height: 100vh;
width: 100%;
display: flex;
justify-content: center;

h2 {
  position: absolute;
  top: 30%;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 30px;

}
form {
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 40%;
  width: 20%;

  padding: 25px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 4px 2px 7px rgba(99,99,99,0.3);
  label {
    font-size: 20px;
    color: #003C52;
    margin: 7px 0;
  }
  input {
    width: 100%;
    height: 25px;;
    font-size: 15px;
    border: 1px solid silver;
    border-radius: 10px;
  }
  textarea {
    width: 100%;
    height: 150px;
    padding: 5px;
    border: 1px solid silver;
    border-radius: 10px;
  }
  button {
    background: #D84797;
    color: white;
    width: 50%;
    padding: 10px;
    margin: 10px auto;
    font-size: 22px;
    border: none;
    border-radius: 10px;
    box-shadow: 3px 3px 4px rgba(99,99,99,0.73);
  }
  button:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}

`;


function Contact(props) {

  console.log('Contact ran ' + props.name)
  // console.log(submitHandler)
  return (
    <StyledContactDiv>
      <h2>Do you need help with a project? Send me a message!</h2>
      <form onSubmit={props.submitHandler}>
        <label>Name:
          <input
            type='text'
            value={props.name}
            onChange={e => props.setName(e.target.value)}
          ></input>
        </label>
        <label>Message:
          <textarea placeholder="write your text here..."></textarea>
        </label>
        <button type='submit' value='Submit'>Send</button>
      </form>

      {/* <ThankYou name={props.name} /> */}
    </StyledContactDiv>
  );
}

export default Contact;

//  onSubmit={name.submitHandler}
// onClick={name.submitHandler}