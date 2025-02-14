<template>
  <div ref="resumeContainer" class="container">
    <i class="icon"><img src="@/assets/img/icon.png"></i>
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
          <img v-if="pictureSrc" :src="pictureSrc" alt="头像" />
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
                    <p class="value">基于Canvas封装动态渲染模块，支持图片/文字自定义布局与异步渲染，性能提升90%。</p>
                    <p class="value">采用图片预加载与缓存方案，优化海报生成性能，耗时从3.3s降低至0.3s，性能提升90%。</p>
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
                  <p class="sub-label">数据埋点与上报模块</p>
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
                  <p class="value">成功上线并稳定运行，日均用户互动量超过10万+。</p>
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
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value">Vue2/3、TypeScript、jQuery、Swiper、HTML2Canvas、QRCode.js、Preloader</p>
                </div>
              </div>
              <div class="item">
                <p class="label">核心贡献：</p>
                <div class="list">
                  <p class="value">独立承接需求，年均交付45+个营销页面（PC/移动端/H5活动），单项目平均交付周期3-10天。</p>
                  <p class="value">使用CSS Animation实现常见动画效果，满足多样化设计需求。</p>
                  <p class="value">基于HTML2Canvas+QRCode.js实现分享图生成功能，支持动态嵌入用户二维码。</p>
                  <p class="value">采用Swiper快速搭建轮播组件，配合CSS样式实现设计稿高还原度。</p>
                </div>
              </div>
              <div class="item">
                <p class="label">技术亮点：</p>
                <div class="list">
                  <p class="value">建立个人开发流程规范，通过工具复用将相似需求开发效率提升50%。</p>
                  <p class="value">沉淀高频插件配置模板（Swiper/HTML2Canvas等），降低重复配置时间成本。</p>
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
              <span class="value">Vue2/3工程化开发、微信小程序架构、Canvas图片生成</span>
            </p>
            <p class="item">
              <span class="title">性能优化：</span>
              <span class="value">接口缓存设计、资源预加载、图片资源缓存映射（重复生成耗时↓90%）</span>
            </p>
            <p class="item">
              <span class="title">工程架构：</span>
              <span class="value">全局请求封装、组件模板复用、AB实验埋点</span>
            </p>
          </div>
        </div>
      </div>

      <div class="info-part">
        <div class="label">教育经历</div>
        <div class="content content-gzjl">
          <div class="line-box">
            <p class="item">浙江工贸职业技术学院</p>
            <p class="item">软件技术（大专）</p>
            <p class="item">2019年9月-2022年6月</p>
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

let pictureSrc = require('@/assets/img/picture.jpg');

const showPrivacy = ref(true);

if (!showPrivacy.value) {
  pictureSrc = null;

  const basicInfoKeys = ['姓名', '出生年月', '电话', '邮箱'];
  basicInfo.value = basicInfo.value.map(item => {
    if (basicInfoKeys.includes(item[0])) {
      item[1] = '********';
    }
    return item;
  })

  workExperience.value[0][0] = '杭州**科技有限公司（网易合作供应商）';
}

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