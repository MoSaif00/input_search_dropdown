import React from 'react';
import {StyledInputField} from './styled/inputField.styles';
import {TypeLabel, ContactLabel, ArrowLabel} from './styled/labels.style';
import {
  StyledArrowDownIcon,
  StyledSearchIcon,
} from './styled/fontAwesome.style';
import {faSearch, faChevronDown} from '@fortawesome/free-solid-svg-icons';

const InputField = ({value, setValue}) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <StyledInputField
        value={value}
        onKeyUp={handleChange}
        onChange={handleChange}
        required
      />

      <ContactLabel>Contact</ContactLabel>
      <TypeLabel>
        <StyledSearchIcon icon={faSearch} />
        Type or search...
      </TypeLabel>
      <ArrowLabel>
        <StyledArrowDownIcon icon={faChevronDown} />
      </ArrowLabel>
    </>
  );
};

export default InputField;
