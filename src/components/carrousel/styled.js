/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

const dependencies = `
  transition: 0.5s all;
  position: absolute;
  margin: 0px;
  transform: translateX(0px);
  font-family: sans-serif;
`;

export const Scroller = styled.section`
  bottom: 4px;
  height: 472px;
  padding-left: 23px;
  position: absolute;
  transition: 1s all;
  width: ${(props) => (props.width ? `calc(${props.width} * (329px + 12px) + 100vw)` : 'auto')};
  transform: ${(props) =>
    props.position ? `translateX(-${props.position * (329 + 12)}px)` : 'translateX(0px)'};
`;

export const Item = styled.div`
  background-color: transparent;
  border-radius: 12px;
  color: white;
  float: left;
  height: 433px;
  margin-right: 12px;
  overflow: hidden;
  position: relative;
  width: 329px;
  &:after {
    background: #00000026;
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;

export const Place = styled.img`
  ${dependencies}
  left: 0px;
  min-height: 433px;
  min-width: 329px;
  top: 0px;
  transform: ${(props) => (props.selected ? 'scale(1)' : 'scale(1.2)')};
`;

export const Title = styled.h1`
  ${dependencies}
  bottom: 45px;
  font-size: 39px;
  left: 25px;
  text-transform: uppercase;
  z-index: 2;
`;

export const Paragraph = styled.p`
  ${dependencies}
  bottom: 23px;
  font-size: 18px;
  left: 28px;
  z-index: 2;
`;
