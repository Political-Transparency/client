import styled from "styled-components";
import { palette } from "../assets/colorsPalette";

export const BillsSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 30px;
`;

export const HeadersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10%;
  width: 100%;
  margin-top: 30px;
  gap: 30px;
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
  font-family: Poppins, sans-serif;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 100%;
  gap: 20px;
`;

export const TableDescription = styled.div`
  text-align: center;
  padding: 10px 20px;
  border-top: 5px solid ${palette.brand};
  border-right: 1px solid ${palette.greyScale};
  border-left: 1px solid ${palette.greyScale};
  color: ${palette.brand};
`;

export const BillsTablesContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  width: 99%;
  height: 500px;
  overflow: auto;
`;

export const BillsTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
  z-index: 0;
`;

export const ArrowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 4%;
`;

export const LoadSelectedBillsButton = styled.button``;
