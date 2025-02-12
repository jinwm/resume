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
              <p class="date">2024年4月 - 至今</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value">微信小程序原生框架、Canvas、wxParse富文本解析</p>
                </div>
              </div>
              <div class="item">
                <p class="label">项目描述：</p>
                <div class="list">
                  <p class="value not-point">
                    从0到1独立搭建小程序核心功能，完成首页、活动列表页、帖子页等10+核心页面的开发与上线，支撑日均10万+用户互动。后续主导部分功能迭代，并为团队提供技术支持与代码审查，确保项目质量和一致性。
                  </p>
                </div>
              </div>
              <div class="item">
                <p class="label">核心贡献：</p>

                <div class="sub-box">
                  <p class="sub-label">动态数据海报生成</p>
                  <div class="list">
                    <p class="value">设计通用Canvas绘制引擎，封装drawImage、drawText等方法，支持图片圆角裁剪、文字自动换行、渐变背景等高级特性。</p>
                    <p class="value">采用离屏Canvas和图片缓存方案，将海报生成耗时从3.3s优化至0.3s，性能提升90%。</p>
                    <p class="value">开发二维码合成模块，支持动态嵌入用户专属分享标识。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label">富文本解析与社交功能</p>
                  <div class="list">
                    <p class="value">基于wxParse实现富文本解析，支持图片预览、超链接智能跳转（H5/小程序页面/外部小程序）。</p>
                    <p class="value">实现点赞、评论、分享等社交功能，提升用户互动体验。</p>
                  </div>
                </div>
                <div class="sub-box">
                  <p class="sub-label">数据埋点与上报系统</p>
                  <div class="list">
                    <p class="value">设计全局埋点上报模块，使用小程序UUID作为用户标识，支持页面显示上报和自定义事件上报。</p>
                    <p class="value">实现登录态依赖管理，通过Promise锁机制避免wx.login和userinfo接口重复调用。</p>
                    <p class="value">开发自动重试策略，在网络异常时保障UUID获取成功率，减少数据上报丢失。</p>
                    <p class="value">封装统一上报方法，支持通过字段名匹配预定义上报内容，提升埋点开发和维护效率。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label">工程化与性能优化</p>
                  <div class="list">
                    <p class="value">封装全局请求方法，支持自动携带Token、登录失效重试、Loading状态管理。</p>
                    <p class="value">制定代码复用规范，降低团队成员接入成本。</p>
                  </div>
                </div>

              </div>
              <div class="item">
                <p class="label">项目成果：</p>
                <div class="list">
                  <p class="value">成功上线并稳定运行，日均用户互动量超过10万次。</p>
                  <p class="value">通过技术优化，海报生成时间减少90%，显著提升用户体验。</p>
                  <p class="value">数据埋点系统有效支持了用户行为分析和产品优化决策。</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 项目2：网易专题页集群 -->
          <div class="line-box">
            <div class="top-info">
              <p class="name">网易游戏营销专题开发</p>
              <p class="date">2022年4月 - 至今</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">项目概述：</p>
                <p class="value">为《蛋仔派对》《第五人格》等游戏提供活动落地页，年均开发40+个营销页面</p>
              </div>
              <div class="item">
                <p class="label">技术亮点：</p>
                <div class="list">
                  <p class="value">使用GSAP实现视差滚动等复杂动画效果，确保多机型流畅运行</p>
                  <p class="value">开发通用型Canvas动效模板，复用相似活动需求开发周期缩短50%</p>
                  <p class="value">采用Swiper+CSS Animation组合方案实现高性能轮播组件</p>
                  <p class="value">通过Webpack分包策略优化首屏资源加载速度</p>
                </div>
              </div>
              <div class="item">
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value">Vue3+TypeScript、jQuery、GSAP、Canvas、Swiper</p>
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

            <p class="item">
              <span class="title">图形化开发：</span>
              <span class="value">Canvas高性能渲染、动态布局计算、微信原生图片处理</span>
            </p>
            <p class="item">
              <span class="title">工程架构：</span>
              <span class="value">绘制引擎设计、组件模板抽象、异常降级方案</span>
            </p>
            <p class="item">
              <span class="title">性能专项：</span>
              <span class="value">离屏渲染、资源预加载、内存泄漏防控</span>
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
  ['姓名', '方思明'],
  ['出生年月', '2001年10月'],
  ['工作经验', '3年'],
  ['电话', '18072127956'],
  ['邮箱', 'jinwming@qq.com'],
  ['所在地区', '杭州市滨江区'],
])

const workExperience = ref([
  ['杭州鑫烨科技有限公司（网易合作供应商）', '文娱部 - 前端开发工程师', '2022年4月 - 至今']
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