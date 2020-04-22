<template>
  <div class="block">
    <template v-if="editor && !loading">
      <div class="data">
        <div class="count">{{ count }} {{ count === 1 ? 'user' : 'users' }} connected</div>
        <div class="label">Slug: {{slug}}</div>
        <div class="label">Version: {{version}}</div>
      </div>
      <editor-content class="editor" :editor="editor" />
    </template>
    <em v-else>Connecting to socket server …</em>
  </div>
</template>

<script>
// https://glitch.com/edit/#!/tiptap-sockets?path=server.js:1:0
import io from 'socket.io-client'
import { Editor, EditorContent } from 'tiptap'
import {
  HardBreak,
  Heading,
  Bold,
  Code,
  Italic,
  History,
  Collaboration,
} from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      loading: true,
      editor: null,
      socket: null,
      count: 0,
      version: 0,
      slug: 'default slug'
    }
  },
  methods: {
    onInit({ doc, version }) {
      this.loading = false
      if (this.editor) {
        this.editor.destroy()
      }
      console.log('init!', doc);

      this.version = version
      
      this.editor = new Editor({
        content: doc,
        extensions: [
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new Bold(),
          new Code(),
          new Italic(),
          new History(),
          new Collaboration({
            // the initial version we start with
            // version is an integer which is incremented with every change
            version,
            // debounce changes so we can save some requests
            debounce: 250,
            // onSendable is called whenever there are changed we have to send to our server
            onSendable: ({ sendable }) => {
              sendable.slug = this.slug
              this.socket.emit('update', sendable)
            },
          }),
        ],
      })
    },
    setCount(count) {
      this.count = count
    },
  },
  mounted() {
    // server implementation: https://glitch.com/edit/#!/tiptap-sockets
    const url = 'wss://a984747989c98d65107d889cad5766af.balena-devices.com'
    // const url = 'http://localhost:5000'
    // const url = 'wss://tiptap-sockets.glitch.me'
    
    this.slug = this.$route.params.index;

    this.socket = io(url)
      // get the current document and its version
      .emit('init', this.slug)
      .on('init', (data) => {
        this.onInit(data)
      })
      // send all updates to the collaboration extension
      .on('update', (data) => {
        // console.log('on update trigger--- get new data', data)
        this.version = data.version
        return this.editor.extensions.options.collaboration.update(data)
      })
      // get count of connected users
      .on('getCount', (count) => this.setCount(count))
  },
  beforeDestroy() {
    this.editor.destroy()
    this.socket.destroy()
  },
}
</script>
<style lang="scss">
// @import '~variables';
.data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.count {
  display: flex;
  align-items: center;
  font-weight: bold;
  color: rgba(#e3e3e3, 0.5);
  color: #27b127;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.7rem;
  line-height: 1;
  &:before {
    content: '';
    display: inline-flex;
    background-color: #27b127;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    margin-right: 0.3rem;
  }
}

.label {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.7rem;
  line-height: 1;
}

.block {
  padding: 2ch 2ch;
  margin: 5ch;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

  .ProseMirror {
    border: 1px solid #bfbfbf;
    border-radius: 5px;
    padding: 1ch;
    min-height: 20ch;

    &:focus {
      border: 1px solid #27b127;
    }

    &[contenteditable] {
      outline: 0;
    }
  }
}
</style>
