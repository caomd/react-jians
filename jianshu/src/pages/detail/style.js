import styled from 'styled-components';

export const DetailWrapper = styled.div`
  overflow: hidden
  width: 620px;
  margin: 0 auto;
`;
export const DetailTitle = styled.div`
  margin: 50px 0 20px 0;
  font-size: 34px;
  font-weight: bold;
`;
export const Title = styled.div`
  margin: 30px 0 30px 0;
  .imgTitle {
    height: 48px;
    width: 48px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
  }
`;
export const TitleContent = styled.div`
  margin-left: 8px;
  display: inline-block;
  vertical-align: middle;
`;
export const Content = styled.div`
  font-size: 16px;
  color: #333;
`;
export const Time = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: #969696;
`;
export const DetailContent = styled.div`
  font-size: 16px;
  line-height: 25px;
  p {
    margin: 0 0 10px;
  }
  .border {
    margin: 0 0 20px;
    border: 1px solid #ddd;
  }
`;