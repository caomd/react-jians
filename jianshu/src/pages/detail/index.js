import React, { Component } from 'react';
import {
  DetailWrapper,
  DetailTitle,
  Title,
  TitleContent,
  Content,
  Time,
  DetailContent
}
from './style'
class Detail extends Component{
  render() {
    return(
      <DetailWrapper>
        <DetailTitle>
          【虐】一世繁华
          <Title>
            <img className="imgTitle" src="//upload.jianshu.io/users/upload_avatars/12748986/6ff059b9-d170-4f7d-ab88-ef2cea7c4cda.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"/>
            <TitleContent>
              <Content>愿岁月温柔回首</Content>
              <Time title="最后创建于2018.08.20 15:19">2018.08.18 20:19* 字数 712 阅读 840评论 4喜欢 14</Time>
            </TitleContent>
          </Title>
        </DetailTitle>
        <DetailContent>
          <p>
            九重天，凤九骑着天地间唯一一只冰凰---碧落，落在了南天门外。那凤凰刚落地就变成一位青衣女子，容貌虽美但又不失优雅清纯，散发出的仙气十分淳厚。“殿下，我们…”凤九勾唇一笑：“碧落，你说，缘分这东西是不是很奇怪啊？”碧落望着自家君主，默默叹了一口气“殿下…都过去了，不必…不必再执着了”“走吧”“是”南天门外的守卫看见了青丘女君立刻行礼：“我等见过女君！”“免礼”一路上，所有人见过这位才九万岁的女君都恭敬地行礼，递了请帖，一位小仙高声喊到：“青丘女君到！”一瞬间，所有人都安静下来，望向门外，看一看这四海八荒第二绝色的真容。只见一股桃花香夹杂着淡淡的凤羽清香荡漾开来，那女子的容貌也逐渐清晰：一袭红衣既端庄又不失美丽，衬着白嫩的皮肤更加肤如积雪，盘着优雅的发髻，缀上几颗红石，插上一支凤尾花簪更加美丽，尤其是额头上的凤尾胎记，将女子的容貌更胜一筹！“这女君好美啊！”“是啊！不愧是第二绝色！”“听闻这女君的容貌只是比天后娘娘逊色几分”在一些人的讨论下，凤九不紧不慢地行礼：“青丘女君白凤九见过帝君，天君天后”“免礼，今日宴会各位不必拘束，只是庆祝罢了！”“是！我等谢过天君！”宴会上，凤九只是在跟成玉还有司命聊天喝酒，没有看东华帝君一眼，面对好友的玩笑也是敷衍了事，东华在不远处喝着酒，心里有点难受：莫非小狐狸不爱他了？自已伤她太深了？就这样，凤九在宴会快要结束时离开了，送完给小表妹的礼物---茉兰珠链，聊聊几句家常话，在天宫闲逛……
          </p>
          <hr className="border"/>
          <p>
            碧落：女娲娘娘身边曾驯养的坐骑，乃天地间唯一一只冰凰，机缘巧合下凤九成为其新一任主人，医术高超，制毒也很好，可谓医毒双修，法器---离魂箫
          </p>
        </DetailContent>
      </DetailWrapper>
    )
  }
}
export default Detail;