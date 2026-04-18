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
            <div class="sub-label">工作职责</div>
            <div class="sub-list sub-list-point">
              <div class="item">
                <span class="point">1.</span>负责PC 官网、运营平台、游戏营销 H5及小程序等多端业务开发与迭代。
              </div>
              <div class="item">
                <span class="point">2.</span>对接后端完成接口联调、数据交互与复杂业务逻辑实现。
              </div>
              <div class="item">
                <span class="point">3.</span>参与代码评审与规范制定，保障代码质量与可维护性。
              </div>
              <div class="item">
                <span class="point">4.</span>负责页面性能优化、问题排查与线上稳定性保障。
              </div>
            </div>
          </div>
          <!-- <div class="sub-context">
            <div class="sub-label">工作成绩</div>
            <div class="sub-list sub-list-point">
              <div class="item">
                <span class="point">1.</span>基于网易项目搭建 Vue 通用业务模板，通过 UA 判断与响应式适配，实现<span class="high"> PC、移动 H5
                  及游戏内嵌横屏三端代码复用；</span>核心业务逻辑统一维护，同类需求开发耗时平均节省<span class="high"> 4-7 人时/次。</span>
              </div>
            </div>
          </div> -->
        </div>

        <div class="context-item icon-project">
          <div class="name">项目经历</div>

          <div class="project-wrap">
            <div class="context-top-line">
              <div class="item">2025-06 ~ 至今</div>
              <div class="item">网易游戏 PC 官网及运营管理平台</div>
              <div class="item">前端开发工程师</div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目描述</div>
              <div class="sub-list">
                <div class="item">
                  网易游戏 PC
                  官网、运营管理平台及活动配置后台的开发与优化，包含品牌展示、数据看板、表单表格、活动编排等核心模块，支撑官方对外展示与内部运营效率提升。
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">技术栈</div>
              <div class="sub-list">
                <div class="item">Vue3、TypeScript、Pinia、Element Plus、Vite、ECharts、Less、JsPDF</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目职责</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>负责 PC 官网页面、运营管理平台的开发与维护，完成页面布局与交互实现。</div>
                <div class="item"><span class="point">2.</span>参与平台权限设计、路由控制、表单与表格等通用业务模块开发。</div>
                <div class="item"><span class="point">3.</span>对接后端接口，完成数据渲染、状态管理与复杂业务逻辑实现。</div>
                <div class="item"><span class="point">4.</span>负责 PC 端性能优化、兼容适配与线上问题排查。</div>
                <div class="item"><span class="point">5.</span>参与团队组件库建设，提升项目复用性与开发效率。</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目业绩</div>
              <div class="sub-list sub-list-point">
                <div class="item">
                  <span class="point">1.</span>基于监控平台的数据反馈优化首页白屏问题，通过 defer 延迟加载结合组件优先级调度实现<span
                    class="high">首屏切片化渲染</span>，优化后<span class="high"> FCP 提升约 35%，LCP
                    提升约 30%</span>，页面加载体验显著改善。
                </div>
                <div class="item">
                  <span class="point">2.</span>基于<span class="high"> Formily </span>实现 PC 运营平台表单中心化设计，通过<span
                    class="high"> schema 驱动与字段联动逻辑抽象</span>，统一全平台表单规范，<span
                    class="high">降低复杂表单开发成本</span>，提升后台系统扩展性与维护性。
                </div>
                <div class="item">
                  <span class="point">3.</span>团队反馈基于事件总线的通信机制报错难以排查且<span class="high">“一错全停”</span>。通过
                  <span class="high">调整监听器执行时序与调用栈隔离</span>，实现错误不阻塞且堆栈直达，<span class="high">排查效率提升
                    90%</span>，该方案已广泛应用于多个项目。
                </div>
                <div class="item">
                  <span class="point">4.</span>实现<span class="high">虚拟列表</span>与<span
                    class="high">缓冲区渲染优化</span>，提升长列表滚动流畅度与渲染效率，降低大数据量下的卡顿现象，该方案已在多个平台项目中复用，有效解决<span
                    class="high">高数据量场景</span>的性能问题。
                </div>
              </div>
            </div>
          </div>

          <div class="project-wrap">
            <div class="context-top-line">
              <div class="item">2024-04 ~ 2025-12</div>
              <div class="item">网易燕云官方资讯 · 小程序</div>
              <div class="item">前端开发工程师</div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目描述</div>
              <div class="sub-list">
                <div class="item">
                  该资讯小程序服务于百万级《燕云十六声》玩家，上线 3 个月日活突破 10 万，日均用户互动量超 20
                  万次，作为游戏外官方资讯核心入口，快速积累高粘性用户，有效承接游戏外公域流量。核心功能包括：账号绑定与游戏数据实时查询（时长/探索度）、万相集作品收藏同步；集成攻略资讯、福利礼包及社区活动，打造玩家一站式聚集地。
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">技术栈</div>
              <div class="sub-list">
                <div class="item">
                  微信小程序原生框架、WxParse、Pica
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目职责</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>根据产品需求文档，UI 设计图，完成每一期的开发需求。</div>
                <div class="item"><span class="point">2.</span>针对复用率高的代码，提取为公共组件，增强代码的复用性。</div>
                <div class="item"><span class="point">3.</span>开发动态海报生成功能，实现图片文字灵活排版与性能优化。</div>
                <div class="item"><span class="point">4.</span>搭建富文本展示与社交互动体系，支持内容解析、跳转及用户交互。</div>
                <div class="item"><span class="point">5.</span>构建数据埋点与通用请求层，保障数据上报与接口调用的稳定高效。</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目业绩</div>
              <div class="sub-list sub-list-point">
                <!-- <div class="item"><span class="point">1.</span>上线 3 个月<span class="high">日活突破 10
                    万</span>，日均用户互动量超过<span class="high"> 20 万次</span>，成为游戏外官方资讯核心入口，快速积累高粘性用户群体，有效承接游戏外流量。</div> -->
                <!-- <div class="item">
                  <span class="point">1.</span>上线 3 个月日活突破<span class="high"> 10 万</span>，日均用户互动量超<span class="high"> 20
                    万次</span>，作为游戏外官方资讯核心入口，快速积累高粘性用户，有效承接游戏外公域流量。
                </div> -->

                <!-- <div class="item"><span class="point">2.</span>使用WebAssembly技术实现前端图像处理，结合Web
                  Worker优化图像效率，实现图像处理速度提升<span class="high">2倍</span>，降低<span
                    class="high">50%</span>的处理延迟，日均处理用户图像超<span class="high">6000张</span>，显著提高用户体验。
                </div> -->
                <div class="item">
                  <span class="point">2.</span>基于 <span class="high">WxParse </span>二次封装，实现富文本交互增强，通过 <span
                    class="high">AST 节点遍历 + 自定义属性映射</span>注入交互协议，利用事件委托实现零埋点统一调度 <span class="high">4 类元素、6
                    种场景</span>，覆盖图片预览、视频播放、多类型链接跳转及一键复制等能力。
                </div>



                <!-- <div class="item">
                  <span class="point">3.</span>基于WxParse二次封装实现富文本交互增强，通过自定义属性映射与事件委托，统一处理<span
                    class="high">4类</span>可交互元素、<span class="high">6种</span>交互场景，实现图片预览、视频播放、多类型链接跳转及一键复制。
                </div> -->

                <!-- <div class="item">
                  <span class="point">4.</span>实现虚拟列表，通过缓冲区技术显著提升长列表的滚动流畅度和渲染性能。经过优化，渲染时间减少<span
                    class="high">90%</span>，实现了滚动无卡顿。该优化方案已成功应用到多个项目，有效解决高数据量场景下的性能瓶颈问题。
                </div> -->
                <!-- <div class="item">
                  <span class="point">3.</span><span class="high">实现虚拟列表 + 缓冲区优化</span>，显著改善长列表滚动流畅度与渲染性能。<span
                    class="high">渲染耗时大幅降低</span>，滚动体验顺滑无卡顿。该方案已在多个项目中推广，有效攻克高数据量场景的性能瓶颈。
                </div> -->
                <div class="item">
                  <span class="point">3.</span>针对小程序原生图像处理性能不足的问题，通过WebView嵌入H5，利用<span class="high"> WebAssembly
                  </span>与<span class="high"> Web Worker </span>
                  技术实现前端图像加速，处理速度<span class="high">提升约 1 倍</span>，延迟
                  <span class="high">降低 50% </span>，日均处理图像超<span class="high"> 6000 张</span>，并通过<span class="high">
                    Pica.js 做兼容降级</span>，有效解决大图卡顿与设备兼容问题。
                </div>
                <!-- <div class="item">
                  <span class="point">5.</span><span class="high">针对游戏后端存盘延迟（约1分钟）</span> 导致的状态不一致问题，设计<span
                    class="high">前端中间态缓存 +
                    轮询确认</span>机制：通过<span class="high">本地缓存代理队伍加入/取消状态，避免用户重复点击</span>；配合<span
                    class="high">指数级轮询（2秒/次，最长1分钟）</span>
                  异步确认操作结果，直至状态同步完成。从根本上解决了<span class="high">界面状态与实际状态不一致</span>及<span
                    class="high">重复请求错误</span>，保障百业活动报名功能的稳定体验。
                </div> -->
                <div class="item">
                  <span class="point">4.</span>针对游戏后端存盘延迟（约1min）导致的状态不一致问题，基于<span class="high">最终一致性思想</span>设计补偿机制，利用
                  Storage Proxy 实现 <span class="high">“读己之所写”</span>
                  ，在60s窗口期内代理队伍状态，消除用户重复点击；配合<span
                    class="high">退避递增轮询</span>（2s/次，最长60s）异步确认操作结果，直至状态同步完成。以极低成本解决了分布式状态滞后问题，保障了百业活动报名功能的稳定体验。
                </div>
                <div class="item">
                  <span class="point">5.</span>封装小程序 Canvas
                  通用海报绘制库，构建<span class="high">声明式渲染管线</span>，统一图片与文字的布局计算模型，支持几何变换（Cover/圆角/旋转/灰度）、高级排版（多行换行/字间距/对齐），内置
                  <span class="high">内存级图片缓存池</span> 与
                  <span class="high">加载异常降级策略</span>，兼容 98% 机型，大幅降低海报开发维护成本。
                </div>
              </div>
            </div>
          </div>

          <div class="project-wrap">
            <div class="context-top-line">
              <div class="item">2023-01 ~ 至今</div>
              <div class="item">网易游戏活动专题 H5</div>
              <div class="item">前端开发工程师</div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目描述</div>
              <div class="sub-list">
                <div class="item">
                  深度负责多款网易头部游戏的营销专题迭代，覆盖节日大促、版本上线、互动玩法、拉新活动等移动端 H5
                  场景，支撑高频、高并发的运营需求，保障活动快速交付与稳定运行。
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">技术栈</div>
              <div class="sub-list">
                <div class="item">Vue3、TypeScript、Pinia、Vant4、GSAP、Swiper、Html2Canvas、Less、Vite
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目职责</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>负责移动端 H5 活动页、专题页、互动页面的开发与交互实现。</div>
                <div class="item"><span class="point">2.</span>完成多设备适配、动效实现、页面还原与体验优化。</div>
                <div class="item"><span class="point">3.</span>对接后端接口，实现数据渲染、表单提交、抽奖逻辑等业务功能。</div>
                <div class="item"><span class="point">4.</span>参与需求评审、开发联调、测试验收与活动上线全流程。</div>
                <div class="item"><span class="point">5.</span>负责通用工具、组件封装及性能优化，提升迭代速度。</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目业绩</div>
              <div class="sub-list sub-list-point">
                <!-- <div class="item"><span class="point">1.</span><span class="high">3 年深耕</span>网易游戏营销领域，累计完成并上线 <span
                    class="high">200+ 个专题页开发</span>，覆盖多个网易头部游戏，支撑版本推广、节日运营等高频业务需求，并同步为部分活动开发<span
                    class="high">轻量级管理后台</span>。
                </div> -->
                <div class="item">
                  <span class="point">1.</span>3 年深耕网易游戏营销领域，基于<span class="high"> Vue + TS +
                    Less </span>技术栈，累计完成并上线<span class="high"> 200+
                  </span>专题页开发，覆盖多款头部游戏，支撑版本推广、节日运营等高频业务需求。
                </div>
                <!-- <div class="item"><span
                    class="point">2.</span>使用计时器劫持模拟，并通过线程通信，封装通用的解决浏览器页标签计时器节流问题。减少开发期间的心智负担，并收录到企业通用库，服务于公司相关业务产品。
                </div> -->

                <div class="item">
                  <span class="point">2.</span>采用 <span class="high">计时器劫持模拟</span> 及 <span class="high">线程通信</span>
                  技术，封装了一套解决浏览器标签页计时器节流问题的 <span class="high">通用模块</span>，显著减少开发过程中的心智负担。该方案已纳入企业通用库，并应用于公司多个业务产品。
                </div>
                <!-- <div class="item"><span class="point">3.</span>针对首页白屏问题，通过defer方案，配合自行研发的元素嗅探工具，完成的首屏切片化渲染。FCP提升<span
                    class="high">99%</span>，LCP提升<span class="high">95%</span>，RR提升<span class="high">12%</span>。</div> -->
                <!-- <div class="item">
                  <span class="point">4.</span>基于监控平台的数据反馈优化首页白屏问题，<span class="high">通过 defer
                    方案</span>配合<span class="high">自研的</span>组件优先级调度工具，实现<span class="high">首屏的切片化渲染。优化后 FCP 提升 99%，LCP
                    提升
                    95%，RR
                    提升 12%。</span>
                </div> -->
                <!-- <div class="item">
                  <span class="point">3.</span>针对移动端弱网环境，实现 Vue
                  打包后<span class="high"> script 脚本自动重试与阻塞式加载</span>，失败达到阈值后<span
                    class="high">展示兜底静态页面</span>，保障核心脚本加载成功后再继续解析页面，<span class="high">避免加载失败导致的白屏</span>，大幅提升活动稳定性与可用性。
                </div> -->
                <div class="item"><span class="point">4.</span>攻克复杂粘贴板技术难点，参考<span class="high">飞书</span>的技术方案，实现<span
                    class="high"> DOM 到 Clipboard 的数据链路转换</span>，并沉淀至企业通用库，服务于公司 4+ 个业务产品。
                </div>
                <div class="item">
                  <span class="point">5.</span>基于网易项目搭建 Vue 通用业务模板，通过 UA 判断与响应式适配，实现<span class="high"> PC、移动 H5
                    及游戏内嵌横屏三端代码复用</span>；核心业务逻辑统一维护，同类需求开发耗时平均节省 4-7 人时 / 次。
                </div>
                <div class="item">
                  <span class="point">6.</span>抽象封装项目通用 JS 工具库，收敛高频底层逻辑；涵盖<span class="high">端型判断</span>、<span
                    class="high">社媒授权登录</span>及<span class="high">文件上传 Token
                    加密流程</span>等模块；统一团队调用规范，累计复用<span class="high"> 20+ </span>业务场景，预计减少重复开发与调试耗时约 15 人时/月。
                </div>
              </div>
            </div>
          </div>

          <div class="project-wrap" v-if="false">
            <div class="context-top-line">
              <div class="item">2022-06 ~ 2022-12</div>
              <div class="item">江南 · 优政智控平台</div>
              <div class="item">前端开发工程师</div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目描述</div>
              <div class="sub-list">
                <div class="item">
                  随着数字化改革在基层治理中深入推进，江南镇原有办公方式面临流程分散、信息不同步、审批效率低等问题，难以满足协同需求。打造 PC
                  端统一办公入口，实现审批、值班、信访、人事等核心业务线上协同，助力基层治理数字化转型。
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">技术栈</div>
              <div class="sub-list">
                <div class="item">Vue、Vue-Router、Vuex、Axios、ElementUI、Lodash</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目职责</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>参与项目全流程开发，根据需求与UI完成各期迭代，确保功能按时交付。</div>
                <div class="item"><span class="point">2.</span>提取公共组件（表格/表单/弹窗），提升代码复用性及维护效率。</div>
                <div class="item"><span class="point">3.</span>主导审批、值班、信访、人事等核心业务模块开发，实现业务线上协同。</div>
                <div class="item"><span class="point">4.</span>配置动态路由与全局状态管理，支撑多业务模块高效协同。</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目业绩</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>实现业务流程线上化闭环，覆盖全镇 20
                  余个部门及村社，日均处理审批 100
                  余件，<span class="high">审批效率提升 40% 以上</span>，显著缩短办理周期，获用户一致好评。
                </div>
                <!-- <div class="item">
                  <span class="point">2.</span><span class="high">针对长表单场景，</span>设计并主导落地了一套<span
                    class="high">高性能数据存储与同步模块</span>。通过深度优化本地存储机制，并结合<span
                    class="high">浏览器跨标签页通信方案</span>，使表单数据存储与同步<span class="high">效率提升 90%
                  </span>，同时从根本上杜绝了数据丢失风险。该模块已广泛应用于公司其他项目。
                </div> -->
                <div class="item">
                  <span class="point">2.</span>梳理并优化多业务线数据流转逻辑，基于<span class="high"> Axios
                    实现重复请求合并与防抖</span>，有效减少冗余网络请求，提升系统整体响应效率，为基层高效办公提供稳定支撑。
                </div>
              </div>
            </div>
          </div>
          <!-- 
          <div class="project-wrap">
            <div class="context-top-line">
              <div class="item">2022-04 ~ 2022-08</div>
              <div class="item">镇污水零直排区动态监管系统</div>
              <div class="item">前端开发工程师</div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目描述</div>
              <div class="sub-list">
                <div class="item">
                  为某镇建设污水零直排动态监管系统，<span class="high">对标工业 MES
                    数据可视化标准</span>，实现全镇排水管网及监测点位的<span
                    class="high">实时数据采集与看板展示</span>。系统通过大屏可视化方式，实时呈现污水排放指标、设备状态及空间分布，助力镇级管理部门快速响应异常，提升区域环境监控的数字化水平。
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">技术栈</div>
              <div class="sub-list">
                <div class="item">Vue、ECharts、WebSocket、天地图API、Axios、ElementUI</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目职责</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>负责数据可视化模块设计与实现，基于<span class="high"> ECharts 和 WebSocket
                  </span>构建实时动态图表（如流量趋势、水质指标），数据更新延迟控制在秒级，满足高实时性监控要求。</div>
                <div class="item"><span class="point">2.</span>集成<span class="high">天地图
                    API</span>，在大屏核心区域动态展示雨水井、污水井等点位空间分布，结合后端经纬度数据实现监测点状态标注与交互，辅助快速定位异常区域。</div>
                <div class="item"><span class="point">3.</span>完成与后端数据接口对接，<span
                    class="high">优化数据加载逻辑</span>（批量请求、增量更新），减少大屏交互延迟，提升终端用户体验。</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目业绩</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>天地图点位模块成功辅助用户快速定位问题井位，<span class="high">平均定位时间减少
                    50%</span>，有效支撑了镇级环保巡检工作。</div>
                <div class="item">
                  <span class="point">2.</span>通过接口与渲染优化，终端<span class="high">首屏加载时间降低 30%</span>，大屏在连续运行测试中保持流畅。
                </div>
                <div class="item">
                  <span class="point">3.</span>项目虽因客户需求调整暂缓上线，但积累了类 MES 级数据可视化与地图集成的实践经验，相关技术方案已沉淀并计划复用至其他智慧城镇项目。
                </div>
              </div>
            </div>
          </div> -->

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