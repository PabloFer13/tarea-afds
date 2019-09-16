import React, { Component } from 'react';
import styled from 'styled-components';
import { Tex } from 'react-tex';
import L1 from './services/rulesetL1';
import L2 from './services/rulesetL2';
import L3 from './services/rulesetL3';
import L4 from './services/rulesetL4';
import L5 from './services/rulesetL5';
import L6 from './services/rulesetL6';

const Container = styled.div`
  margin-top: 50px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palabra: '',
      isValidL1: false,
      isValidL2: false,
      isValidL3: false,
      isValidL4: false,
      isValidL5: false,
      isValidL6: false,
      firstSubmit: true
    }
  }

  handleChange = ({ target }) => {
    const { value: palabra } = target;
    const validRegExp = /[c-z]+|[A-Z]+|\d+/;
    if (!validRegExp.test(palabra)) {
      this.setState({ palabra });
    }
  }

  verifyWord = () => {
    const { palabra } = this.state;
    const isValidL1 = L1(palabra);
    const isValidL2 = L2(palabra);
    const isValidL3 = L3(palabra);
    const isValidL4 = L4(palabra);
    const isValidL5 = L5(palabra);
    const isValidL6 = L6(palabra);

    this.setState({
      isValidL1,
      isValidL2,
      isValidL3,
      isValidL4,
      isValidL5,
      isValidL6,
      firstSubmit: false
    });
  }

  getCell = cell => {
    const { state: cells } = this;
    return cells[`isValid${cell}`] ? 'Pertenece al lenguaje' : 'No pertenece al lenguaje';
  }

  render() {
    const {
      palabra,
      firstSubmit
    } = this.state;
    return (
      <Container className="contianer">
        <div className="row">
          <div className="col-4"></div>
          <div className="col">
            <form className="form -inline">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="validateString" className="sr-only">Palabra</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validateString"
                      placeholder="Ingrese la palabra a verificar"
                      value={palabra}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-primary mb-2" onClick={this.verifyWord}>Identificar Palabra</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Lenguaje</th>
                  <th scope="col">Palabra pertenece al Lenguaje</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Tex texContent="L_{1}=\{abba\}" /></td>
                  <td>{firstSubmit ? null : this.getCell('L1')}</td>
                </tr>
                <tr>
                  <td><Tex texContent="L_{2}=\{abba, ababba\}" /></td>
                  <td>{firstSubmit ? null : this.getCell('L2')}</td>
                </tr>
                <tr>
                  <td><Tex texContent="L_{3}=\{a\}^{*}" /></td>
                  <td>{firstSubmit ? null : this.getCell('L3')}</td>
                </tr>
                <tr>
                  <td><Tex texContent="L_{4}=\{a\}^{+}" /></td>
                  <td>{firstSubmit ? null : this.getCell('L4')}</td>
                </tr>
                <tr>
                  <td><Tex texContent="L_{5}=\{w| |w| \geq 3\}" /></td>
                  <td>{firstSubmit ? null : this.getCell('L5')}</td>
                </tr>
                <tr>
                  <td><Tex texContent="L_{6}=\{w| |w|_{a} \geq 3\}" /></td>
                  <td>{firstSubmit ? null : this.getCell('L6')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
