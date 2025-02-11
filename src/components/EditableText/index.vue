<template>
  <div class="editableText-container">
    <div v-show="isShowInput" class="input-area" :style="`width:${textWidth + 0.5}px;height:${textHeight}px;`">
      <textarea :style="textStyleString" ref="textarea" :value="text" :placeholder="value"
        @blur="handleBlur"></textarea>
    </div>
    <div v-show="!isShowInput" ref="displayArea" v-dblclick="handleDblclick" class="display-area">
      <p :style="textStyleString" title="双击可编辑">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditableText',
  props: {
    value: {
      type: String,
      default: ''
    },
    textStyle: {
      type: Object,
      default: () => { }
    }
  },
  emits: ['blur'],
  data() {
    return {
      isShowInput: false,
      textWidth: 0,
      textHeight: 0,
      text: this.value
    }
  },
  mounted() {
    this.textWidth = this.$refs.displayArea.offsetWidth;
    this.textHeight = this.$refs.displayArea.offsetHeight;
  },
  computed: {
    textStyleString() {
      if (!this.textStyle || JSON.stringify(this.textStyle) === '{}') {
        return '';
      }
      return Object.keys(this.textStyle).map(key => `${key}:${this.textStyle[key]}`).join(';');
    }
  },
  methods: {
    handleBlur(e) {
      const text = String.prototype.trim.call(e.target.value);
      this.isShowInput = false;

      if (text !== this.text) {
        if (text) {
          this.text = text;
          this.$emit('blur', text);
        }
        this.$nextTick(() => {
          this.textWidth = this.$refs.displayArea.offsetWidth;
          this.textHeight = this.$refs.displayArea.offsetHeight;
        })
      }
    },
    handleDblclick() {
      this.isShowInput = true;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.editableText-container {
  position: relative;
  width: 100%;
  height: 100%;

  .input-area,
  .display-area {
    position: relative;
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .input-area {
    // background-color: #fff;
    // box-shadow: 0 0 .35rem #fff;
    // border-radius: .07rem;

    textarea {
      display: block;
      outline: none;
      border: none;
      background-color: transparent;
      width: 100% !important;
      height: 100% !important;
      padding: 0 !important;
      box-sizing: border-box;
      font-size: .3rem;
      font-family: initial;
      resize: none;
      color: #000;
      overflow: hidden;
    }
  }

  .display-area {
    cursor: default;

    p {
      margin: 0;
      padding: 0;
      color: #000;
      width: 100%;
      height: auto;
      word-break: break-all;
    }
  }
}
</style>