<template>
  <teleport to="body">
    <div :class="['loading-layer', { on: loading }]">
      <div class="loader"></div>
    </div>
  </teleport>
  <div class="container">
    <div ref="resumeContainer" class="resume-container">
      <div class="part-header">
        <div class="inner">
          <div class="inner-left">
            <div class="user-name">方思明</div>
            <!-- <div class="top-info-line">
              <div class="item bold">求职意向：前端开发</div>
              <div class="item">杭州</div>
              <div class="item">13-14k</div>
              <div class="item">随时到岗</div>
            </div> -->
            <div class="top-base-info">
              <div class="item" v-for="(item, index) in topBaseInfo" :key="index">
                <div :class="['label', `icon-${item.key}`]"><span
                    v-text-justify="{ text: item.name, width: 'fit-content', minWidth: 0.82, noJustify: item.noJustify }"></span>
                  <block>:</block>
                </div>
                <div class="value">{{ item.value }}</div>
              </div>
            </div>
          </div>
          <div class="inner-right">
            <!-- <div class="avatar"><img src="@/assets/img/picture.jpg"></div> -->
            <!-- <div class="avatar"><img src="@/assets/img/avatar.png"></div> -->
          </div>
        </div>
      </div>
      <div class="part-context">
        <div class="left-line"></div>

        <div class="context-item icon-technology">
          <div class="name">技术栈</div>
          <div class="context-type type-list">
            <div class="item">
              <span
                class="label">框架方面：</span>精通Vue2/3等现代前端框架，理解其核心原理以及差异，拥有Vue框架开发多个大型项目的开发经验，对其框架的周边生态（Vue-Router、Pinia、ElementUI）有一定的使用心得和体会。
            </div>
            <div class="item">
              <span class="label">工程化方面：</span>熟练掌握Webpack、Vite等前端工程化工具，了解不同工具的核心原理以及差异，针对每种工具能实现自定义构建流程和打包优化。
            </div>
            <div class="item">
              <span class="label">C端开发经验：</span>熟练使用UniAPP等跨端框架或者原生语法独立开发微信小程序。
            </div>
            <div class="item">
              <span class="label">性能优化：</span>掌握前端常见性能优化手段，包括代码分割、懒加载、资源优化等技术，显著降低FCP和LCP时间，提升用户交互体验。
            </div>
            <div class="item">
              <span class="label">后端能力：</span>熟悉PHP以及ThinkPHP框架, 能够设计并实现Restful风格的API，做到前后端分离。
            </div>
            <div class="item">
              <span class="label">数据库方面：</span>熟悉MYSQL数据库的基本使用， 能够设计简单的数据库模型，进行数据的CRUD操作。
            </div>
            <div class="item">
              <span class="label">设计模式：</span>熟悉SOLID设计原则以及前端常用设计模式，能够在合适的场景下应用这些模式，提高代码的可维护性和可扩展性。
            </div>
            <div class="item">
              <span class="label">编码能力：</span>拥有扎实的HTML、CSS、JS基础，针对部分前端核心知识有深入研究。
            </div>
          </div>
        </div>

        <div class="context-item icon-work">
          <div class="name">工作经验</div>
          <div class="context-top-line">
            <div class="item">2022-04 ~ 至今</div>
            <div class="item">杭州鑫烨科技有限公司（网易合作）</div>
            <div class="item">前端开发工程师</div>
          </div>
          <div class="sub-context">
            <div class="sub-label">工作职责</div>
            <div class="sub-list sub-list-point">
              <div class="item">
                <span class="point">1.</span>负责前端项目各业务模块的开发。
              </div>
              <div class="item">
                <span class="point">2.</span>配合后端人员进行接口联调。
              </div>
              <div class="item">
                <span class="point">3.</span>参与代码评审，确保代码质量和规范性，根据优化建议对代码进行优化。
              </div>
            </div>
          </div>
          <div class="sub-context">
            <div class="sub-label">工作成绩</div>
            <div class="sub-list sub-list-point">
              <div class="item">
                <span class="point">1.</span>基于公司Vue脚手架开发C端业务通用模板，覆盖PC及移动H5场景，复用业务能力，为同类需求节省<span
                  class="high">2-6人时/次</span>。
              </div>
              <div class="item">
                <span class="point">2.</span>独立封装微信小程序Canvas海报生成工具库，解决复杂绘图与兼容问题，覆盖<span
                  class="high">98%</span>的主流机型，该工具库已应用于《第五人格》、《王牌竞速》等<span
                  class="high">5</span>个网易同类小程序项目，降低图片绘制及生成的开发门槛。
              </div>
              <div class="item">
                <span class="point">3.</span>项目交付效率与质量获甲方客户高度认可，多次获得口头表扬，全年保持<span class="high">0</span>客诉。
              </div>
            </div>
          </div>
        </div>

        <div class="context-item icon-project">
          <div class="name">项目经验</div>

          <div class="project-wrap">
            <div class="context-top-line">
              <div class="item">2024-04 ~ 至今</div>
              <div class="item">网易燕云官方资讯小程序</div>
              <div class="item">前端开发工程师</div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目描述</div>
              <div class="sub-list">
                <div class="item">
                  网易燕云官方资讯小程序，服务百万级《燕云十六声》玩家。核心功能包括：账号绑定与游戏数据实时查询（时长/探索度）、万相集作品收藏同步；集成攻略资讯、福利礼包及社区活动。上线3个月日活突破<span
                    class="high">10w+</span>，有效承接游戏外流量，打造玩家一站式聚集地。
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">技术栈</div>
              <div class="sub-list">
                <div class="item">
                  微信小程序原生框架、WxParse富文本解析、Lodash
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目职责</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>根据产品需求文档，UI设计图，完成每一期的开发需求</div>
                <div class="item"><span class="point">2.</span>针对复用率高的代码，提取为公共组件，增强代码的复用性</div>
                <div class="item"><span class="point">3.</span>开发动态海报生成功能，实现图片文字灵活排版与性能优化</div>
                <div class="item"><span class="point">4.</span>搭建富文本展示与社交互动体系，支持内容解析、跳转及用户交互</div>
                <div class="item"><span class="point">5.</span>构建数据埋点与通用请求层，保障数据上报与接口调用的稳定高效</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目业绩</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>上线3个月日活跃用户突破<span class="high">10万</span>，日均用户互动量超过<span
                    class="high">20万次</span>，成为游戏外官方资讯核心入口，快速积累高粘性用户群体，有效承接游戏外流量。</div>
                <div class="item"><span class="point">2.</span>使用WebAssembly技术实现前端图像处理，结合Web
                  Worker优化图像效率，实现图像处理速度提升<span class="high">2倍</span>，降低<span
                    class="high">50%</span>的处理延迟，日均处理用户图像超<span class="high">6000</span>张，显著提高用户体验。
                </div>
                <div class="item">
                  <span class="point">3.</span>实现虚拟列表，通过缓冲区技术显著提升长列表的滚动流畅度和渲染性能。经过优化，渲染时间减少<span
                    class="high">90%</span>，实现了滚动无卡顿。该优化方案已成功应用到多个项目，有效解决高数据量场景下的性能瓶颈问题。
                </div>
              </div>
            </div>
          </div>

          <div class="project-wrap">
            <div class="context-top-line">
              <div class="item">2022-10 ~ 至今</div>
              <div class="item">网易游戏专题跨端开发合集</div>
              <div class="item">前端开发工程师</div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目描述</div>
              <div class="sub-list">
                <div class="item">
                  因网易游戏运营活动具有高频、多样化的特点，三年多时间深度参与其营销体系建设，独立或主导完成<span
                    class="high">200+</span>个专题活动页开发，覆盖PC端官网活动、移动端H5页面及小游戏互动页，并为部分活动配套开发轻量级管理后台，服务于《蛋仔派对》《第五人格》《梦幻西游》等多款头部游戏的版本推广、节日运营及品牌宣发。
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">技术栈</div>
              <div class="sub-list">
                <div class="item">Vue3、Pinia、JQuery、ElementUI、Vant4、Html2Canvas、JsPDF、GSAP、Clipboard、Swiper
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目职责</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>负责移动H5活动页、官网页及PC端专题页的多端开发与落地</div>
                <div class="item"><span class="point">2.</span>对接后端接口实现数据交互，适配不同业务场景的复杂需求</div>
                <div class="item"><span class="point">3.</span>负责多端页面适配（PC/移动），确保各终端用户体验一致</div>
                <div class="item"><span class="point">4.</span>参与需求评审、测试验收全流程，保障项目按时高质量上线</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目业绩</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>三年累计完成<span
                    class="high">200+</span>个网易游戏营销专题页开发，覆盖多个网易头部游戏，支撑版本推广、节日运营等高频业务需求。</div>
                <div class="item"><span
                    class="point">2.</span>使用计时器劫持模拟，并通过线程通信，封装通用的解决浏览器页标签计时器节流问题。减少开发期间的心智负担，并收录到企业通用库，服务于公司相关业务产品。
                </div>
                <div class="item"><span class="point">3.</span>基于监控平台数据反馈，针对首次访问网络耗时进行专项优化，通过改进DNS解析策略，使DNS解析时间降低<span
                    class="high">99%</span>，FCP/LCP分别提升<span class="high">25%-30%</span>；该功能已被收录到公司通用库，赋能<span
                    class="high">10+</span>个项目。
                </div>
                <div class="item"><span class="point">4.</span>针对首页白屏问题，通过defer方案，配合自行研发的元素嗅探工具，完成的首屏切片化渲染。FCP提升<span
                    class="high">99%</span>，LCP提升<span class="high">95%</span>，RR提升<span class="high">12%</span>。</div>
              </div>
            </div>
          </div>

          <div class="project-wrap">
            <div class="context-top-line">
              <div class="item">2022-04 ~ 2022-10</div>
              <div class="item">江南·优政智控平台</div>
              <div class="item">前端开发工程师</div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目描述</div>
              <div class="sub-list">
                <div class="item">
                  随着数字化改革在基层治理中的深入推进，江南镇原有办公方式面临流程分散、信息不同步、审批效率低等问题，难以满足日常协同需求。为此，打造PC端统一办公入口，实现审批、值班、信访、人事等核心业务线上协同，助力基层治理数字化转型。
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">技术栈</div>
              <div class="sub-list">
                <div class="item">Vue、Vue-router、Vuex、Axios、ElementUI</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目职责</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>参与项目全流程开发，根据需求与UI完成各期迭代，确保功能按时交付。</div>
                <div class="item"><span class="point">2.</span>提取公共组件（表格/表单/弹窗），提升代码复用性及维护效率。</div>
                <div class="item"><span class="point">3.</span>主导审批、值班、信访、人事等核心业务模块开发，实现业务线上协同。</div>
                <div class="item"><span class="point">4.</span>封装Axios请求层，配置动态路由与状态管理，保障系统流畅运行。</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目业绩</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>实现业务流程线上化闭环，覆盖全镇<span
                    class="high">20</span>余个部门及村社，日均处理审批<span class="high">100</span>余件，审批效率提升<span
                    class="high">40%</span>以上，显著缩短办理周期，获用户一致好评。
                </div>
                <div class="item">
                  <span
                    class="point">2.</span>设计适用于长表单应用的高性能数据存储和同步模块，并主导该模块的实现和落地。通过深度优化本地存储和采用浏览器跨标签页通信方案，将表单数据存储和同步效率提升<span
                    class="high">90%</span>，从根源上规避了数据遗失风险。该模块已广泛应用到公司其他项目。
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="context-item icon-education">
          <div class="name">教育背景</div>
          <!-- <div class="context-top-line">
          <div class="item">2019-09 ~ 2022-06</div>
          <div class="item">浙江工贸职业技术学院</div>
          <div class="item">软件技术</div>
        </div> -->
          <div class="context-top-line">
            <div class="item">温州大学</div>
            <div class="item">软件工程</div>
          </div>
          <!-- <div class="context-type type-list">
            <div class="item">主修课程包括：前端框架应用开发、Web应用开发、数据库应用技术、Node.js应用开发、PHP应用开发、计算机数学。</div>
          </div> -->
        </div>

        <div class="context-item icon-evaluate">
          <div class="name">个人评价</div>
          <div class="context-type type-list">
            <div class="item">
              热衷于前端开发领域，不断扩展专业知识库，深入研读了众多前沿的前端技术书籍，包括但不限于《Vue.js设计与实现》《前端架构设计》《前端工程化-体系设计与实践》等。无论面对何种新兴技术，始终持积极态度，并通过阅读专业书籍以及相关视频，能在一周内快速理解并应用这些技术。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isExport" :class="['export-btns', { 'is-mobile': isMobile }]">
    <a href="javascript:;" class="btn-export" title="导出图片" @click="handleExportImg">导出图片</a>
    <a href="javascript:;" class="btn-export" title="导出PDF" @click="handleExportPDF">导出PDF</a>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getScale, isMobile } from '../js/utils';
import { vTextJustify } from '@/js/custom';
import textRainInit from '@/js/textRain';

onMounted(() => {
  textRainInit();
})

const route = useRoute();

const isExport = computed(() => route.query.export === '1');

const topBaseInfo = ref([
  { key: 'age', name: '年龄', value: '25岁' },
  { key: 'sex', name: '性别', value: '男' },
  // { key: 'position', name: '籍贯', value: '温州' },
  { key: 'duration', name: '工作年限', value: '4年经验' },
  { key: 'telephone', name: '电话', value: '180 7212 7956' },
  { key: 'email', name: '邮箱', value: 'jinwming@qq.com' },
  // { key: 'qq', name: 'QQ', value: '1327354592' },
  { key: 'wechat', name: '微信', value: '_JINWM_' },
  // { key: 'git', name: 'Gitee', value: 'https://gitee.com/jinwm/', noJustify: false },
])

const loading = ref(false);
const resumeContainer = ref(null);
const fileName = '方思明-前端开发-18072127956';

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
    // a.download = `方思明-4年前端开发-${formatDate(new Date(), 'yyyymmdd')}.jpg`;
    a.download = `${fileName}.jpg`;
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
    // pdf.save(`附件简历-方思明-前端开发工程师-4年-${formatDate(new Date(), 'yyyymmdd')}.pdf`);
    // pdf.save(`附件简历-方思明-前端开发工程师-4年-${Date.now()}.pdf`);
    pdf.save(`${fileName}.pdf`);
    loading.value = false;
    // ElMessage({
    //   message: '导出成功',
    //   type: 'success',
    // })
  })
}

</script>
<style lang="scss">
@import url('../assets/css/resumeV2.scss');
</style>