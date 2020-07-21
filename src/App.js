import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Button from './components/UI/Button/Button';
import DataItem from './components/DataItem/DataItem';

class App extends Component {

  // [{"name":"Opa", "year":"2020"}, {"name":"Tom", "year":"1908"}, {"name":"Nata", "year":"2001"}, {"name":"Ban", "year":"1980"}]
  state = {
    unloadValues: '',
    readOnly: false,
    flagForLoadData: false,
    load: "Load",
    unload: "Unload",
    inputControls: {
      textArea: {
        value: [],
        touched: false,
        errorMessage: 'Введите корректные данные',
        isValid: false
      },
      addFile: {

      }
    }
  }

  controlValidate (value) {
    const re = /^\[({(,?\s?"[\wа-яА-ЯёЁ]+"\s?:\s?"[^".?]*")+},?\s?)+\]$/;
    return re.test(String(value).toLowerCase());
  }

  onChangeHandler = event => {
    let formControl = {...this.state.inputControls}
    let control = {...formControl.textArea}
    control.value = event.target.value
    control.isValid = this.controlValidate(event.target.value)
    control.touched = true
    if (control.isValid) {
      control.value = JSON.parse(event.target.value)
    } 
    formControl.textArea = control
    this.setState({
      inputControls: formControl,
      unloadValues: event.target.value
    })
  }

  onClickLoad = () => {
    this.setState({
      flagForLoadData: !this.state.flagForLoadData,
      unloadValues: '',
      readOnly: !this.state.readOnly
    })
  }

  onClickUnload = () => {
    let value = JSON.stringify(this.state.inputControls.textArea.value)
    let changeState = this.state
    changeState.unloadValues = value
    this.setState({
      flagForLoadData: !this.state.flagForLoadData,
      readOnly: !this.state.readOnly,
      changeState
    })
  }

  changeValuesHandler (value, item, index) {
    const ITEM = {...this.state.inputControls.textArea.value}
    if (item) {
      ITEM[index].name = value
    } else {
      ITEM[index].year = value
    }
    this.setState({
      ITEM
    })
  }

  deleteHandler = index => {
    let items = {...this.state.inputControls.textArea}
    items.value.splice(index, 1)
    this.setState({
      items
    })
  }

  onClickAdd = () => {
    let items = {...this.state.inputControls.textArea}
    items.value.push({name:'', year:''})
    this.setState({
      items
    })
    console.log(items)
    console.log(this.state.inputControls.textArea.value)
  }

  render () {
    let data = null

    if (this.state.flagForLoadData) {
      data = this.state.inputControls.textArea.value.map((item, index) => {
        return (
          <DataItem 
            key={index}
            name={item.name}
            year={item.year}
            changeValuesHandler={event => this.changeValuesHandler(event.target.value, event.target.dataset.name, index)}
            deleteHandler={(e) => this.deleteHandler(index, e)}
          />
        )
      })
    }

    return (
        <div className="text-center text-uppercase text-info mt-3">
          <h1>Primitive editor of data table</h1>
          <div className="input-group justify-content-center mb-5 mt-5">
            <Input 
              onChange={event => this.onChangeHandler(event)}
              value={this.state.unloadValues}
              readOnly={this.state.readOnly}
            />
            <div className="input-group-append" id="btns">
              {
                !this.state.flagForLoadData
                  ? <Button
                      isValid={this.state.inputControls.textArea.isValid}
                      onClick={this.onClickLoad}
                    >
                      {this.state.load}
                    </Button>
                  : <Button
                      isValid={this.state.inputControls.textArea.isValid}
                      onClick={this.onClickUnload}
                    >
                      {this.state.unload}
                    </Button>  
              }

            </div>
          </div>

          {
            !this.state.inputControls.textArea.isValid && this.state.inputControls.textArea.touched
              ? <span className="text-danger">{this.state.inputControls.textArea.errorMessage}</span>
              : null
          }
          {
            this.state.flagForLoadData
            ? <button type="button" onClick={this.onClickAdd} className="btn btn-primary btn-circle fixed-bottom">Add</button>
            : null
          }
          {data}
        </div>
    )
  }
}

export default App;
