import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  top: 58px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
`;
export const LogBox = styled.div`
  width: 400px;
  height: 496px;
  margin: 60px auto;
  padding-top: 20px;
  background: #fff;
`;
export const Input = styled.input`
  display: block;
  width: 240px;
  height: 50px;
  margin: 0 auto;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  outline:none;
  border: 1px solid #c8c8c8;
  border-radius: 4px 4px 0 0;
  background: hsla(0,0%,71%,.1);
  &.border-bottom {
    border-bottom: none;
  }
`;
export const Button = styled.button`
  display: block;
  width: 240px;
  height: 33px;
  line-height: 33px;
  margin: 20px auto;
  background: #3194d0;
  border-radius: 25px;
  color: #fff;
  outline: none;
  font-size: 18px;
  cursor: pointer;
`;
export const Title = styled.div`
  display: block;
  width: 200px;
  height: 33px;
  line-height: 33px;
  margin: 20px auto;
  text-align: center;
  cursor: pointer;
  .title {
    padding: 10px;
    color: #969696;
    box-sizing: border-box;
  }
  .border{
    border-bottom: 2px solid #ea6f5a;
    color: #ea6f5a;
    font-weight: 700;
  }
  .titlePoint {
    padding: 10px;
  }
`;