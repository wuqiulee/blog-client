import styled from 'styled-components';

type Iprops = {
  show: Boolean;
};

export const BackTopWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 30px;
  padding: 10px;
  background-color: #fff;
  font-size: 30px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  opacity: ${(props: Iprops) => (props.show ? '1' : '0')};

  &:hover {
    color: #1677ff;
  }
`;
