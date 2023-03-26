import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 auto;
  background-color: #ffff;
  border: 1px solid rgb(162 162 162 / 62%);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.div`
  display: block;
  margin-bottom: 15px;
  text-align: center;
  padding: 25px 30px;
`;

export const Photo = styled.img`
  width: 150px;
  height: 150px;
  border: 4px solid white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 45%;
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: black;
  margin-bottom: 5px;
`;

export const TagLocation = styled.p`
  color: #aab3bd;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(162 162 162 / 62%);

  li {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: calc(33.3%);
    padding: 10px 0;
  }
  li:not(:last-child) {
    border-right: 1px solid rgb(162 162 162 / 62%);
  }
`;

export const StatsList = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: column;
`;

export const ListText = styled.span`
  font-size: 12px;
  margin-bottom: 2px;
  color: #aab3bd;
`;

export const ListNum = styled.span`
  color: black;
  font-size: 16px;
  font-weight: 700;
`;
