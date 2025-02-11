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
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value">微信小程序原生框架、Canvas、wxParse富文本解析</p>
                </div>
              </div>
              <div class="item">
                <p class="label">核心贡献：</p>
                <div class="sub-box">
                  <p class="sub-label">动态数据海报生成系统</p>
                  <div class="list">
                    <p class="value">设计通用Canvas绘制引擎，支持角色属性/装备/探索度等20+类游戏数据的动态渲染</p>
                    <p class="value">封装drawImage/drawText/drawBgColor等基础方法，实现图片圆角裁剪、文字自动换行、渐变背景等高级特性</p>
                    <p class="value">开发布局自适应算法，精准计算160+个UI元素的坐标位置，保障不同分辨率设备显示一致性</p>
                    <p class="value">实现海报生成状态机管理，通过loading状态锁防止重复点击，异常场景自动降级提示</p>
                  </div>
                </div>
                <div class="sub-box">
                  <p class="sub-label">高性能分享体系</p>
                  <div class="list">
                    <p class="value">采用离屏Canvas+图片缓存方案，重复生成相同海报的耗时从3.3s降低至0.3s</p>
                    <p class="value">开发二维码合成模块，支持动态嵌入用户专属分享标识</p>
                  </div>
                </div>
                <!-- <div class="sub-box">
                  <p class="sub-label">工程化改进</p>
                  <div class="list">
                    <p class="value">抽象社交名片/角色卡牌等6类模板，相似需求开发效率提升70%</p>
                    <p class="value">制定Canvas绘制规范，降低团队成员接入成本</p>
                  </div>
                </div> -->

                <!--
                  建立全局埋点上报模块，使用小程序uuid（后端userinfo接口返回）作为用户标识，支持页面显示上报和自定义上报字段（用户点击等）
                  
                  因为进入某个小程序页面就要自动执行页面显示上报，但上报的前提是用户已经登录（获取到uuid后），自动上报页面显示执行顺序是： 未登录->调用wx.login获取code后调用后端login接口获取用户token，使用这个token调用userinfo接口获取用户信息（包含uuid）->获取到用户信息后执行页面显示上报，再次期间会有接口同时被多次调用的情况（因为小程序入口一定会结果app.js，然后才是小程序页面的js,所以就有可能多个地方同时去执行同一个流程），因此我使用了类似这种方式去规避这个问题。并在获取uuid的途中请求失败时自动重试，在一定程度上避免uuid获取不到而导致页面显示上报数据的缺失。自定义埋点也是一样的，需要在获取到uuid后才能进行上报，因此也做了类似的处理，为了方便管理，有个disct.js导出一个变量来存储全局全部的自定义上报字段信息，通过一个固定的自定义上报方法，传入需要上报的字段名字符串，这个方法会用传入的字符串去匹配disct列表项，有则上报
                  const getJson = (item) => {
  if (!item.getPromise) {
    item.getPromise = new Promise((resolve, reject) => {
      wx.request({
        url: xxx,
        success: (res) => {
          item.getPromise = null;
          resolve(res.data);
        },
        fail: (err) => {
          item.getPromise = null;
          wx.showModal({
            title: '提示',
            content: '网络异常，请稍后重试',
          });
          reject(err);
        },
      });
    });
  }
  return item.getPromise;
};

                -->


                <!-- 第一版 -->
                <!-- 数据埋点与上报系统

设计全局埋点上报模块，使用小程序UUID作为用户标识，支持页面显示上报和自定义事件上报

实现登录态依赖管理，通过Promise锁机制避免wx.login和userinfo接口重复调用

开发自动重试策略，在网络异常时保障UUID获取成功率，减少数据上报丢失

封装统一上报方法，支持通过字段名匹配预定义上报内容，提升埋点开发效率 -->

                <div class="sub-box">
                  <p class="sub-label">数据埋点与上报系统</p>
                  <div class="list">
                    <p class="value">设计全局埋点上报模块，使用小程序UUID作为用户标识，支持页面显示上报和自定义事件上报</p>
                    <p class="value">实现登录态依赖管理，通过Promise锁机制避免wx.login和userinfo接口重复调用</p>
                    <p class="value">开发自动重试策略，在网络异常时保障UUID获取成功率，减少数据上报丢失</p>
                    <p class="value">封装统一上报方法，支持通过字段名匹配预定义上报内容，提升埋点开发效率</p>
                  </div>
                </div>

              </div>

              <!-- <div class="item">
                <p class="label">项目概述：</p>
                <p class="value">游戏社区核心功能载体，包含帖子Feed流、用户互动、活动运营等高频场景</p>
              </div>
              <div class="item">
                <p class="label">技术突破：</p>
                <div class="list">
                  <p class="value">开发富文本跳转路由系统，解析后台配置链接自动匹配小程序页面跳转/网页跳转/外部小程序跳转</p>
                  <p class="value">实现楼中楼评论结构，通过动态节点复用+分页加载策略优化长列表滚动性能</p>
                  <p class="value">设计公共跳转方法封装，统一处理wx.navigateTo/wx.navigateToMiniProgram等API调用</p>
                  <p class="value">参与新功能灰度测试流程，通过白名单机制验证功能稳定性</p>
                </div>
              </div>
              <div class="item">
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value">微信小程序原生开发、wxParse富文本解析、Canvas动效</p>
                </div>
              </div> -->

            </div>
          </div>

          <!-- 项目2：网易专题页集群 -->
          <div class="line-box">
            <div class="top-info">
              <p class="name">网易游戏营销专题开发</p>
              <p class="date">2021年7月 - 2023年2月</p>
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