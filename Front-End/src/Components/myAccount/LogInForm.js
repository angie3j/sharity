import React, { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './Common'
import { Marginer } from '../Marginer';
import { AccountContext } from './AccountContext';


export function LogInForm(props) {


  const { switchToSignUp } = useContext(AccountContext);

  const changeLoginStatus = (event) => {
    props.func(event)
  }

  return <BoxContainer>
    <FormContainer>
      <Input type='email' placeholder='Email' />
      <Input type='password' placeholder='Password' />
      </FormContainer>
      <Marginer direction='vertical' margin={10} />
      <MutedLink 
      href='#'>Forgot your password?
      </MutedLink>
      <Marginer direction='vertical' margin='1.6em' />
      <SubmitButton onClick={changeLoginStatus} type='submit'>SignIn</SubmitButton>
      <Marginer direction='vertical' margin='1em' />
      <MutedLink 
      href='#'>Don't have an account? <BoldLink href='#' onClick={switchToSignUp}>SignUp</BoldLink>
      </MutedLink>
  </BoxContainer>
}