import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  margin: auto;
  height: 80px;
  width: 80px;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  div {
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    border: 5px solid #ddbc40;
    border-radius: 50%;
    position: absolute;
    opacity: 1;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes ripple {
    0% {
      opacity: 1;
      left: 36px;
      top: 36px;
      height: 0;
      width: 0;
    }
    100% {
      height: 72px;
      width: 72px;
      opacity: 0;
      left: 0px;
      top: 0px;
    }
  }
`;

const Loader: React.FC<{}> = () => {
  return(
    <StyledWrapper>
      <div></div><div></div>
    </StyledWrapper>
  );
};

export default Loader;
