import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({
  children,
  ...otherProps
}) => {
  const { submitForm, isSubmitting} = useFormikContext();

  const handleSubmit = () => {
    submitForm ()
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
    
    
  }

  return (
    <Button disabled={isSubmitting} 
      {...configButton} 
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;
