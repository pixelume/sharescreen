import React from 'react'
import { Input, RadioLabel, Formfield } from '../FormStyles';

const RadioButton = ({ label, description, value, onChange }) => {
  return (
    <Formfield width='50%' radio>
      <RadioLabel>
        <Input type="radio" display='inline' checked={value} onChange={onChange} />
        <span style={{fontWeight: 'bold'}}>{label}</span>
        {description && (
          <><br/><br/><span style={{fontStyle: 'italic', fontSize: '0.8em'}}>{description}</span></>
        )}
      </RadioLabel>
    </Formfield>
  );
};

export default RadioButton