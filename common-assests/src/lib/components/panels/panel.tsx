import styled from 'styled-components';
import img from '../assest/aletopia.png'
import aletopiaMinecraft from '../../../assest/Animals_preview.webp'
import Logo from '../logo';

/* eslint-disable-next-line */
interface PanelProps {}

const StyledCommonAssests = styled.div`
  color: pink;
`;

export function Panel(props: PanelProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .wrapper {
          width: 100%;
          height: auto;
          margin: 50px;
          
          display: flex;
          justify-content: center;
        }

        .container{
          width: 470px;
          padding: 16px;
          text-align: center;
        }

        p{
          font-size: 24px;
          font-family: 'Anton', sans-serif;
        }

        img{

          width: 100%
        }
        `,
        }}
      />
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <img src={aletopiaMinecraft} />
            <Logo></Logo>
            <p>
              {' '}
              
              Este semestre se vienen cositas y empezamos con todo prueba dev{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Panel;
