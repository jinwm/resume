<template>
  <div ref="resumeContainer" class="container" v-loading="loading">
    <i class="icon"><img src="@/assets/img/icon.png"></i>
    <div class="main">
      <div class="slogan-title">个人简历</div>
      <div class="intention">求职意向：中级前端开发</div>
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
              <p class="name">网易《燕云十六声》官方小程序</p>
              <p class="date">2024年4月 - 2024年8月</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value"><span class="high">微信小程序原生框架</span>、<span class="high">Canvas</span>、<span
                      class="high">wxParse.js</span></p>
                </div>
              </div>
              <div class="item">
                <p class="label">项目描述：</p>
                <div class="list">
                  <p class="value not-point">
                    <span class="high">从0到1独立搭建</span>小程序核心功能，完成首页、活动列表、帖子详情、Web H5承载页等10+核心页面的开发与上线，支撑日均10万+用户互动。
                  </p>
                  <p class="value not-point">后续主导关键功能迭代及新增页面开发需求，并为团队提供技术支持与代码审查，确保项目质量和一致性。</p>
                </div>
              </div>
              <div class="item">
                <p class="label">核心贡献：</p>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">动态数据海报生成</span></p>
                  <div class="list">
                    <p class="value">基于<span class="high">Canvas</span>封装动态渲染模块，支持图片/文字自定义布局，性能提升90%。</p>
                    <p class="value">采用<span class="high">图片预加载</span>与<span
                        class="high">缓存方案</span>，优化海报生成性能，耗时从3.3s降低至0.3s。</p>
                    <p class="value">开发二维码合成模块，支持动态嵌入用户专属分享标识。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">富文本解析</span>与社交功能</p>
                  <div class="list">
                    <p class="value">基于<span class="high">wxParse.js</span>实现富文本解析，支持图片预览、超链接智能跳转（H5/小程序页面/外部小程序）。</p>
                    <p class="value">实现点赞、评论、分享等社交功能，提升用户互动体验。</p>
                  </div>
                </div>
                <div class="sub-box">
                  <p class="sub-label"><span class="high">数据埋点与上报模块</span></p>
                  <div class="list">
                    <p class="value">设计全局埋点上报模块，使用小程序UUID作为用户标识，支持页面显示上报和自定义事件上报。</p>
                    <p class="value">实现登录态依赖管理，通过<span class="high">Promise锁机制</span>避免wx.login和userinfo接口重复调用。</p>
                    <p class="value">开发自动重试策略，在网络异常时保障UUID获取成功率，减少数据上报丢失。</p>
                    <p class="value">封装统一上报方法，支持通过字段名匹配预定义上报内容，提升埋点开发和维护效率。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">工程化与性能优化</span></p>
                  <div class="list">
                    <p class="value">封装全局请求方法，支持自动携带Token、登录失效重试、加载状态管理。</p>
                    <p class="value">通过分包加载与本地缓存优化小程序性能。</p>
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
          <div class="hr"></div>
          <!-- 项目2：网易专题页集群 -->
          <div class="line-box">
            <div class="top-info">
              <p class="name">网易游戏营销专题开发<span>（合集项目）</span></p>
              <p class="date">2022年4月 - 至今</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value"><span class="high">Vue2/3</span>、<span class="high">Vue Router</span>、<span
                      class="high">Vuex/Pinia</span>、<span class="high">TypeScript</span>、<span
                      class="high">jQuery</span>、<span class="high">Preloader</span>、<span
                      class="high">Swiper</span>、<span class="high">Html2canvas</span>、<span
                      class="high">QRCode</span>、<span class="high">iScroll</span>
                  </p>
                </div>
              </div>
              <div class="item">
                <p class="label">项目描述：</p>
                <div class="list">
                  <p class="value not-point">
                    主导开发《蛋仔派对》《第五人格》《逆水寒》等游戏的活动、数据页（PC端/移动端H5），单日最高峰值UV超50万，项目平均交付周期6天。
                  </p>
                </div>
              </div>
              <div class="item">
                <p class="label">核心贡献：</p>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">功能开发</span></p>
                  <div class="list">
                    <p class="value">实现用户授权登录（微信、QQ等平台）、抽奖、助力、答题领奖等互动功能，用户行为数据埋点覆盖率达100%。</p>
                    <p class="value">开发动态海报生成功能，基于<span class="high">Html2canvas</span>+<span
                        class="high">QRCode</span>实现用户专属二维码嵌入与实时渲染，分享转化率提升20%。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">性能优化</span></p>
                  <div class="list">
                    <p class="value">通过<span class="high">静态资源优化（资源压缩、合并与缓存）</span>，使首屏加载时间从3.5s降至1.5s，有效降低用户的跳出率。</p>
                    <p class="value">设计用户行为数据缓存方案，接口调用频率减少40%，在并发场景下响应速度提升30%。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">工程化提效</span></p>
                  <div class="list">
                    <p class="value">沉淀<span class="high">Swiper</span>单屏模板、Screen适配、移动端伪横屏、Loading层等常用工具/组件，减少重复开发工作量。
                    </p>
                    <p class="value">推动团队代码复用规范，多人协作效率提升30%。</p>
                  </div>
                </div>

              </div>
              <div class="item">
                <p class="label">项目成果：</p>
                <div class="list">
                  <p class="value">BUG率低于团队平均水平，活动页稳定支持峰值UV 50万+，用户体验反馈良好，获网易内部技术认可。</p>
                  <p class="value">通过工具链沉淀与代码复用规范，相似需求开发周期缩短40%。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="hr"></div>

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
                      class="high">Vuex</span>、<span class="high">Echarts</span>、<span
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
          </div>
        </div>
      </div>

      <div class="info-part">
        <div class="label">技术能力</div>
        <div class="content content-grys">
          <div class="line-box">
            <div class="detail-info">
              <!-- <div class="item">
                <p class="label">精通：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value">
                      <span class="high">Vue2/3工程化开发</span>：掌握<span class="high">组件化开发</span>与Vue3特性 <span
                        class="high">Composition API</span>，熟悉状态管理（<span class="high">Vuex</span>）与路由管理（<span
                        class="high">Vue Router</span>）。基于<span class="high">Vue CLI</span>搭建标准化项目，推动团队工程化流程。
                    </p>
                  </div>
                </div>
              </div> -->
              <!-- 
              <div class="item">
                <p class="label">熟练：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value">
                      <span class="high">原生微信小程序开发</span>：熟练使用<span class="high">WXML/WXSS</span>、<span
                        class="high">自定义组件</span>、<span class="high">Canvas渲染</span>，通过<span
                        class="high">分包加载</span>与<span class="high">本地缓存</span>优化小程序性能，支持日均10万+用户访问。
                    </p>
                    <p class="value"><span class="high">资源预加载</span>、<span class="high">懒加载</span>、<span
                        class="high">本地缓存（LocalStorage）</span>、<span class="high">DNS预解析</span>等减少白屏时间，有效降低用户跳出率。
                    </p>
                  </div>
                </div>
              </div> -->

              <!-- <div class="item">
                <p class="label">了解：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value"><span class="high">React</span>（<span class="high">组件化开发</span>、<span
                        class="high">JSX</span>、<span class="high">Hooks基础</span>）、<span
                        class="high">TypeScript</span>、<span class="high">Echarts</span>（数据可视化）。</p>
                  </div>
                </div>
              </div> -->

              <!-- <div class="item">
                <p class="label">工具：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value"><span class="high">Swiper</span>（轮播组件开发）、<span
                        class="high">Html2canvas</span>（动态海报生成）、<span class="high">jQuery</span>（开发效率）、<span
                        class="high">QRCode</span>（二维码生成）、<span class="high">Git</span>（版本控制）、<span
                        class="high">NVM</span>（Node版本管理）、<span class="high">Beyond Compare</span>（代码差异化对比）。</p>
                  </div>
                </div>
              </div> -->

              <div class="item">
                <p class="label">前端基础：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value"><span class="high">扎实掌握HTML5、CSS3、JavaScript（ES6+）</span>，熟悉浏览器渲染机制与性能优化原理。</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <p class="label">Vue工程化开发：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value"><span class="high">熟练使用Vue2/3开发复杂应用</span>，掌握组件化开发、Composition
                      API、Pinia/Vuex状态管理、Vue Router路由设计等。</p>
                    <p class="value">基于Vue CLI搭建标准化项目，推动团队代码规范与工程化流程落地。</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <p class="label">小程序开发：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value"><span class="high">熟练使用UniApp以及原生的WXML/WXSS、自定义组件开发</span>，基于Canvas实现动态渲染功能。</p>
                    <p class="value">通过分包加载与本地缓存优化小程序性能，首屏加载时间缩短40%，支撑日均10万+用户访问。</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <p class="label">性能优化：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value">资源预加载、懒加载、本地缓存策略、DNS预解析等方案落地，白屏时间减少50%，用户跳出率降低20%。</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <p class="label">第三方库与工具：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value">熟练使用Swiper（轮播组件）、HTML2Canvas（动态海报生成）、QRCode（二维码生成）、ECharts（数据可视化）等。</p>
                    <p class="value">工具链：Git（版本控制）、NVM（Node多版本管理）、Beyond Compare（代码差异化对比）。</p>
                  </div>
                </div>
              </div>

            </div>
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
  ['杭州鑫烨科技有限公司（网易合作供应商）', '前端开发工程师', '2022年4月 - 至今']
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