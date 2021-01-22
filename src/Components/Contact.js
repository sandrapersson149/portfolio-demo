import styled from 'styled-components';
import { useState } from 'react';

const StyledContactDiv = styled.div`
background-color: #EBEBEB;
height: 100vh;
`;

// function ThankYou({ name }) {
//   return (
//     <h2>Thank you {name}</h2>
//   )
// }


function Contact(props) {

  console.log('Contact ran ' + props.name)
  // console.log(submitHandler)
  return (
    <StyledContactDiv>
      <form onSubmit={props.submitHandler}>
        <label>Name:
          <input
            type='text'
            value={props.name}
            onChange={e => props.setName(e.target.value)}
          ></input>
        </label>
        <label>Message:
          <textarea></textarea>
        </label>
        <input type='submit' value='Submit'></input>
      </form>

      {/* <ThankYou name={props.name} /> */}
    </StyledContactDiv>
  );
}

export default Contact;

//  onSubmit={name.submitHandler}
// onClick={name.submitHandler}