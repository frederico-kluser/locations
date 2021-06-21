import styled from 'styled-components';

const userSelect = `
pointer-events: none;
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
-khtml-user-select: none; /* Konqueror HTML */
-moz-user-select: none; /* Old versions of Firefox */
-ms-user-select: none; /* Internet Explorer/Edge */
user-select: none;
`;

export const Img = styled.img`
  margin-top: var(--marginTop);
  transform: ${(props) => props.position};
  transition: 0.5s all linear;
  user-select: none;
  width: 100vw;
  ${userSelect}
`;

export const Pointer = styled.div`
  background: #f97f0f;
  border-radius: var(--pointerSize);
  height: var(--pointerSize);
  left: calc(50vw - (var(--pointerSize) / 2));
  position: absolute;
  top: calc(var(--marginTop) + (65.957333333333333vw / 2) - (var(--pointerSize) / 2));
  transform: ${(props) => (props.active ? 'scale(1)' : 'scale(0)')};
  transition: ${(props) => (props.active ? '0.25s all linear' : 'none')};
  width: var(--pointerSize);
  ${userSelect}
`;

export const PointerEffect = styled.div`
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: ${(props) => (props.last ? 'lastPointer' : 'firstPointer')};
  background: #f9800f17;
  border-radius: var(--pointerSize);
  display: ${(props) => (props.active ? 'initial' : 'none')};
  height: var(--pointerSize);
  position: absolute;
  transform: scale(1);
  width: var(--pointerSize);
`;
