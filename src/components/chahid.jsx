
import React, { Component } from 'react';
import Select from 'react-select';
class Accueil extends Component {

    state = {
        selectedOption: null,
      }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }
  render() {
     const options = [
        { value: 'blues', label: 'Blues' },
        { value: 'rock', label: 'Rock' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'orchestra' ,label: 'Orchestra' } 
      ];
      const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '2px dotted green',
          color: state.isSelected ? 'yellow' : 'black',
          backgroundColor: state.isSelected ? 'green' : 'white'
        }),
        control: (provided) => ({
          ...provided,
          marginTop: "5%",
        })
      }
      const { selectedOption } = this.state;

        return (
            
            <div className="outer">
            <Select options = {options}
             onChange={this.handleChange}
             styles={{ singleValue: (base) => ({ ...base, padding: 5,
                 borderRadius: 5, background: this.state.selectedOption.value,
                  color: 'white', display: 'flex' }) }}
                  isMulti
             />


            </div> 
          
        );
    }
}



export default Accueil;