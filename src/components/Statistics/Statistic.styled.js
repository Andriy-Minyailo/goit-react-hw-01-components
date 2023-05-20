import styled from '@emotion/styled';
import { getRandomHexColor } from './getRandomHexColor';

export const Section = styled.section`
  margin-top: 50px;
  width: 600px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h2`
  color: #787979;
  font-weight: bold;
  text-align: center;
  padding: 30px;
`;
export const StatList = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${getRandomHexColor};
  color: #ffffff;
  padding: 10px;
`;

export const Label = styled.span`
  font-size: 26px;
  margin-bottom: 5px;
`;
export const Percentage = styled.span``;
