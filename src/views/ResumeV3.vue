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
            <div v-if="isPrivacy" class="avatar"><img src="@/assets/img/avatar.png"></div>
            <div v-else class="avatar"><img src="@/assets/img/pic2.jpg"></div>
          </div>
        </div>
      </div>
      <div class="part-context">
        <div class="left-line"></div>

        <div class="context-item icon-technology">
          <div class="name">技术栈</div>
          <!-- <div class="context-type type-list">
            <div class="item">
              <span class="label">框架方面：</span>精通 Vue/3 等现代前端框架，理解其核心原理以及差异，拥有 Vue
              框架开发多个大型项目的开发经验，对其框架的周边生态（Vue-Router、Pinia、ElementUI）有一定的使用心得和体会。
            </div>
            <div class="item">
              <span class="label">工程化方面：</span>熟练掌握 Webpack、Vite 等前端工程化工具，了解不同工具的核心原理以及差异，针对每种工具能实现自定义构建流程和打包优化。
            </div>
            <div class="item">
              <span class="label">C端开发经验：</span>熟练使用 UniApp 等跨端框架或者原生语法独立开发微信小程序。
            </div>
            <div class="item">
              <span class="label">性能优化：</span>掌握前端常见性能优化手段，包括代码分割、懒加载、资源优化等技术，显著降低 FCP 和 LCP 时间，提升用户交互体验。
            </div>
            <div class="item">
              <span class="label">编码能力：</span>拥有扎实的 HTML、CSS、JS 基础，针对部分前端核心知识有深入研究。
            </div>
            <div class="item">
              <span class="label">后端能力：</span>熟悉 Node.js 以及 Express 等框架，能够设计实现 Restful 风格的API，做到前后端分离。
            </div>
            <div class="item">
              <span class="label">数据库方面：</span>熟悉 MySQL 数据库的基本使用，能够设计简单的数据库模型，进行数据CRUD操作。
            </div>
            <div class="item">
              <span class="label">设计模式：</span>熟悉 SOLID 设计原则以及前端常用设计模式，能够在合适的场景下应用这些模式，提高代码的可维护性和可扩展性。
            </div>
            <div class="item">
              <span class="label">AI辅助开发：</span>擅长借助主流 AI IDE 提升从需求到落地的开发效率。
            </div>
          </div> -->
          <div class="context-type type-list">
            <div class="item">精通 Vue 全生态与跨端开发，具备工程化构建及 Node 与 MySQL 应用能力，熟悉 AI Agent 编排与 LLM 应用集成。</div>
          </div>
        </div>

        <div class="context-item icon-work">
          <div class="name">工作经历</div>
          <div class="context-top-line">
            <div class="item">2022-04 ~ 至今</div>
            <!-- <div class="item">杭州鑫烨科技有限公司 · 网易游戏网站部</div> -->
            <!-- <div class="item">网易（杭州）网络有限公司 · 网易游戏网站部</div> -->
            <div class="item">网易游戏 · 网站部</div>
            <div class="item">前端开发工程师</div>
          </div>
          <div class="sub-context">
            <div class="sub-label">业务</div>
            <div class="sub-list sub-list-point">
              <div class="item">
                <span
                  class="point"></span>负责多端业务的前端开发与迭代，对接后端完成接口联调、数据交互与复杂业务逻辑实现；参与代码评审与规范制定，保障代码质量与可维护性；同时负责页面性能优化、问题排查与线上稳定性保障。
              </div>
              <div class="item">
                <span
                  class="point"></span>在PC官网及运营管理平台中，负责品牌展示、数据看板、表单表格、活动编排等核心模块开发，支撑官方对外展示与内部运营效率提升，并通过切片化渲染、虚拟列表等手段持续优化性能，参与团队组件库建设。
              </div>
              <div class="item">
                <span
                  class="point"></span>在百万级玩家资讯小程序中，负责账号绑定、游戏数据实时查询、万相集作品同步、攻略资讯及社区活动等功能，打造玩家一站式聚集地；小程序上线3个月日活突破10万，日均互动量超20万次，全流程完成复杂业务逻辑联调、代码规范落地及线上稳定性保障。
              </div>
              <div class="item">
                <span
                  class="point"></span>在游戏营销专题H5中，深度负责多款头部游戏的营销专题迭代，覆盖节日大促、版本上线、互动玩法、拉新活动等高频场景，累计完成并上线200+专题页，全程参与需求评审、开发联调、测试验收，并通过通用模板与工具库提升多端复用性及代码质量。
              </div>
            </div>
          </div>
          <div class="sub-context">
            <div class="sub-label">架构</div>
            <div class="sub-list sub-list-point">
              <div class="item">
                <span class="point"></span>
                基于监控平台的数据反馈优化首页白屏问题，通过 defer 延迟加载结合组件优先级调度实现<span class="high">首屏切片化渲染</span>，优化后<span class="high"> FCP
                  提升约 35%，LCP
                  提升约 30%</span>，页面加载体验显著改善。
              </div>
              <div class="item">
                <span class="point"></span>
                实现<span class="high">虚拟列表</span>与<span
                  class="high">缓冲区渲染优化</span>，提升长列表滚动流畅度与渲染效率，降低大数据量下的卡顿现象，该方案已在多个平台项目中复用，有效解决<span
                  class="high">高数据量场景</span>的性能问题。
              </div>
              <div class="item">
                <span class="point"></span>
                基于<span class="high"> Formily </span>实现 PC 运营平台表单中心化设计，通过<span class="high"> schema
                  驱动与字段联动逻辑抽象</span>，统一全平台表单规范，<span class="high">降低复杂表单开发成本</span>，提升后台系统扩展性与维护性。
              </div>
              <div class="item">
                <span class="point"></span>
                团队反馈基于事件总线的通信机制报错难以排查且<span class="high">“一错全停”</span>。通过
                <span class="high">调整监听器执行时序与调用栈隔离</span>，实现错误不阻塞且堆栈直达，<span class="high">排查效率提升
                  90%</span>，该方案已广泛应用于多个项目。
              </div>
              <div class="item">
                <span class="point"></span>
                基于 <span class="high">WxParse </span>二次封装，实现富文本交互增强，通过 <span class="high">AST 节点遍历 +
                  自定义属性映射</span>注入交互协议，利用事件委托实现零埋点统一调度 <span class="high">4 类元素、6
                  种场景</span>，覆盖图片预览、视频播放、多类型链接跳转及一键复制等能力。
              </div>
              <div class="item">
                <span class="point"></span>
                封装小程序 Canvas
                通用海报绘制库，构建<span class="high">声明式渲染管线</span>，统一图片与文字的布局计算模型，支持几何变换（Cover/圆角/旋转/灰度）、高级排版（多行换行/字间距/对齐），内置
                <span class="high">内存级图片缓存池</span> 与
                <span class="high">加载异常降级策略</span>，兼容 98% 机型，大幅降低海报开发维护成本。
              </div>
              <div class="item">
                <span class="point"></span>
                基于网易项目搭建 Vue 通用业务模板，通过 User-Agent 解析与响应式适配，实现<span class="high"> PC、移动 H5
                  及游戏内嵌横屏三端代码复用</span>；核心业务逻辑统一维护，同类需求开发耗时平均节省 4-7 人时 / 次。
              </div>
              <div class="item">
                <span class="point"></span>
                抽象封装项目通用 JS 工具库，收敛高频底层逻辑；涵盖<span class="high">端型判断</span>、<span class="high">社媒授权登录</span>及<span
                  class="high">文件上传 Token
                  加密流程</span>等模块；统一团队调用规范，累计复用<span class="high"> 20+ </span>业务场景，预计减少重复开发与调试耗时约 15 人时/月。
              </div>
            </div>
          </div>
          <div class="sub-context">
            <div class="sub-label">技术</div>
            <div class="sub-list sub-list-point">
              <div class="item">
                <span class="point"></span>针对小程序原生图像处理性能不足的问题，通过WebView嵌入H5，利用<span class="high"> WebAssembly
                </span>与<span class="high"> Web Worker </span>
                技术实现前端图像加速，处理速度<span class="high">提升约 1 倍</span>，延迟
                <span class="high">降低 50% </span>，日均处理图像超<span class="high"> 6000 张</span>，并通过<span class="high">
                  Pica.js 做兼容降级</span>，有效解决大图卡顿与设备兼容问题。
              </div>
              <div class="item">
                <span class="point"></span>针对游戏后端存盘延迟（约1min）导致的状态不一致问题，基于<span class="high">最终一致性思想</span>设计补偿机制，利用
                Storage Proxy 实现 <span class="high">“读己之所写”</span>
                ，在60s窗口期内代理队伍状态，消除用户重复点击；配合<span
                  class="high">退避递增轮询</span>（2s/次，最长60s）异步确认操作结果，直至状态同步完成。以极低成本解决了分布式状态滞后问题，保障了百业活动报名功能的稳定体验。
              </div>
              <div class="item">
                <span class="point"></span>
                采用 <span class="high">计时器劫持模拟</span> 及 <span class="high">线程通信</span>
                技术，封装了一套解决浏览器标签页计时器节流问题的 <span class="high">通用模块</span>，显著减少开发过程中的心智负担。该方案已纳入企业通用库，并应用于公司多个业务产品。
              </div>
              <div class="item">
                <span class="point"></span>
                攻克复杂粘贴板技术难点，参考<span class="high">飞书</span>的技术方案，实现<span class="high"> DOM 到 Clipboard
                  的数据链路转换</span>，并沉淀至企业通用库，服务于公司 4+ 个业务产品。
              </div>
            </div>
          </div>
        </div>

        <div class="context-item icon-education">
          <div class="name">教育经历</div>
          <!-- <div class="context-top-line">
          <div class="item">2019-09 ~ 2022-06</div>
          <div class="item">浙江工贸职业技术学院</div>
          <div class="item">软件技术</div>
        </div> -->
          <div class="context-top-line">
            <div class="item">2019-09 ~ 2023-06</div>
            <div class="item">温州大学</div>
            <div class="item">软件工程</div>
          </div>
          <!-- <div class="context-type type-list">
            <div class="item">主修课程包括：前端框架应用开发、Web应用开发、数据库应用技术、Node.js应用开发、PHP应用开发、计算机数学。</div>
          </div> -->
        </div>

        <!-- <div class="context-item icon-evaluate">
          <div class="name">个人评价</div>
          <div class="context-type type-list">
            <div class="item">
              对前端开发保持持续热情，主动拓展技术边界，系统研读过《Vue.js设计与实现》《前端架构设计》《前端工程化》等专业书籍。具备快速学习能力，面对新技术能在一周内完成从理解到应用落地，始终保持积极的技术探索态度。
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <div v-if="isExport" :class="['export-btns', { 'is-mobile': isMobile }]">
    <a href="javascript:;" class="btn-export" title="导出图片" @click="handleExportImg">导出图片</a>
    <a href="javascript:;" class="btn-export" title="导出PDF" @click="handleExportPDF">导出PDF</a>
  </div>
</template>
<script setup>
import $ from 'jquery';
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getScale, isMobile } from '../js/utils';
import { vTextJustify } from '@/js/custom';
import textRainInit from '@/js/textRain';
// import eventBus from '../js/eventBus';

// eventBus.asyncEmit('test', 1)
// eventBus.asyncEmit('test', [])
// eventBus.asyncEmit('test', 1)

const route = useRoute();

const isExport = computed(() => route.query.export === '1');
const isPrivacy = computed(() => route.query.privacy === '1');

onMounted(() => {
  textRainInit();

  // 填充 点
  $('.point').each((_, item) => {
    const index = $(item).parent('.item').index();
    $(item).text(`${index + 1}.`);
  })

  if (isPrivacy.value) {
    handlePrivacy([
      '方思明',
      '燕云十六声',
      '网易燕云官方',
      '180 7212 7956',
      'jinwming@qq.com',
      '_JINWM_',
      '蛋仔派对',
      '第五人格',
      '梦幻西游',
      { key: '网易', replace: '**' },
      '鑫烨科技',
      '江南镇'
    ]);
  }
})

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
const fileName = computed(() => {
  return isPrivacy.value ? '番茄鸡蛋-前端开发-18018018000' : '方思明-前端开发-18072127956';
});

const handleExportImg = (pdfCb) => {
  if (!resumeContainer.value) {
    return;
  }

  window.scrollTo(0, 0);

  loading.value = true;
  // eslint-disable-next-line
  html2canvas(resumeContainer.value, {
    scale: 4.3 || getScale(),
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
    a.download = `${fileName.value}.jpg`;
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
    pdf.save(`${fileName.value}.pdf`);
    loading.value = false;
    // ElMessage({
    //   message: '导出成功',
    //   type: 'success',
    // })
  })
}

// 批量替换文本节点中的关键词（支持字符串或 { key, replace } 对象）
function handlePrivacy(keywords) {
  if (!keywords || keywords.length === 0) return;

  // 隐私处理：全部替换为等长 *
  function maskPrivacy(str) {
    if (!str || str.length === 0) return '';
    return '*'.repeat(str.length);
  }

  // 转义正则特殊字符
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // 解析 keywords，构建 key -> replacer 映射
  const items = keywords.map(item => {
    if (typeof item === 'string') {
      return { key: item, replacer: match => maskPrivacy(match) };
    } else if (item && typeof item === 'object' && item.key) {
      const replaceValue = item.replace !== undefined ? item.replace : '';
      return { key: item.key, replacer: () => replaceValue };
    }
    return null;
  }).filter(Boolean);

  if (items.length === 0) return;

  // 按 key 长度降序排序，避免短词先匹配破坏长词
  items.sort((a, b) => b.key.length - a.key.length);

  // 构建正则
  const pattern = items.map(item => escapeRegex(item.key)).join('|');
  const regex = new RegExp(pattern, 'g');

  // 获取容器
  const container = document.querySelector('#app .resume-container');
  if (!container) return;

  // 遍历所有文本节点
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  // 替换文本
  textNodes.forEach(node => {
    const original = node.nodeValue;
    if (regex.test(original)) {
      regex.lastIndex = 0;
      const replaced = original.replace(regex, (matched) => {
        const matchedItem = items.find(item => item.key === matched);
        return matchedItem ? matchedItem.replacer(matched) : matched;
      });
      if (replaced !== original) {
        node.nodeValue = replaced;
      }
    }
  });
}
</script>
<style lang="scss">
@import url('../assets/css/resumeV2.scss');
@import url('../assets/css/resumeV2-1.scss');
</style>