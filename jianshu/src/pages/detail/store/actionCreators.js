import { constants } from './';
import axios from 'axios';
const changeDetail = (imgUrl,pageOne,pageTwo) => ({
  type:constants.GET_DETAIL_CONTENT,
  imgUrl,
  pageOne,
  pageTwo
});
const getDetailContent = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json/?id='+id).then((res) => {
      console.log(res);
      dispatch(changeDetail(res.data.data.imgUrl,res.data.data.pageOne,res.data.data.pageTwo));
    }).catch((error) => console.log(error));
  }
};
export { getDetailContent,changeDetail };
