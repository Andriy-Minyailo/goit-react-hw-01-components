import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 400px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;
export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;
export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
`;
export const Tag = styled.p`
  font-size: 24px;
  color: #787979;
  margin-bottom: 10px;
  font-weight: bold;
`;
export const Location = styled.p`
  font-size: 24px;
  color: #787979;
  font-weight: bold;
`;
export const Stats = styled.ul`
  display: flex;
  width: 100%;
  background-color: #c1f3f0;
`;
export const Li = styled.li`
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  border: 1px solid #457773;
`;

export const Label = styled.span`
  font-size: 20px;
  display: block;
  text-align: center;
  margin-bottom: 5px;
  font-weight: bold;
  color: #787979;
`;
export const Quantity = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
  text-align: center;
`;
