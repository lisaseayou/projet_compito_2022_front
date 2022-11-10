import React from 'react';
import Select from 'react-select'
const customStyles = {
    option: (provided: any, state: { isSelected: any; }) => ({
      ...provided,
      borderBottom: '1px solid #3B73AB',
      color: state.isSelected ? '#e0e7f2' : '#3B73AB',
      padding: 10,
    }),
    control: (provided: any) => ({
        ...provided,
      // none of react-select's styles are passed to <Control />
      width: 400,
      margin: 15,
      border: '1px solid #3B73AB'
    }),
    singleValue: (provided: any, state: { isDisabled: any; }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
const SelectInput = () => {
    const options = [
        { value: 'jerem', label: 'Jeremy' },
        { value: 'anais', label: 'Anais' },
        { value: 'alex', label: 'Alexandre' }
      ]
    return (
        <>
             <Select options={options} styles={customStyles}/>
        </>
    );
}

export default SelectInput;