import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #5aebeb;
`;
export const TrHead = styled.tr``;
export const ThHead = styled.th`
  padding: 15px;
  width: 300px;
  font-size: 30px;
  text-transform: uppercase;
  border: 1px solid #d8dddd;
  text-align: center;
  color: #ffffff;
`;

export const Tbody = styled.tbody``;
export const TrBody = styled.tr`
  &:nth-of-type(even) {
    background-color: #e2e7e7;
  }
`;
export const TdBody = styled.td`
  font-size: 24px;
  padding: 15px;
  width: 300px;
  border: 1px solid #d8dddd;
  text-align: center;
  color: #787979;
`;
