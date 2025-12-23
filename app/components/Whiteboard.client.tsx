"use client";

import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

export default function WhiteboardClient() {
  return (
    <Excalidraw
      theme="dark"
      isCollaborating={true}
      
    />
  );
}
