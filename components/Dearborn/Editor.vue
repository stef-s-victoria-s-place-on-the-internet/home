<template>
  <div class="editor">
    <EditorMenuBar :editor="editor" v-slot="{ commands, isActive, focused }">
      <div class="menubar is-hidden" :class="{ 'is-focused': focused }">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          ul
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          ol
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          quote
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          code
        </button>
      </div>
    </EditorMenuBar>

    <EditorContent class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  BulletList,
  CodeBlock,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  History,
  Focus,
} from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorMenuBar,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new History(),
          new Focus({
            className: 'has-focus',
            nested: false,
          }),
        ],
        autoFocus: true,
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
.menubar {
  transition: opacity 0.2s, visibility 0.2s;
  /* border-bottom: 1px solid $grey; */
  padding: 1rem;

  &.is-hidden {
    opacity: 0;
    visibility: hidden;
  }

  &.is-focused {
    opacity: 1;
    visibility: visible;
  }

  button {
    @include subheader;
    padding: 0.75rem 1rem;
    background: $black;
    color: $white;
    justify-self: flex-end;
    appearance: none;
    border: none;
    border-radius: 0.375rem;
    opacity: 0.2;
    transition: opacity 0.15s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }

    &.is-active {
      opacity: 1;
    }
  }
}

.editor {
  position: relative;
  margin: 0 auto;
  padding: 1rem;
  font-family: $font-noto;

  &__content {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;

    .ProseMirror {
      max-width: 120ch;
      min-height: 80vh;
      padding: 1rem;
      position: relative;

      &[contenteditable='false'] {
        white-space: normal;
      }
      &[contenteditable='true'] {
        white-space: pre-wrap;
      }

      &[contenteditable]:focus {
        outline: 0px solid transparent;
      }

      > * {
        border-left: 1px solid transparent;
        padding-left: 1rem;

        &.has-focus {
          border-color: $grey;
        }
      }
    }

    * {
      caret-color: currentColor;
    }

    pre {
      padding: 0.7rem 1rem;
      border-radius: 5px;
      background: $black;
      color: $white;
      font-size: 0.8rem;
      overflow-x: auto;

      code {
        display: block;
      }
    }

    p code {
      padding: 0.2rem 0.4rem;
      border-radius: 5px;
      font-size: 0.8rem;
      font-weight: bold;
      background: rgba($black, 0.1);
      color: rgba($black, 0.8);
    }

    ul,
    ol {
      padding-left: 1rem;
    }

    li > p,
    li > ol,
    li > ul {
      margin: 0;
    }

    a {
      color: inherit;
    }

    blockquote {
      border-left: 3px solid rgba($black, 0.1);
      color: rgba($black, 0.8);
      padding-left: 0.8rem;
      font-style: italic;

      p {
        margin: 0;
      }
    }

    img {
      max-width: 100%;
      border-radius: 3px;
    }

    table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;
      margin: 0;
      overflow: hidden;

      td,
      th {
        min-width: 1em;
        border: 2px solid $grey;
        padding: 3px 5px;
        vertical-align: top;
        box-sizing: border-box;
        position: relative;
        > * {
          margin-bottom: 0;
        }
      }

      th {
        font-weight: bold;
        text-align: left;
      }

      .selectedCell:after {
        z-index: 2;
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(200, 200, 255, 0.4);
        pointer-events: none;
      }

      .column-resize-handle {
        position: absolute;
        right: -2px;
        top: 0;
        bottom: 0;
        width: 4px;
        z-index: 20;
        background-color: #adf;
        pointer-events: none;
      }
    }

    .tableWrapper {
      margin: 1em 0;
      overflow-x: auto;
    }

    .resize-cursor {
      cursor: ew-resize;
      cursor: col-resize;
    }
  }
}
</style>
