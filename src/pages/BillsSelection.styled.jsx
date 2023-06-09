import styled from "styled-components";
import { palette } from "../assets/colorsPalette";

export const BillsSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 100vh;
  background-color: ${palette.snow};
`;

export const HeadersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  gap: 30px;
  color: ${palette.brand};
`;

export const Header = styled.div`
  font-family: Open Sans;
  align-self: center;
  font-weight: 400;
  font-size: 40px;
  font-family: Poppins, sans-serif;
`;

export const Hint = styled.header`
  font-size: 16px;
  font-weight: 500;
  font-size: 20px;
  font-family: Poppins, sans-serif;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  opacity: ${(props) => (props.isLoading ? 0.2 : 1)};
`;

export const TableDescription = styled.div`
  display: flex;
  text-align: center;
  padding: 10px 20px;
  border-top: 5px solid ${palette.brand};
  border-right: 1px solid ${palette.greyScale};
  border-left: 1px solid ${palette.greyScale};
  color: ${palette.brand};
  background-color: white;
  gap: 10px;
`;

export const BillsTablesContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  width: 99%;
  height: 470px;
  overflow: hidden;
`;

export const BillsTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
`;

export const ArrowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4%;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? "grey" : palette.brand)};
  border-radius: 8px;
  font-size: 20px;
  color: white;
  font-family: sans-serif;
  border: 1px solid transparent;
  cursor: pointer;
`;

export const LoadSelectedBillsButton = styled.button`
  background-color: ${(props) => (props.disabled ? "grey" : palette.brand)};
  border-radius: 8px;
  font-size: 15px;
  color: white;
  font-family: sans-serif;
  border: 1px solid transparent;
  cursor: pointer;
`;
