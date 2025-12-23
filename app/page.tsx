'use client';

import "@excalidraw/excalidraw/index.css";
import Image from "next/image";
import { Excalidraw } from "@excalidraw/excalidraw";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0b0f14]">
    <Excalidraw theme="dark" />
  </div>
  
  );
}
