import styled from 'styled-components';

const Img = styled.img`
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  margin-top: var(--marginTop);
  pointer-events: none;
  transform: ${(props) => props.position};
  transition: 0.5s all linear;
  user-select: none;
  width: 100vw;
`;

export default Img;
