import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  Code,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  Alignment,
  Heading,
  CodeBlock,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

function Editor({ value, setValue }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            "underline",
            "strikethrough",
            "code",
            "subscript",
            "superscript",
            "undo",
            "redo",
            "heading",
            "codeBlock",
            "|",
            "italic",
            "bold",
            "alignment",
          ],
        },
        plugins: [
          Bold,
          Essentials,
          Italic,
          Mention,
          Paragraph,
          Undo,
          Bold,
          Code,
          CodeBlock,
          Italic,
          Strikethrough,
          Subscript,
          Superscript,
          Underline,
          Alignment,
          Heading,
        ],

        language: "fa",
        placeholder: "لطفا متن خود را وارد کنید...",
      }}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        setValue(data);
      }}
    />
  );
}

export default Editor;
