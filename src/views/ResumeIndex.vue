<template>
  <div ref="resumeContainer" class="container">
    <div class="main">
      <div class="slogan-title">个人简历</div>
      <div class="intention">求职意向：Web前端开发</div>
      <div class="top-basic-info">
        <div class="basic-info">
          <div class="item" v-for="(item, index) in basicInfo" :key="index"><span class="label">{{ item[0]
              }}：</span><span class="value">
              <EditableText :value="item[1]" :textStyle="editableTextStyle" />
            </span></div>
        </div>
        <div class="picture">
          <img src="@/assets/img/picture.jpg">
        </div>
      </div>
      <div class="info-part">
        <div class="label">工作经历</div>
        <div class="content content-gzjl">
          <div class="line-box" v-for="(item, index) in workExperience" :key="index">
            <div class="item" v-for="(subItem, subIndex) in item" :key="subIndex">
              <EditableText :value="subItem" :textStyle="editableTextStyle" />
            </div>
          </div>
        </div>
      </div>


      <div class="info-part">
        <div class="label">项目经历</div>
        <div class="content content-xmjl">
          <!-- 项目1：燕云小程序 -->
          <div class="line-box">
            <div class="top-info">
              <p class="name">《燕云十六声》官方小程序</p>
              <p class="date">2023年3月 - 至今</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">项目概述：</p>
                <p class="value">游戏生态核心入口，承载玩家社交、资讯、活动运营等场景，日均服务数万用户。</p>
              </div>
              <div class="item">
                <p class="label">技术突破：</p>
                <div class="list">
                  <p class="value">主导消息系统灰度发布方案，通过版本比对工具拦截3类历史兼容问题</p>
                  <p class="value">设计富文本智能路由解析器，支持跨小程序/App跳转，点击转化率优于基线方案</p>
                  <p class="value">实现Websocket消息聚合推送，降低高频接口调用压力30%+</p>
                  <p class="value">开发Canvas动态海报生成器，支持用户自定义游戏数据可视化分享</p>
                </div>
              </div>
              <div class="item">
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value">微信小程序、Websocket、Virtual List、Canvas</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 项目2：网易专题页集群 -->
          <div class="line-box">
            <div class="top-info">
              <p class="name">网易系游戏营销专题开发</p>
              <p class="date">2021年7月 - 2023年2月</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">项目概述：</p>
                <p class="value">服务于蛋仔派对、第五人格等头部游戏，年均交付50+个高互动营销活动页。</p>
              </div>
              <div class="item">
                <p class="label">技术亮点：</p>
                <div class="list">
                  <p class="value">构建GSAP动效组件库，开发效率提升30%+，动画性能达标率100%</p>
                  <p class="value">设计Canvas帧率监控方案，保障低端机型动画流畅体验</p>
                  <p class="value">主导第五人格AB测试方案，完成4种交互流程埋点设计</p>
                  <p class="value">制定资源加载最佳实践，首屏耗时降低至行业优秀水平</p>
                </div>
              </div>
              <div class="item">
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value">Vue3+TypeScript、GSAP、Canvas、Webpack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-part">
        <div class="label">技术能力</div>
        <div class="content content-grys">
          <div class="line-box">
            <p class="item">
              <span class="title">核心开发：</span>
              <span class="value">Vue2/3工程化开发、微信小程序架构、Canvas动效体系</span>
            </p>
            <p class="item">
              <span class="title">性能专项：</span>
              <span class="value">接口缓存设计、虚拟滚动、资源分级加载、内存泄漏排查</span>
            </p>
            <p class="item">
              <span class="title">质量保障：</span>
              <span class="value">灰度发布机制、AB实验埋点、异常监控体系</span>
            </p>
          </div>
        </div>
      </div>


    </div>
  </div>
  <a href="javascript:;" class="btn-export" title="导出图片" @click="handelExportImg">导出图片</a>
</template>

<script setup>
import { ref } from 'vue';
import html2canvas from 'html2canvas';
import { formatDate } from '../js/utils';
import EditableText from '../components/EditableText';

const editableTextStyle = {
  'font-size': '0.2rem',
  'color': '#000',
  'line-height': '0.28rem'
};
const resumeContainer = ref(null);

const basicInfo = ref([
  ['姓名', 'xxx'],
  ['出生年月', '2001年10月'],
  ['工作经验', '3年'],
  ['电话', 'xxx'],
  ['邮箱', 'xxx@qq.com'],
  ['所在地区', '杭州市滨江区'],
])

const workExperience = ref([
  ['杭州XX科技有限公司（网易合作供应商）', '文娱事业部 - 前端开发工程师', '2021年7月 - 至今']
])

const handelExportImg = () => {
  if (!resumeContainer.value) {
    return;
  }
  html2canvas(resumeContainer.value, {
    useCORS: true,
    backgroundColor: null
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');
    link.href = imgData;
    link.download = `个人简历${formatDate(new Date(), 'yyyymmdd')}.jpg`;
    link.click();
  })
}

</script>

<style lang="scss">
@import url('../assets/css/resumeIndex.scss');
</style>