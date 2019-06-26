import styled from 'styled-components';
import defaultImage from '../images/room-1.jpeg';

const StyledHero = styled.header`
  min-height: 66vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => (props.img ? props.img : defaultImage)})
    center/cover no-repeat;
`;

export default StyledHero;
