import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: white;
  font-size: 200px;
  font-weight: 100;
  @media screen and (max-width: 1200px) {
    font-size: 150px;
  }
  @media screen and (max-width: 800px) {
    font-size: 100px;
  }
`;

const None = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: black;
`;

const FloatViewPort = styled.span`
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
  width: 100vw;
`;

class Main extends Component {
  state = {
    time: moment().format('LTS'),
    isDisplaying: true,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: moment().format('LTS') });
    }, 100);
  }

  handleToggleVisible = () => {
    this.setState({ isDisplaying: !this.state.isDisplaying });
  };

  render() {
    const result = this.state.isDisplaying ? (
      <Wrapper>{this.state.time}</Wrapper>
    ) : (
      <None />
    );
    return (
      <>
        {result}
        <FloatViewPort>
          <Button
            variant={'secondary'}
            onClick={this.handleToggleVisible}
            size={'lg'}>
            {this.state.isDisplaying ? 'OFF' : 'ON'}
          </Button>
        </FloatViewPort>
      </>
    );
  }
}

export default Main;
