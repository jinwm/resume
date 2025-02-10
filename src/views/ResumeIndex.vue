<template>
  <div ref="resumeContainer" class="container">
    <div class="main">
      <div class="slogan-title">个人简历</div>
      <div class="intention">求职意向：Web前端开发</div>
      <div class="top-basic-info">
        <div class="basic-info">
          <div class="item"><span class="label">姓名：</span><span class="value">方思明</span></div>
          <div class="item"><span class="label">出生年月：</span><span class="value">2001年10月</span></div>
          <div class="item"><span class="label">工作经验：</span><span class="value">3年</span></div>
          <div class="item"><span class="label">电话：</span><span class="value">18072127956</span></div>
          <div class="item"><span class="label">邮箱：</span><span class="value">jinwming@qq.com</span></div>
          <div class="item"><span class="label">所在地区：</span><span class="value">杭州市滨江区</span></div>
        </div>
        <div class="picture">
          <img src="@/assets/img/picture.jpg">
        </div>
      </div>
      <div class="info-part">
        <div class="label">工作经历</div>
        <div class="content content-gzjl">
          <div class="line-box">
            <div class="item">杭州千航科技有限公司</div>
            <div class="item">Web前端开发</div>
            <div class="item">2022年4月至今</div>
          </div>
        </div>
      </div>
      <div class="info-part">
        <div class="label">项目经历</div>
        <div class="content content-xmjl">
          <div class="line-box">
            <div class="top-info">
              <p class="name">网易燕云十六声官方资讯小程序</p>
              <p class="date">2024年3月至今</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">项目概述：</p>
                <p class="value">负责《燕云十六声》官方资讯小程序核心模块开发，日均UV10万+，涵盖资讯、活动、帖子等模块，提升用户互动率30%。</p>
              </div>
              <div class="item">
                <p class="label">主要职责：</p>
                <div class="list">
                  <p class="value">设计并实现资讯展示、活动推送、用户信息管理模块，支持楼中楼评论、表情包互动等功能，用户留存率提升20%。</p>
                  <p class="value">开发消息系统，实现评论回复、点赞提醒功能，通过公共JS文件减少接口调用频率，性能提升15%。</p>
                  <p class="value">利用Canvas技术开发烟花大会、游戏搭子测试、个人数据名片等功能页面，支持弹幕发送、分享、自定义海报生成，活动参与率提升25%。</p>
                </div>
              </div>
              <div class="item">
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value">微信小程序框架、JavaScript、HTML、CSS、Canvas。</p>
                </div>
              </div>
            </div>
          </div>
          <div class="line-box">
            <div class="top-info">
              <p class="name">网易游戏移动端H5合集</p>
              <p class="date">2022年4月至今</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">项目概述：</p>
                <p class="value">主导《蛋仔派对》、《第五人格》等多款游戏活动H5页面开发，日均PV50万+，涵盖任务抽奖、人拉人助力等功能。</p>
              </div>
              <div class="item">
                <p class="label">主要职责：</p>
                <div class="list">
                  <p class="value">实现微信、QQ、微博及海外平台授权登录功能，用户参与率提升15%。</p>
                  <p class="value">开发任务抽奖、答题测试等互动功能，通过埋点记录用户行为数据，优化活动转化率10%。</p>
                  <p class="value">解决H5页面嵌入微信小程序的WebView兼容性问题，确保流畅用户体验，加载速度提升20%。</p>
                </div>
              </div>
              <div class="item">
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value">Vue2、Vue3+TypeScript、jQuery。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-part">
        <div class="label">个人优势</div>
        <div class="content content-grys">
          <div class="line-box">
            <p class="item">
              <span class="title">技术深度：</span>
              <span class="value">深入理解Vue3响应式原理，熟悉Webpack性能优化策略，具备复杂项目架构设计能力。</span>
            </p>
            <p class="item">
              <span class="title">项目成果：</span>
              <span class="value">主导多个高流量项目（日均UV10万+），用户互动率提升30%，性能优化15%。</span>
            </p>
            <p class="item">
              <span class="title">软技能：</span>
              <span class="value">注重代码可维护性，曾主导团队代码规范制定，提升开发效率20%。</span>
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
import { formatDate } from '../assets/js/utils';

const resumeContainer = ref(null);

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