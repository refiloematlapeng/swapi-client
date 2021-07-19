import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  padding: 2rem 4rem 0;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  background-color: #ececec;
`;

export const DetailsContainer = styled.div`
  justify-content: center;
  padding: 2rem 4rem 0;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  background-color: #ececec;
`;

export const StyledCard = styled.div`
  box-shadow: 0 2px 4px -1px #00000033, 0 4px 5px 0 #00000024, 0 1px 10px 0 #0000001f;
  justify-content: flex-start;
  transition: box-shadow .5s;
  overflow-wrap: break-word;
  align-content: flex-start;
  background-color: #fff;
  word-break: break-word;
  flex-direction: column;
  border-radius: 10px;
  font-size: 15px;
  flex-wrap: wrap;
  flex: 5 5 auto;
  padding: 20px;
  display: flex;
  margin: 10px;
  height: 70px;
  width: 398px;
`;

export const TitleStyle = styled.div`
  justify-content: flex-start;
  align-content: top-center;
  flex-direction: column;
  margin-left: 70px;
  flex-wrap: wrap;
  display: flex;
`;

export const StyledCardContent = styled.div`
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  margin: 5px;
`;

export const DetailsCard = styled.div`
  
  box-shadow: 0 2px 4px -1px #00000033, 0 4px 5px 0 #00000024, 0 1px 10px 0 #0000001f;
  justify-content: center;
  transition: box-shadow .5s;
  overflow-wrap: break-word;
  align-content: flex-start;
  background-color: #fff;
  word-break: break-word;
  flex-direction: row;
  border-radius: 12px;
  font-size: 15px;
  flex-wrap: wrap;
  flex: 5 5 auto;
  padding: 10px;
  display: flex;
  margin: 10px;
  height: auto;
  width: 400px;
`;

export const NavbarHeader = styled.header`
  -webkit-box-shadow: 0 2px 3px rgb(0 0 0 / 18%);
  -ms-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.18);
  box-shadow: 0 3px 9px rgb(0 0 0 / 18%);
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  background-color: #000;
  min-height: max-content;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  padding: 5px 15px;
  position: sticky;
  display: flex;
  z-index: 1;
  top: 0;
`;

export const NavbarImage = styled.img`
  pointer-events: none;
  height: 50px;
  padding-left: 650px;

  @media (prefers-reduced-motion: no-preference) {
    .logo {
      animation: floating-animation infinite 3s ease-in-out;
    }
  }

  @keyframes floating-animation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Avatar = styled.div`
  justify-content: center;
  vertical-align: middle;
  display: inline-flex;
  line-height: normal;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  min-width: 87px;
  height: 60px;
  width: 60px;

  img {
    border-radius: inherit;
    display: inline-flex;
    border-style: none;
    height: inherit;
    width: inherit;
  }
`;

export const BackgroundImage = styled.div`

`;

export const StyledRoundedBtn = styled.button`
  letter-spacing: .0892857143em;
  transition-duration: .28s;
  background-color: #000;
  border-color: #ddbc40;
  border-radius: 15px;
  border-style: none;
  cursor: pointer;
  min-width: 85px;
  font-size: 14px;
  padding: 0 15px;
  height: 30px;
  color: #fff;
  &:hover, &:focus {
    color: #ddbc40;
    &:hover {
      box-shadow: 0 5px 6px -3px #00000033, 0 9px 12px 1px #00000024, 0 3px 16px 2px #0000001f
    }
  }
`;

export const StyledSpan = styled.span`
  font-family: Roboto,sans-serif;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  letter-spacing: normal;
  white-space: nowrap;
  align-self: center;
  font-size: 1.5rem;
  text-align: start;
  overflow: hidden;
  line-height: 1.2;
  flex: auto 1 auto;
`;

export const PaginationBtnsWrapper = styled.div`
  margin: 0 15px;
`;

export const PaginationBtn = styled.button`
  border: 1px solid #000;
  background-color: #000;
  padding: .3rem .75rem;
  transition: all 0.5s;
  border-radius: 85px;
  line-height: 1.5;
  appearance: none;
  min-width: 30px;
  margin: 0px 5px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  outline: none;

  :hover, :focus, :active {
    background-color: #fff;
    border-color: #ddbc40;
    color: #000;
  }
`;
