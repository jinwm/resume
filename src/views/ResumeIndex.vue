<template>
  <div ref="resumeContainer" class="container" v-loading="loading">
    <i class="icon"><img src="@/assets/img/icon.png"></i>
    <div class="main">
      <div class="slogan-title">个人简历</div>
      <div class="intention">求职意向：前端开发工程师</div>
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
          <!-- <div class="line-box" v-for="(item, index) in workExperience" :key="index">
            <div class="item" v-for="(subItem, subIndex) in item" :key="subIndex">
              <EditableText :value="subItem" :textStyle="editableTextStyle" />
            </div>
          </div> -->
          <div class="line-box">
            <div class="item" style="font-size: 0.2rem;">杭州鑫烨科技有限公司（网易合作供应商）</div>
            <div class="item" style="font-size: 0.2rem;">前端开发工程师</div>
            <div class="item" style="font-size: 0.2rem;">2022年4月 - 至今</div>
          </div>
        </div>
        <div class="content content-xmjl">
          <!-- 项目1：燕云小程序 -->
          <div class="line-box">
            <div class="top-info">
              <p class="name">项目一：网易《燕云十六声》官方小程序</p>
              <p class="date">2024年4月 - 2024年8月</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">技术栈：<span class="keyword">微信小程序原生框架</span>、<span class="keyword">Canvas</span>、<span
                    class="keyword">wxParse.js</span></p>
              </div>
              <div class="item">
                <p class="label">项目描述：<span><span class="keyword">从0到1独立搭建小程序核心功能</span>，完成首页、活动列表、帖子详情、Web H5承载页等<span
                      class="keyword">10+</span>核心页面的开发与上线，支撑日均<span
                      class="keyword">10万+</span>用户互动。后续主导关键功能迭代及新增页面开发需求，并为团队提供技术支持与代码审查，确保项目质量和一致性。</span></p>
              </div>
              <div class="item">
                <p class="label">核心贡献：</p>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">动态数据海报生成</span></p>
                  <div class="list">
                    <p class="value">基于<span class="keyword">Canvas</span>封装动态渲染模块，支持图片/文字自定义布局，代码复用率提升<span
                        class="keyword">90%</span>。</p>
                    <p class="value">采用<span class="keyword">图片预加载与缓存方案</span>，优化海报生成性能，耗时从<span
                        class="keyword">3s</span>降低至<span class="keyword">1s</span>。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">富文本解析</span>与社交功能</p>
                  <div class="list">
                    <p class="value">基于<span class="keyword">wxParse.js</span>实现富文本解析，支持图片预览、超链接智能跳转（H5/小程序页面/外部小程序）。
                    </p>
                    <p class="value">实现点赞、评论、分享等社交功能，提升用户互动体验。</p>
                  </div>
                </div>
                <div class="sub-box">
                  <p class="sub-label"><span class="high">数据埋点与上报模块</span></p>
                  <div class="list">
                    <p class="value">设计全局埋点上报模块，使用小程序 UUID 作为用户标识，支持页面显示和自定义事件上报，提升数据采集效率。</p>
                    <p class="value">实现<span class="keyword">登录态依赖管理</span>，避免高并发场景下的接口重复调用，并开发<span
                        class="keyword">自动重试机制</span>，确保网络异常时的数据上报成功率。</p>
                    <p class="value">封装<span class="keyword">通用上报方法</span>，通过字段名匹配预定义内容，降低埋点开发和维护成本。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">工程化与性能优化</span></p>
                  <div class="list">
                    <p class="value">封装全局请求方法，支持自动携带<span class="keyword">Token</span>、登录失效重试、加载状态管理。</p>
                    <p class="value">通过<span class="keyword">分包加载</span>与<span class="keyword">本地缓存</span>优化小程序性能。</p>
                  </div>
                </div>

              </div>
              <div class="item">
                <p class="label">项目成果：</p>
                <div class="list">
                  <p class="value">成功上线并稳定运行，日均用户互动量超过<span class="keyword">10万+</span>。</p>
                  <p class="value">通过技术优化，海报生成时间减少<span class="keyword">67%</span>，显著提升用户体验。</p>
                  <p class="value">数据埋点系统有效支持了用户行为分析和产品优化决策。</p>
                </div>
              </div>
            </div>
          </div>
          <div class="hr"></div>
          <!-- 项目2：网易专题页集群 -->
          <div class="line-box">
            <div class="top-info">
              <p class="name">项目二：网易游戏营销专题开发<span>（合集项目）</span></p>
              <p class="date">2022年4月 - 至今</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">技术栈：<span class="keyword">Vue2/3</span>、<span class="keyword">Vue Router</span>、<span
                    class="keyword">Pinia</span>、<span class="keyword">Axios</span>、<span
                    class="keyword">jQuery</span>、<span class="keyword">TypeScript</span>、<span
                    class="keyword">Html2canvas</span>、<span class="keyword">GSAP</span>、<span class="keyword">Element
                    Plus</span>、<span class="keyword">Vant4</span></p>
              </div>
              <div class="item">
                <p class="label">项目描述：<span>主导开发包括《<span class="keyword">第五人格</span>》、《<span
                      class="keyword">梦幻西游</span>》在内的网易互娱及网易雷火多款游戏相关页面（PC+H5），单日最高峰值UV超<span
                      class="keyword">50万</span>，平均交付周期<span class="keyword">7天</span>。</span></p>
              </div>
              <div class="item">
                <p class="label">核心贡献：</p>
                <div class="sub-box">
                  <p class="sub-label"><span class="high">功能开发</span></p>
                  <div class="list">
                    <p class="value"><span class="high">独立对接与交付：</span>100%还原设计稿，独立对接网易私有化接口（<span
                        class="keyword">RESTful API</span>），实现动态数据交互，交付准确率<span class="keyword">100%</span>。</p>
                    <p class="value"><span class="high">兼容性与稳定性：</span>解决<span
                        class="keyword">Android/iOS/iPad</span>多机型显示适配与JS逻辑兼容问题，异常问题<span
                        class="keyword">24小时内闭环</span>，上线后<span class="keyword">0重大缺陷</span>。</p>
                    <p class="value"><span class="high">互动功能开发：</span>集成<span
                        class="keyword">微信/QQ/微博</span>授权登录，开发抽奖、助力、绘图、微信支付等互动功能，用户行为埋点覆盖率达<span
                        class="keyword">100%</span>。</p>
                    <p class="value"><span class="high">登录态优化：</span>基于 <span class="keyword">Pinia + EventBus</span>
                      实现登录态持久化与模块解耦，代码维护效率提升<span class="keyword">40%</span>。</p>
                    <p class="value"><span class="high">海报生成方案：</span>设计 <span class="keyword">Html2canvas +
                        QRCode</span> 动态海报生成方案，分享转化率提升<span class="keyword">20%</span>。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">性能优化</span></p>
                  <div class="list">
                    <p class="value"><span class="high">首屏加载优化：</span>通过静态资源压缩与DNS缓存优化，首屏加载时间从<span
                        class="keyword">3.5s</span>降至<span class="keyword">1.5s</span>，用户跳出率降低<span
                        class="keyword">35%</span>。</p>
                    <p class="value"><span class="high">接口调用优化：</span>采用用户行为数据本地缓存策略，减少<span
                        class="keyword">40%</span>接口调用，高并发场景响应速度提升<span class="keyword">30%</span>。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">工程化提效</span></p>
                  <div class="list">
                    <p class="value"><span class="high">组件封装：</span>封装<span class="keyword">Swiper 单屏</span>、<span
                        class="keyword">Screen适配</span>等<span class="keyword">10+</span>高频组件，减少<span
                        class="keyword">30%</span>重复开发量。</p>
                    <p class="value"><span class="high">协作效率提升：</span>制定代码复用规范，多人协作效率提升<span class="keyword">30%</span>。
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <p class="label">项目成果：</p>
                <div class="list">
                  <p class="value">BUG率低于团队平均水平，活动页稳定支持峰值UV <span class="keyword">50万+</span>，用户体验反馈良好，获甲方表扬。</p>
                  <p class="value">通过工具链沉淀与代码复用规范，相似需求开发周期缩短<span class="keyword">30%</span>。</p>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="hr"></div> -->
          <!-- 
          <div class="line-box">
            <div class="top-info">
              <p class="name">宇宏数据可视化大屏项目</p>
              <p class="date">2024年1月 - 2024年3月</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value"><span class="high">Vue2</span>、<span class="high">Vue Router</span>、<span
                      class="high">Vuex</span>、<span class="high">Echarts</span>、<span class="high">Axios</span>、<span
                      class="high">ElementUI</span>、<span class="high">CSS3</span>
                  </p>
                </div>
              </div>
              <div class="item">
                <p class="label">项目描述：</p>
                <div class="list">
                  <p class="value">
                    独立开发数据可视化大屏项目，集成柱状图、饼图、雷达图等多种图表，支持实时数据更新与动态展示。
                  </p>
                  <p class="value">
                    所有图表皆<span class="high">高度还原</span>设计稿样式，通过CSS3动画实现中间区域的动态效果，提升视觉吸引力。
                  </p>
                </div>
              </div>
              <div class="item">
                <p class="label">核心贡献：</p>

                <div class="list">
                  <p class="value">基于<span class="high">Echarts</span>实现多图表联动，数据展示清晰直观。</p>
                  <p class="value">基于浏览器渲染机制优化动画性能，确保大屏流程运行。</p>
                </div>

              </div>
              <div class="item">
                <p class="label">项目成果：</p>
                <div class="list">
                  <p class="value">大屏成功上线并稳定运行，支撑日均数据展示需求。</p>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="hr"></div>

        <div class="content content-gzjl">
          <div class="line-box">
            <div class="item" style="font-size: 0.2rem;">浙江博润空间科技有限公司</div>
            <div class="item" style="font-size: 0.2rem;">前端开发工程师（实习）</div>
            <div class="item" style="font-size: 0.2rem;">2021年7月 - 2022年1月</div>
          </div>
        </div>

        <div class="content content-xmjl">
          <div class="line-box">
            <div class="top-info">
              <p class="name">项目一：江南镇优控办公管理系统<span>（浙政钉小程序）</span></p>
              <p class="date">2021年8月 — 2021年11月</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">技术栈：<span class="keyword">专有钉钉小程序框架</span></p>
              </div>
              <div class="item">
                <p class="label">
                  项目描述：<span>一款集成审批/反馈、值班值守、信访诉求及人事管理等功能于一体的高效办公管理小程序，基于“<span
                      class="keyword">浙政钉</span>”平台构建，旨在提升江南镇政府内部沟通与工作效率。</span>
                </p>
              </div>
              <div class="item">
                <p class="label">核心贡献：</p>
                <div class="sub-box">
                  <p class="sub-label">
                    <span class="high">页面开发与组件封装：</span>
                    <span>主导登录页、审批页、表单页和个人中心等关键页面的设计与实现，注重代码复用性，封装了多个高频率使用的<span
                        class="keyword">UI组件</span>，显著提高了团队开发效率。</span>
                  </p>
                  <p class="sub-label">
                    <span class="high">核心模块开发：</span>
                    <span>负责用户认证、审批流程自动化以及值班值守安排等核心功能模块的设计与实现，通过精心设计的接口嵌套确保数据流畅交互，增强了系统的<span
                        class="keyword">稳定性</span>和用户体验。</span>
                  </p>
                  <p class="sub-label">
                    <span class="high">真机调试与协作：</span>
                    <span>利用真实设备进行包括信访诉求处理、审批流程在内的各项功能模块的测试与调试，确保产品在实际使用环境下的表现优异。积极参与团队协作，通过有效的沟通解决组员遇到的技术难题，推动项目顺利进展。</span>
                  </p>
                </div>
              </div>
              <div class="item">
                <p class="label">项目成果：</p>
                <div class="list">
                  <p class="value">在三个月内成功交付项目，提前完成了预定目标。</p>
                  <p class="value">系统上线后得到了用户的一致好评，显著改善了江南镇政府的日常办公体验。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="line-box">
            <div class="top-info">
              <p class="name">项目二：浙江省城镇污水零直排区动态监管系统<span>（大屏可视化）</span></p>
              <p class="date">2021年10月 — 2021年12月</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">技术栈：<span class="keyword">ECharts</span>、<span class="keyword">Vue.js</span>、<span
                    class="keyword">Axios</span>、<span class="keyword">WebSocket</span>、<span
                    class="keyword">天地图API</span>、<span class="keyword">ElementUI</span></p>
              </div>
              <div class="item">
                <p class="label">核心贡献：</p>
                <div class="list">
                  <p class="value"><span class="high">数据可视化：</span>负责该系统的数据展示模块设计与实现，利用
                    <span class="keyword">ECharts</span> 和 <span class="keyword">WebSocket</span>
                    实现了实时数据更新及动态图表展示，显著提升了数据监控的直观性和效率。
                  </p>
                  <p class="value"><span class="high">天地图集成：</span>在大屏核心区域嵌入<span class="keyword">天地图</span>，通过调用<span
                      class="keyword">天地图
                      API</span>，结合服务器返回的经纬度数据，动态展示“井”点位的空间分布情况，帮助用户快速定位关键区域。</p>
                  <p class="value"><span class="high">接口优化：</span>完成与后端团队的数据接口对接，通过优化数据加载逻辑减少了延迟，提升了用户体验。</p>
                </div>
              </div>
              <div class="item">
                <p class="label">项目成果：</p>
                <div class="list">
                  <p class="value">项目完成了核心功能开发并通过内部测试，因客户需求调整暂缓上线，但在开发过程中积累了丰富的<span class="keyword">数据可视化经验</span>。</p>
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
            <div class="detail-info">
              <div class="item">
                <p class="label">HTML/CSS/JS：<span>扎实掌握 <span class="keyword">HTML5、CSS3、JavaScript（ES6+）</span>
                    ，熟悉<span class="keyword">浏览器渲染机制与性能优化原理</span>。</span></p>
              </div>
              <div class="item">
                <p class="label">Vue2/3应用开发：<span>熟练使用 <span class="keyword">Vue2 和 Vue3</span> 开发复杂应用，熟练运用 <span
                      class="keyword">Composition API</span> 实现<span class="keyword">高复用组件</span>。</span></p>
              </div>
              <div class="item">
                <p class="label">UniApp与原生框架：<span>熟练使用 <span class="keyword">UniApp 以及原生小程序框架</span>、自定义组件开发，基于 <span
                      class="keyword">Canvas</span> 实现动态渲染功能。</span></p>
              </div>
              <div class="item">
                <p class="label">小程序性能优化：<span>通过<span class="keyword">分包加载与本地缓存</span>优化小程序性能，<span
                      class="keyword">首屏加载时间缩短 30%</span>，支撑<span class="keyword">日均 10万+ 用户访问</span>。</span></p>
              </div>
              <div class="item">
                <p class="label">资源管理：<span><span class="keyword">资源预加载、懒加载、本地缓存策略、DNS 预解析</span>等方案落地，<span
                      class="keyword">白屏时间减少 50%，用户跳出率降低 20%</span>。</span></p>
              </div>
              <div class="item">
                <p class="label">常用插件：<span>熟练使用 <span class="keyword">Swiper</span>（轮播插件）、<span
                      class="keyword">HTML2Canvas</span>（海报生成）、<span class="keyword">ECharts</span>（数据可视化）、<span
                      class="keyword">GSAP</span>（JS 动画插件）等。</span>
                </p>
              </div>
              <div class="item">
                <p class="label">工具链：<span><span class="keyword">Git</span>（代码版本控制）、<span
                      class="keyword">NVM</span>（Node 版本管理工具）、<span class="keyword">WinMergeU</span>（文件差异对比工具）。</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="info-part">
        <div class="label">教育经历</div>
        <div class="content content-jyjl">
          <div class="line-box">
            <p class="item">浙江工贸职业技术学院</p>
            <p class="item">软件技术（大专）</p>
            <p class="item">2019年9月-2022年6月</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="export-btns">
    <a href="javascript:;" class="btn-export" title="导出图片" @click="handleExportImg">导出图片</a>
    <a href="javascript:;" class="btn-export" title="导出PDF" @click="handleExportPDF">导出PDF</a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { formatDate, getScale } from '../js/utils';
import EditableText from '../components/EditableText';

const loading = ref(false);

const editableTextStyle = {
  'font-size': '0.2rem',
  'color': '#000',
  'line-height': '0.28rem'
};
const resumeContainer = ref(null);

const basicInfo = ref([
  ['姓名', '方思明'],
  ['年龄', '24岁'],
  ['工作经验', '3年'],
  ['电话', '18072127956'],
  ['邮箱', 'jinwming@gmail.com'],
  ['所在地区', '杭州市'],
])

const workExperience = ref([
  ['杭州鑫烨科技有限公司（网易合作供应商）', '前端开发工程师', '2022年4月 - 至今'],
  // ['浙江博润空间科技有限公司', '前端开发工程师（实习）', '2021年7月 - 2022年3月'],
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

const handleExportImg = (pdfCb) => {
  if (!resumeContainer.value) {
    return;
  }

  window.scrollTo(0, 0);

  loading.value = true;
  // eslint-disable-next-line
  html2canvas(resumeContainer.value, {
    scale: getScale(),
    width: resumeContainer.value.offsetWidth,
    height: resumeContainer.value.offsetHeight,
    useCORS: true,
    backgroundColor: null,
    scrollX: 0,
    scrollY: 0,
  }).then(function (canvas) {
    if (pdfCb && typeof pdfCb === 'function') {
      pdfCb(canvas);
      return;
    }

    const imgData = canvas.toDataURL('image/jpg');

    const a = document.createElement('a');
    a.href = imgData;
    a.download = `附件简历-方思明-前端开发工程师-3年-${formatDate(new Date(), 'yyyymmdd')}.jpg`;
    a.click();
    // ElMessage({
    //   message: '导出成功',
    //   type: 'success',
    // })
  }).catch(() => {
    // ElMessage({
    //   message: '导出失败',
    //   type: 'error',
    // })
  }).finally(() => {
    loading.value = false;
  });
}

const handleExportPDF = () => {
  if (!resumeContainer.value) {
    return;
  }

  handleExportImg((canvas) => {
    // 计算等比缩小的尺寸
    const targetWidth = 595; // A4 宽度（单位：pt，默认 1pt = 1/72 inch）
    const scaleFactor = targetWidth / canvas.width; // 缩放比例
    const targetHeight = canvas.height * scaleFactor; // 等比缩小的高度

    // 创建 PDF 文档
    // eslint-disable-next-line
    const pdf = new jspdf.jsPDF({
      orientation: 'portrait', // 纵向
      unit: 'pt', // 使用点（point）作为单位
      format: [targetWidth, targetHeight], // 自定义尺寸
    });

    // 将图片插入 PDF（等比缩小）
    pdf.addImage(canvas, 'JPEG', 0, 0, targetWidth, targetHeight, undefined, 'FAST');
    // pdf.save(`附件简历-方思明-前端开发工程师-3年-${formatDate(new Date(), 'yyyymmdd')}.pdf`);
    pdf.save(`附件简历-方思明-前端开发工程师-3年-${Date.now()}.pdf`);
    loading.value = false;
    // ElMessage({
    //   message: '导出成功',
    //   type: 'success',
    // })
  })
}

</script>

<style lang="scss">
@import url('../assets/css/resumeIndex.scss');
</style>