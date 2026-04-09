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
              <span class="label">框架方面：</span>精通 Vue2/3 等现代前端框架，理解其核心原理以及差异，拥有 Vue
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
            <!-- <div class="item">
              <span class="label">后端能力：</span>熟悉 PHP/ThinkPHP 框架及 MySQL 数据库，能够进行简单的数据库建模与 CRUD操作，并设计实现
              Restful风格的API，做到前后端分离。
            </div> -->
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
            <div class="item">温州理工学院</div>
            <div class="item">软件工程 (本科)</div>
          </div>
          <!-- <div class="context-type type-list">
            <div class="item">主修课程包括：前端框架应用开发、Web应用开发、数据库应用技术、Node.js应用开发、PHP应用开发、计算机数学。</div>
          </div> -->
        </div>
        <div class="context-item icon-work">
          <div class="name">工作经验</div>
          <div class="context-top-line">
            <div class="item">2022-04 ~ 至今</div>
            <div class="item">杭州鑫烨科技有限公司 · 网易互娱项目组</div>
            <div class="item">前端开发工程师</div>
          </div>
          <div class="sub-context">
            <div class="sub-label">工作职责</div>
            <div class="sub-list sub-list-point">
              <div class="item">
                <span class="point">1.</span>负责前端项目各业务模块的开发。
              </div>
              <div class="item">
                <span class="point">2.</span>配合后端人员进行接口联调，保障跨团队协作效率。
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
                <span class="point">1.</span>基于网易项目搭建 Vue 通用业务模板，通过 UA 判断与响应式适配，实现<span class="high"> PC、移动 H5
                  及游戏内嵌横屏三端代码复用；</span>核心业务逻辑统一维护，同类需求开发耗时平均节省<span class="high"> 4-7 人时/次。</span>
              </div>
              <div class="item">
                <span class="point">2.</span>独立封装微信小程序 Canvas 通用海报绘制库，统一抽象图片与文字渲染逻辑；支持 <span class="high">Cover
                  裁剪、圆角、旋转、灰度滤镜 </span>及
                <span class="high">文字多行换行、字间距、对齐方式</span>等复杂样式配置；内置<span class="high">基于内存的图片缓存与加载容错机制</span>，兼容性覆盖 98%
                机型；已稳定落地<span class="high"> 5 款</span>网易游戏小程序，显著降低运营活动海报开发成本。
              </div>
              <div class="item">
                <span class="point">3.</span>抽象封装项目通用 JS 工具库，收敛高频底层逻辑；涵盖<span class="high">端型判断</span>、<span
                  class="high">社媒授权登录</span>及<span class="high">文件上传 Token
                  加密流程</span>等模块；统一团队调用规范，累计复用<span class="high"> 20+ </span>业务场景，预计减少重复开发与调试耗时约<span class="high"> 15
                  人时/月</span>。
              </div>
              <!-- <div class="item">
                <span class="point">4.</span>项目交付效率与质量获甲方客户高度认可，多次获得口头表扬，全年保持<span class="high"> 0 客诉</span>。
              </div> -->
            </div>
          </div>
        </div>

        <div class="context-item icon-project">
          <div class="name">项目经验</div>

          <div class="project-wrap">
            <div class="context-top-line">
              <div class="item">2024-04 ~ 至今</div>
              <div class="item">网易燕云官方资讯 · 微信小程序</div>
              <div class="item">前端开发工程师</div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目描述</div>
              <div class="sub-list">
                <div class="item">
                  该资讯小程序服务于<span
                    class="high">百万级《燕云十六声》玩家</span>。核心功能包括：账号绑定与游戏数据实时查询（时长/探索度）、万相集作品收藏同步；集成攻略资讯、福利礼包及社区活动，有效承接游戏外流量，打造玩家<span
                    class="high">一站式聚集地</span>。
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">技术栈</div>
              <div class="sub-list">
                <div class="item">
                  微信小程序原生框架、WxParse 富文本解析、Lodash
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目职责</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>根据产品需求文档，UI 设计图，完成每一期的开发需求</div>
                <div class="item"><span class="point">2.</span>针对复用率高的代码，提取为公共组件，增强代码的复用性</div>
                <div class="item"><span class="point">3.</span>开发动态海报生成功能，实现图片文字灵活排版与性能优化</div>
                <div class="item"><span class="point">4.</span>搭建富文本展示与社交互动体系，支持内容解析、跳转及用户交互</div>
                <div class="item"><span class="point">5.</span>构建数据埋点与通用请求层，保障数据上报与接口调用的稳定高效</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目业绩</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>上线 3 个月<span class="high">日活突破 10
                    万</span>，日均用户互动量超过<span class="high"> 20 万次</span>，成为游戏外官方资讯核心入口，快速积累高粘性用户群体，有效承接游戏外流量。</div>

                <!-- <div class="item"><span class="point">2.</span>使用WebAssembly技术实现前端图像处理，结合Web
                  Worker优化图像效率，实现图像处理速度提升<span class="high">2倍</span>，降低<span
                    class="high">50%</span>的处理延迟，日均处理用户图像超<span class="high">6000张</span>，显著提高用户体验。
                </div> -->
                <div class="item">
                  <span class="point">2.</span>基于 <span class="high">WxParse 二次封装</span> 实现富文本交互增强，通过 <span
                    class="high">自定义属性映射 + 事件委托，零埋点</span>
                  统一处理 <span class="high">4 类元素、6
                    种场景</span>，实现图片预览、视频播放、多类型链接跳转及一键复制。
                </div>



                <!-- <div class="item">
                  <span class="point">3.</span>基于WxParse二次封装实现富文本交互增强，通过自定义属性映射与事件委托，统一处理<span
                    class="high">4类</span>可交互元素、<span class="high">6种</span>交互场景，实现图片预览、视频播放、多类型链接跳转及一键复制。
                </div> -->

                <!-- <div class="item">
                  <span class="point">4.</span>实现虚拟列表，通过缓冲区技术显著提升长列表的滚动流畅度和渲染性能。经过优化，渲染时间减少<span
                    class="high">90%</span>，实现了滚动无卡顿。该优化方案已成功应用到多个项目，有效解决高数据量场景下的性能瓶颈问题。
                </div> -->
                <div class="item">
                  <span class="point">3.</span><span class="high">实现虚拟列表 + 缓冲区优化</span>，显著改善长列表滚动流畅度与渲染性能。<span
                    class="high">渲染时间降低 90% </span>，滚动体验顺滑无卡顿。该方案已在<span class="high">多个项目中推广</span>，有效攻克高数据量场景的性能瓶颈。
                </div>
                <div class="item">
                  <span class="point">4.</span>小程序原生能力无法满足高性能图像处理场景，通过WebView嵌入H5，利用 <span class="high">WebAssembly +
                    Web Worker</span>
                  技术实现前端图像加速，使处理速度<span class="high">提升 2 倍</span>，延迟
                  <span class="high">降低 50% </span>，<span class="high">日均处理超 6000 张</span>图像，有效突破小程序性能边界。
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
                  <span class="point">5.</span>针对游戏后端存盘延迟（约1分钟）导致的<span class="high">状态最终不一致</span>问题，基于<span
                    class="high">最终一致性</span>思想设计前端补偿机制：通过本地缓存实现 <span class="high">“读己之所写”</span>
                  ，在1分钟窗口期内代理队伍状态，消除用户重复点击；配合<span
                    class="high">递增间隔轮询</span>（2秒/次，最长1分钟）异步确认操作结果，直至状态同步完成。该方案以极低成本解决了分布式场景下的状态滞后问题，保障了百业活动报名功能的稳定体验。
                </div>
              </div>
            </div>
          </div>

          <div class="project-wrap">
            <div class="context-top-line">
              <div class="item">2022-10 ~ 至今</div>
              <div class="item">网易游戏专题跨端开发</div>
              <div class="item">前端开发工程师</div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目描述</div>
              <div class="sub-list">
                <div class="item">
                  因网易游戏运营活动具有高频、多样化的特点，<span
                    class="high">深度参与营销专题的快速迭代开发</span>，覆盖PC端官网活动、移动端H5页面及小游戏互动页，服务于《蛋仔派对》《第五人格》《梦幻西游》等多款头部游戏的版本推广、节日运营及品牌宣发。
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">技术栈</div>
              <div class="sub-list">
                <div class="item">Vue3、Pinia、JQuery、Element Plus、Vant4、Html2Canvas、JSPDF、GSAP、Swiper
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
                <div class="item"><span class="point">1.</span><span class="high">3 年深耕</span>网易游戏营销领域，累计完成并上线 <span
                    class="high">200+ 个专题页开发</span>，覆盖多个网易头部游戏，支撑版本推广、节日运营等高频业务需求，并同步为部分活动开发<span
                    class="high">轻量级管理后台</span>。</div>
                <!-- <div class="item"><span
                    class="point">2.</span>使用计时器劫持模拟，并通过线程通信，封装通用的解决浏览器页标签计时器节流问题。减少开发期间的心智负担，并收录到企业通用库，服务于公司相关业务产品。
                </div> -->
                <div class="item">
                  <span class="point">2.</span>采用 <span class="high">计时器劫持模拟</span> 及 <span class="high">线程通信</span>
                  技术，封装了一套解决浏览器标签页计时器节流问题的 <span class="high">通用模块</span>，显著减少开发过程中的心智负担。该方案已纳入企业通用库，并应用于公司多个业务产品。
                </div>
                <!-- <div class="item"><span class="point">3.</span>针对首页白屏问题，通过defer方案，配合自行研发的元素嗅探工具，完成的首屏切片化渲染。FCP提升<span
                    class="high">99%</span>，LCP提升<span class="high">95%</span>，RR提升<span class="high">12%</span>。</div> -->
                <div class="item">
                  <span class="point">3.</span>基于监控平台的数据反馈优化首页白屏问题，<span class="high">通过 defer
                    方案</span>配合<span class="high">自研的</span>组件优先级调度工具，实现<span class="high">首屏的切片化渲染。优化后 FCP 提升 99%，LCP
                    提升
                    95%，RR
                    提升 12%。</span>
                </div>

                <div class="item"><span class="point">4.</span>攻克技术难点，参考<span class="high">飞书的技术方案</span>，实现<span
                    class="high"> DOM 到 Clipboard 的数据链路转换</span>，并沉淀至企业通用库，服务于公司<span class="high"> 4+ 个业务产品</span>。
                </div>
              </div>
            </div>
          </div>

          <div class="project-wrap">
            <div class="context-top-line">
              <div class="item">2022-04 ~ 2022-10</div>
              <div class="item">江南 · 优政智控平台</div>
              <div class="item">前端开发工程师</div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目描述</div>
              <div class="sub-list">
                <div class="item">
                  随着数字化改革在基层治理中深入推进，江南镇原有办公方式面临<span class="high">流程分散、信息不同步、审批效率低</span>等问题，难以满足协同需求。打造<span
                    class="high">PC端统一办公入口</span>，实现审批、值班、信访、人事等核心业务线上协同，助力<span class="high">基层治理数字化转型</span>。
                </div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">技术栈</div>
              <div class="sub-list">
                <div class="item">Vue2、Vue-Router、Vuex、Axios、ElementUI</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目职责</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>参与项目全流程开发，根据需求与UI完成各期迭代，确保功能按时交付。</div>
                <div class="item"><span class="point">2.</span>提取公共组件（表格/表单/弹窗），提升代码复用性及维护效率。</div>
                <div class="item"><span class="point">3.</span>主导审批、值班、信访、人事等核心业务模块开发，实现业务线上协同。</div>
                <div class="item"><span class="point">4.</span>封装 Axios 请求层，配置动态路由与状态管理，保障系统流畅运行。</div>
              </div>
            </div>
            <div class="sub-context">
              <div class="sub-label">项目业绩</div>
              <div class="sub-list sub-list-point">
                <div class="item"><span class="point">1.</span>实现<span class="high">业务流程线上化闭环</span>，覆盖全镇 20
                  余个部门及村社，<span class="high">日均处理审批 100
                    余件，审批效率提升 40% 以上</span>，显著缩短办理周期，获用户一致好评。
                </div>
                <div class="item">
                  <span class="point">2.</span><span class="high">针对长表单场景，</span>设计并主导落地了一套<span
                    class="high">高性能数据存储与同步模块</span>。通过深度优化本地存储机制，并结合<span
                    class="high">浏览器跨标签页通信方案</span>，使表单数据存储与同步<span class="high">效率提升 90%
                  </span>，同时从根本上杜绝了数据丢失风险。该模块已广泛应用于公司其他项目。
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



        <div class="context-item icon-evaluate">
          <div class="name">个人评价</div>
          <div class="context-type type-list">
            <div class="item">
              对前端开发保持持续热情，主动拓展技术边界，系统研读过《Vue.js设计与实现》《前端架构设计》《前端工程化》等专业书籍。具备快速学习能力，面对新技术能在一周内完成从理解到应用落地，始终保持积极的技术探索态度。
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
    scale: 4.5 || getScale(),
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