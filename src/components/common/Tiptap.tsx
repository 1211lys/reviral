"use client";

import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";
import { Editor } from "@tiptap/core"; // Import Editor type

// MenuBar component for text formatting controls
const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-2 mb-4">
      {/* Text formatting buttons */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive("heading", { level: 1 })
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive("heading", { level: 2 })
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive("heading", { level: 3 })
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive("paragraph")
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive("strike") ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive("highlight")
            ? "bg-yellow-500 text-black"
            : "bg-gray-200"
        }`}
      >
        Highlight
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive({ textAlign: "left" })
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive({ textAlign: "center" })
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive({ textAlign: "right" })
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`px-4 py-2 rounded-lg ${
          editor.isActive({ textAlign: "justify" })
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Justify
      </button>
    </div>
  );
};

// Named component for better debugging and to fix export warning
const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: `
      <h3 style="text-align:center">
        Devs Just Want to Have Fun by Cyndi Lauper
      </h3>
      <p style="text-align:center">
        I come home in the morning light<br>
        My mother says, <mark>“When you gonna live your life right?”</mark><br>
        Oh mother dear we’re not the fortunate ones<br>
        And devs, they wanna have fun<br>
        Oh devs just want to have fun</p>
      <!-- more content -->
    `,
  });

  useEffect(() => {
    if (!editor) return;

    const handleUpdate = () => {
      console.log("Current content:", editor.getHTML());
      console.log(editor);
    };

    editor.on("update", handleUpdate);

    return () => {
      editor.off("update", handleUpdate);
    };
  }, [editor]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Menu Bar */}
      <MenuBar editor={editor} />

      {/* Editor Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <EditorContent editor={editor} className="tiptap text-base leading-7" />
      </div>
    </div>
  );
};

export default TiptapEditor; // Export named function
