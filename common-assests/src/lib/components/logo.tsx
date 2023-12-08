import styled from 'styled-components';
import img from '../../assest/aletopia.png'

/* eslint-disable-next-line */
export interface LogoProps {}

const StyledCommonAssests = styled.div`
  color: pink;
`;

export function Logo(props: LogoProps) {
  return (
    <>
      <img src={img} />
    </>
  );
}

export default Logo;
