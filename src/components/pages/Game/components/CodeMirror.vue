<template>
  <div class="container">
    <h1>CodeMirror Editor</h1>
    <main
      v-cloak
      id="edit">
      <div class="cm-container">
        <codemirror
          :value="code"
          :options="options"/>
      </div>
      <select
        v-model="mode"
        name="mode">
        <option value="javascript">javascript</option>
        <option value="vue">vue</option>
        <option value="python">python</option>
      </select>
    </main>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror-lite'
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/vue/vue')
require('codemirror/mode/python/python')
require('codemirror/addon/hint/show-hint.js')
require('codemirror/addon/hint/show-hint.css')
require('codemirror/addon/hint/javascript-hint.js')

export default {
  codemirror,
  data () {
    return {
      codes: {
        'javascript': 'const str = "javascript"',
        'vue': '<template>\n\t<codemirror :value="code">\n\t</codemirror>\n</template>',
        'python': 'import numpy as np\nprint("Hello World")'
      },
      mode: 'vue'
    }
  },
  computed: {
    code () {
      return this.codes[this.mode]
    },
    options () {
      return {
        mode: this.mode,
        tabSize: 2,
        lineNumbers: true,
        lineWrapping: false,
        viewportMargin: Infinity,
        extraKeys: { 'Ctrl-Space': 'autocomplete' } }
    }
  },
  mounted () {
    // use editor object...
    // eslint-disable-next-line no-console
    console.log('this is current editor object', this.editor)
  }
}
</script>

<style>
[v-cloak] {
display: none;
}

body {
font-family: Helvetica, Arial, sans-serif;
}

h1, h2 {
font-weight: 300;
}

.container {
margin: 0 auto;
max-width: 720px;
}

.cm-container {
border: #ddd solid 1px;
margin-bottom: 10px
}

footer {
margin-top: 20px;
padding-top: 10px;
border-top: #dedede solid 1px;
}

.cm-container .CodeMirror {
min-height: 500px;
}

.v-select{
  min-width: 500px;
}
</style>
