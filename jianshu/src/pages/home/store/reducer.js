import {fromJS} from 'immutable';
import { constants } from './index';
const defaultVal = fromJS({
  isPrCode: false,
  topicList: [
    {
    id: 1,
    title: '旅行·在路上',
    imgUrl: 'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 3,
      title: '读书',
      imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 4,
      title: '故事',
      imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }
  ],
  articleList: [
    {
      id:1,
      imgUrl: '//upload-images.jianshu.io/upload_images/11748130-48489b0b6bc21326.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: '一个觉醒者的告白',
      desc: '我曾经是一个坚定的唯物主义者，和无数人一样，以为这个世界是物质第一，意识第二。可随着我的成长，以及我对自身意识的不断觉察与亲证，我逐渐发现，我错...'
    },
    {
      id:2,
      imgUrl: '//upload-images.jianshu.io/upload_images/12978891-fe2004592747d711?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: '看过了这本书介绍的阅读方法，才知道以前的书都白读了！',
      desc: '在这个信息大爆炸的时代，你每天都会从各个渠道接收各种知识信息，但你的时间却是很有限的。 如何在短时间内大量获取你想要的有用知识就变得很重要了，此...'
    },
    {
      id:3,
      imgUrl: '',
      title: '140字微故事 | 老了才知道',
      desc: '“老公，那老东西没啥用了，扔了吧！” “不好吧！被别人家说的！” “留着有什么用！又脏又占地方！” “老婆，不要这样说，毕竟...” “说什么说...'
    },
    {
      id:4,
      imgUrl: '//upload-images.jianshu.io/upload_images/2341124-dfa51f42d74c851f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: '儿子的心愿|140字微小说',
      desc: '儿子常跟我提： 小明有了新球鞋。我说别攀比，鞋子整洁就好。 小红有了新自行车。我说学校这么近，走路锻炼身体。 小轩买了部手机。我说玩手机耽误学习...'
    }
  ],
  recommendList:[
    {
      id: 1,
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },
    {
      id: 2,
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },
    {
      id: 3,
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 4,
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 5,
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ]
});
const reducer = (state=defaultVal, action) => {
  switch (action.type) {
    case constants.GET_PRCODE:
      return state.set('isPrCode', true);
  }
  return state;
};

export default reducer;