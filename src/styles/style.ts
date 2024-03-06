import styled from 'styled-components';

/*-------- TodoForm ---------*/
export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: baseline;
  margin-bottom: 30px;
  & > p > label {
    margin: 0 10px;
    font-size: 18px;
  }
  & > p:nth-of-type(2) input[type='text'] {
    width: 300px;
  }
  > button {
    padding: 0 15px;
    height: 45px;
    line-height: 45px;
    &:hover {
      background-color: #eee;
    }
  }
`;

/*-------- TodoList ---------*/
export const H2 = styled.h2`
  position: relative;
  padding: 30px 0;
  width: 800px;
  margin: 0 auto;
  &::before {
    left: 0;
    background-color: #ccc;
    content: '';
    height: 1px;
    position: absolute;
    top: 53%;
    width: 250px;
  }
  &::after {
    right: 0;
    background-color: #ccc;
    content: '';
    height: 1px;
    position: absolute;
    top: 53%;
    width: 250px;
  }
`;

export const TodoList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
  align-items: baseline;
  overflow: hidden;
  padding: 0 0 40px;
  & > li {
    padding: 20px;
    box-sizing: border-box;
    width: 253px;
    border: 1px solid #eee;
  }
  & > li > h3 {
    font-weight: 600;
    font-size: 20px;
  }
  & > li > p {
    margin: 20px 0;
    word-break: break-all;
    text-align: left;
  }
`;

export const Date = styled.time`
  font-size: 12px;
  color: #888;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  & > button {
    font-size: 14px;
  }
  & > button:hover {
    background-color: #fff;
  }
`;
