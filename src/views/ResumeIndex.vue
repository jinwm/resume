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

        <hr>

        <div class="content content-xmjl">
          <!-- 项目1：燕云小程序 -->
          <div class="line-box">
            <div class="top-info">
              <p class="name" style="margin-left: -0.1rem;">《燕云十六声》官方小程序</p>
              <p class="date">2024年4月 - 至今</p>
            </div>
            <div class="detail-info">
              <div class="item">
                <p class="label">技术栈：</p>
                <div class="list">
                  <p class="value"><span class="high">微信小程序原生框架</span>、<span class="high">Canvas</span>、<span
                      class="high">wxParse富文本解析</span></p>
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
                    <p class="value">基于<span class="high">wxParse</span>实现富文本解析，支持图片预览、超链接智能跳转（H5/小程序页面/外部小程序）。</p>
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
          <hr>
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
                  <p class="value"><span class="high">Vue3</span>、<span class="high">TypeScript</span>、<span
                      class="high">jQuery</span>、<span class="high">Swiper</span>、<span
                      class="high">HTML2Canvas</span>、<span class="high">QRCode</span>、<span class="high">Echarts</span>
                  </p>
                </div>
              </div>
              <div class="item">
                <p class="label">项目描述：</p>
                <div class="list">
                  <p class="value not-point">
                    主导开发《蛋仔派对》《第五人格》等游戏的活动页（PC端/移动端H5），单日峰值UV超50万，平均交付周期6天。
                  </p>
                </div>
              </div>
              <div class="item">
                <p class="label">核心贡献：</p>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">功能开发</span></p>
                  <div class="list">
                    <p class="value">实现用户授权登录（微信、QQ等平台）、抽奖、助力领奖等互动功能，记录用户行为数据以支持运营优化。</p>
                    <p class="value">开发动态海报生成功能，基于<span class="high">HTML2Canvas</span>+<span
                        class="high">QRCode</span>实现用户专属二维码嵌入与实时渲染，提升分享转化率。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">性能优化</span></p>
                  <div class="list">
                    <p class="value">通过<span class="high">静态资源优化（资源压缩、合并与缓存）</span>，使首屏加载时间从3.5s降至1.5s，有效降低用户的跳出率。</p>
                    <p class="value">设计用户行为数据缓存方案，减少服务器接口调用频率，并发场景下响应速度得到一定提升。</p>
                  </div>
                </div>

                <div class="sub-box">
                  <p class="sub-label"><span class="high">工程化提效</span></p>
                  <div class="list">
                    <p class="value">沉淀<span class="high">Swiper</span>单屏模板、Screen适配、移动端旋转提示、Loading蒙层等工具链，减少重复开发工作量。
                    </p>
                    <p class="value">推动团队代码复用规范，提升多人协作效率。</p>
                  </div>
                </div>

              </div>
              <div class="item">
                <p class="label">项目成果：</p>
                <div class="list">
                  <p class="value">项目代码质量高，bug率低于团队平均水平，多个活动页稳定支持峰值UV 50万+，用户体验反馈优秀。</p>
                  <p class="value">通过工具链沉淀与代码复用规范，团队开发效率有效提升，相似需求开发时间明显缩短。</p>
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
                <p class="label">熟练：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value">
                      <span class="high">Vue2/3工程化开发</span>：掌握<span class="high">组件化开发</span>与Vue3特新 <span
                        class="high">Composition API</span>，熟悉状态管理（<span class="high">Vuex</span>）与路由管理（<span
                        class="high">Vue Router</span>）。基于<span class="high">Vue CLI</span>搭建标准化项目，推动团队工程化流程。
                    </p>
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
              </div>

              <div class="item">
                <p class="label">了解：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value"><span class="high">React</span>（<span class="high">组件化开发</span>、<span
                        class="high">JSX</span>、<span class="high">Hooks基础</span>）、<span
                        class="high">TypeScript</span>、<span class="high">Echarts</span>（数据可视化）。</p>
                  </div>
                </div>
              </div>

              <div class="item">
                <p class="label">工具：</p>
                <div class="sub-box">
                  <div class="list">
                    <p class="value"><span class="high">Swiper</span>（轮播组件开发）、<span
                        class="high">HTML2Canvas</span>（动态海报生成）、<span class="high">jQuery</span>（开发效率）、<span
                        class="high">QRCode</span>（二维码生成）、<span class="high">Git</span>（版本控制）、<span class="high">Beyond
                        Compare</span>（代码差异化对比）。</p>
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