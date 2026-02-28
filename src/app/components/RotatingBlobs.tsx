"use client";

import { useEffect, useRef } from "react";

export default function RotatingBlobs() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Dynamic Animated Blobs Background */}
            <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-600/10 blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
            <div className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-indigo-600/10 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full bg-violet-600/10 blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
        </div>
    );
}
