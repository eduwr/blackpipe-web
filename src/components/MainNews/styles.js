import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => {
    let columns = null;
    const intProperty = parseInt(props.col, 10);
    switch (intProperty) {
      case 12:
        columns = '1fr';
        break;
      case 6:
        columns = '1fr 1fr';
        break;
      case 3:
        columns = '1fr 1fr 1fr 1fr';
        break;
      default:
        columns = '1fr';
    }
    return columns;
  }};

  background: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 5px,
      rgba(0, 0, 0, 1) 8px
    ),
    linear-gradient(to right, green, red);
  height: ${props => (props.height ? props.height : '100%')};
  align-items: center;
  justify-content: center;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    height: ${props => (props.mediaBox ? '800px' : props.height)};
  }
`;

export const StyledDiv = styled.div`
  height: ${props => (props.height ? `${props.height}px` : '100%')};
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const NewsText = styled.span`
  font-weight: bold;
  margin-top: 12px;
  font-size: ${props => (props.big ? '50px' : '30px')};
  color: ${props =>
    props.big ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)'};
  font-family: ${props =>
    props.big ? "'Montserrat', sans-serif" : "'Roboto', sans-serif"} !important;
  text-justify: center;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const IconBox = styled.div`
  display: flex;
  margin-left: 10px;
  padding: 20px 30px;
  width: 100%;
  align-items: center;
  justify-content: space - between;
  align-self: center;
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 6px solid #c4c4c4;
  border-radius: 5px;
  margin-right: 15px;
  height: 75px;
  width: 75px;
  cursor: pointer;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

  &:hover {
    background: #526182;
  }

  &:active {
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
    transform: translate(1px, 1px);
  }
`;

export const SquareDiv = styled(StyledDiv)`
  height: ${props => (props.size > 360 ? `${props.size}px` : '360px')};
  width: ${props => (props.size > 360 ? `${props.size}px` : '360px')};
  border: 10px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  align-items: center;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.5);
  margin: 20px;
  &:hover {
    border: 10px solid rgba(255, 255, 255, 1);
    box-shadow: 8px 8px 30px rgba(0, 0, 0, 0.5);
  }
`;
