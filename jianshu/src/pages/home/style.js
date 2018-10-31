import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
  padding-top: 30px;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #f0f0f0;
`;
export const TopicItem = styled.div`
  float: left;
  overflow: hidden;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  border: 1px solid #dcdcdc;
  background: #f7f7f7;
  border-radius: 4px;
  font-size: 14px;
  .topicItem-img{
    display: block;
    float: left;
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
`;
export const ListItem = styled.div`
   padding: 20px 0;
   border-bottom: 1px solid #dcdcdc;
   overflow: hidden;
  .list-img{
    display: block;
    width: 125px;
    heigth: 100px;
    float: right;
    border-radius: 4px;
  }
`;
export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title{
    line-height: 27px;
    font-weight: bold;
    font-size: 18px;
    color: #333;
    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;
export const RecommendsItem = styled.div`
   overflow: hidden;
  .rec-img {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 4px;
    margin-bottom: 6px;
    &:hover{
      cursor: pointer;
    }
  }
`;
export const RecommendList = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: 100%;
`;
export const RecommendDown = styled.div`
  overflow: hidden;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 5px;
  line-height: 82px;
  cursor: pointer;
  box-sizing: border-box;
  height: 82px;
  .down-img{
    float: left;
    display: block;
    width: 60px;
    height: 60px;
  }
`;
export const RecommendInfo = styled.div`
  line-height: 15px;
  display:inline-block;
  margin-left: 10px;
  .title {
    font-size: 15px;
    color: #333;
  }
  .desc {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`;
export const RecommendQrcode = styled.div`
   position: relative;
   top: -252px;
   margin: 0 auto;
   width: 160px;
   height: 160px;
   border: 1px solid #999;
   background: #fff;
   box-sizing: border-box;
   //&:after {
  //  content: '';
  //    position: relative;
  // height: 0px;
  // width: 0px;
  // border-top: 90px solid transparent;
  // border-right: 100px solid black;
  // border-bottom: 100px solid transparent;
   }
  .qrcode-img {
    display: block;
    margin: 10px;
    width: 140px;
    height: 140px;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  border-radius: 20px;
  background: #a5a5a5;
  color: #fff;
  cursor: pointer;
`;
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  border: 1px solid #ccc;
  height: 60px;
  width: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
  cursor: pointer;
`;