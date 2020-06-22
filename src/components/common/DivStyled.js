import styled from "styled-components";

const DivStyled = styled.div`
  background: ${(props) => props.actualColors.background};
  color: ${(props) => props.actualColors.foreground};
  border-radius: 8px;
`;

export default DivStyled;
