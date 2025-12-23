"use client";

import dynamic from "next/dynamic";

const Whiteboard = dynamic(
  () => import("./Whiteboard.client"),
  { ssr: false }
);

export default function WhiteboardShell() {
  return <Whiteboard />;
}
