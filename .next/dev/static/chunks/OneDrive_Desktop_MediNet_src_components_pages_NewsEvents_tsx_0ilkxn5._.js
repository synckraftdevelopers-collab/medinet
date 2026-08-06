(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediNet/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$src$2f$components$2f$PremiumFeatureIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediNet/src/components/PremiumFeatureIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediNet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediNet/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediNet/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediNet/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$presentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Presentation$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediNet/node_modules/lucide-react/dist/esm/icons/presentation.js [app-client] (ecmascript) <export default as Presentation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediNet/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediNet/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediNet/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
;
;
;
;
;
;
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};
const staggerContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};
function NewsEvents({ params }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: "hidden",
        animate: "visible",
        variants: staggerContainer,
        className: "pt-20 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-b border-border py-20 lg:py-28 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop",
                            alt: "Press Release",
                            fill: true,
                            className: "object-cover opacity-5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none overflow-hidden z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#2563EB] opacity-10"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-secondary opacity-10"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: fadeUp,
                            className: "max-w-4xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "utility-badge-blue mb-5 relative z-10 mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "utility-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        "News & Events"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.15] relative z-10 inline-block mb-6",
                                    children: [
                                        "Stay Updated with",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                backgroundPosition: [
                                                    "0% 50%",
                                                    "100% 50%",
                                                    "0% 50%"
                                                ]
                                            },
                                            transition: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            className: "bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm",
                                            children: "Medinet"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-base sm:text-lg text-[#334155] leading-relaxed relative z-10",
                                    children: [
                                        "Keep up with the",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                backgroundPosition: [
                                                    "0% 50%",
                                                    "100% 50%",
                                                    "0% 50%"
                                                ]
                                            },
                                            transition: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            className: "bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                            children: "latest news"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        ",",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                backgroundPosition: [
                                                    "0% 50%",
                                                    "100% 50%",
                                                    "0% 50%"
                                                ]
                                            },
                                            transition: {
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            className: "bg-[linear-gradient(to_right,#2563EB,#BE185D,#2563EB)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                            children: "important announcements"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        ",",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                backgroundPosition: [
                                                    "0% 50%",
                                                    "100% 50%",
                                                    "0% 50%"
                                                ]
                                            },
                                            transition: {
                                                duration: 5.5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            className: "bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                            children: "product launches"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        ", and",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                backgroundPosition: [
                                                    "0% 50%",
                                                    "100% 50%",
                                                    "0% 50%"
                                                ]
                                            },
                                            transition: {
                                                duration: 4.5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            className: "bg-[linear-gradient(to_right,#2563EB,#BE185D,#2563EB)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                            children: "community initiatives"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        "from Medinet Pharmaceutical Marketing Company. We are committed to keeping our customers, partners, and stakeholders informed about our",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                backgroundPosition: [
                                                    "0% 50%",
                                                    "100% 50%",
                                                    "0% 50%"
                                                ]
                                            },
                                            transition: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            className: "bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                            children: "growth and achievements"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 bg-white border-b border-border relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 w-[50%] h-[25%] z-0 opacity-[0.03] pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop",
                            alt: "Product Launch",
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-[33%] w-[50%] h-[25%] z-0 opacity-[0.03] pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop",
                            alt: "Medical Conference",
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 bottom-0 w-[50%] h-[25%] z-0 opacity-[0.03] pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1600&auto=format&fit=crop",
                            alt: "CSR Initiatives",
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row gap-12 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:w-1/3 lg:sticky lg:top-32",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shrink-0 shadow-lg mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                    className: "w-6 h-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-display font-bold text-primary mb-4",
                                                children: [
                                                    "Product",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm",
                                                        children: "Launches"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[#2563EB] font-medium tracking-wide text-lg mb-4",
                                                children: "Introducing Innovative Healthcare Solutions"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] mb-6"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#475569] leading-relaxed",
                                                children: "At Medinet Pharmaceutical Marketing Company, we are committed to expanding our product portfolio with innovative, high-quality pharmaceutical formulations that address the evolving needs of healthcare professionals and patients."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:w-2/3 bg-alt-bg rounded-3xl p-8 md:p-10 border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-primary font-semibold mb-6 text-lg",
                                                children: "Highlights:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                                children: [
                                                    "New Product Releases",
                                                    "Product Portfolio Expansion",
                                                    "Innovative Formulations",
                                                    "Therapeutic Advancements"
                                                ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-[20px] bg-white p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$src$2f$components$2f$PremiumFeatureIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PremiumFeatureIcon"], {}, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#475569] font-medium",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 pt-6 border-t border-border",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#475569] leading-relaxed text-lg font-medium",
                                                    children: "Our product launches reflect our dedication to quality, innovation, and improved patient outcomes. Stay updated with our latest product introductions, therapeutic advancements, and upcoming healthcare solutions."
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row-reverse gap-12 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:w-1/3 lg:sticky lg:top-32",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    backgroundPosition: [
                                                        "0% 50%",
                                                        "100% 50%",
                                                        "0% 50%"
                                                    ]
                                                },
                                                transition: {
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                },
                                                className: "w-14 h-14 rounded-2xl bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] flex items-center justify-center shrink-0 shadow-[0_10px_20px_rgba(236,72,153,0.3)] mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$presentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Presentation$3e$__["Presentation"], {
                                                    className: "w-6 h-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-display font-bold text-primary mb-4",
                                                children: [
                                                    "Medical",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm",
                                                        children: "Conferences"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-medium tracking-wide text-lg mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    animate: {
                                                        backgroundPosition: [
                                                            "0% 50%",
                                                            "100% 50%",
                                                            "0% 50%"
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 5,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    },
                                                    className: "bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm",
                                                    children: "Connecting Through Science and Knowledge"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    backgroundPosition: [
                                                        "0% 50%",
                                                        "100% 50%",
                                                        "0% 50%"
                                                    ]
                                                },
                                                transition: {
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                },
                                                className: "w-16 h-1 rounded-full bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] mb-6"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#475569] leading-relaxed",
                                                children: [
                                                    "Medinet actively participates in",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "medical conferences"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 17
                                                    }, this),
                                                    ",",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 6,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#EC4899,#9D174D,#EC4899)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "Continuing Medical Education (CME) programs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 17
                                                    }, this),
                                                    ",",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 5.5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "healthcare exhibitions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 17
                                                    }, this),
                                                    ", and",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 4.5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#EC4899,#9D174D,#EC4899)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "industry events"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    "to strengthen",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "scientific engagement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    "and foster",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 6.5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#EC4899,#9D174D,#EC4899)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "meaningful collaborations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    "with healthcare professionals."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:w-2/3 bg-pink-50/50 rounded-3xl p-8 md:p-10 border border-pink-100/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-primary font-semibold mb-6 text-lg",
                                                children: "Our participation includes:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                                children: [
                                                    "Medical Conferences",
                                                    "CME Programs",
                                                    "Healthcare Exhibitions",
                                                    "Scientific Meetings",
                                                    "Product Awareness Programs",
                                                    "Healthcare Professional Engagement Activities"
                                                ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-[20px] bg-white p-4 rounded-xl border border-teal-100/50 shadow-sm hover:shadow-md transition-shadow",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$src$2f$components$2f$PremiumFeatureIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PremiumFeatureIcon"], {}, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#475569] font-medium",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 pt-6 border-t border-teal-200/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#475569] leading-relaxed text-lg font-medium",
                                                    children: "These events provide opportunities to exchange knowledge, showcase our products, and stay aligned with the latest advancements in healthcare."
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row gap-12 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:w-1/3 lg:sticky lg:top-32",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    backgroundPosition: [
                                                        "0% 50%",
                                                        "100% 50%",
                                                        "0% 50%"
                                                    ]
                                                },
                                                transition: {
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                },
                                                className: "w-14 h-14 rounded-2xl bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] flex items-center justify-center shrink-0 shadow-[0_10px_20px_rgba(236,72,153,0.3)] mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"], {
                                                    className: "w-6 h-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-display font-bold text-primary mb-4",
                                                children: [
                                                    "Company",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm",
                                                        children: "Announcements"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-medium tracking-wide text-lg mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    animate: {
                                                        backgroundPosition: [
                                                            "0% 50%",
                                                            "100% 50%",
                                                            "0% 50%"
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 5,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    },
                                                    className: "bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm",
                                                    children: "Stay Updated with Medinet"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    backgroundPosition: [
                                                        "0% 50%",
                                                        "100% 50%",
                                                        "0% 50%"
                                                    ]
                                                },
                                                transition: {
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                },
                                                className: "w-16 h-1 rounded-full bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] mb-6"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 275,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#475569] leading-relaxed",
                                                children: [
                                                    "Keep up with the",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "latest news"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    "and",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 6,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#EC4899,#9D174D,#EC4899)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "important announcements"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    "from Medinet Pharmaceutical Marketing Company. We are committed to keeping our customers, partners, and stakeholders informed about our",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 5.5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "growth and achievements"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 17
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:w-2/3 bg-pink-50/50 rounded-3xl p-8 md:p-10 border border-pink-100/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-primary font-semibold mb-6 text-lg",
                                                children: "Here you'll find updates on:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                                children: [
                                                    "Corporate News",
                                                    "Business Milestones",
                                                    "Strategic Partnerships",
                                                    "New Team Members",
                                                    "Awards & Recognitions",
                                                    "Business Expansion",
                                                    "Product Portfolio Updates",
                                                    "Career Announcements"
                                                ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-[20px] bg-white p-4 rounded-xl border border-indigo-100/50 shadow-sm hover:shadow-md transition-shadow",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$src$2f$components$2f$PremiumFeatureIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PremiumFeatureIcon"], {}, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#475569] font-medium",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row-reverse gap-12 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:w-1/3 lg:sticky lg:top-32",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    backgroundPosition: [
                                                        "0% 50%",
                                                        "100% 50%",
                                                        "0% 50%"
                                                    ]
                                                },
                                                transition: {
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                },
                                                className: "w-14 h-14 rounded-2xl bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] flex items-center justify-center shrink-0 shadow-[0_10px_20px_rgba(236,72,153,0.3)] mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"], {
                                                    className: "w-6 h-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-display font-bold text-primary mb-4",
                                                children: "CSR Initiatives"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-secondary font-medium tracking-wide text-lg mb-4",
                                                children: "Caring Beyond Medicines"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 329,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 mb-6"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 330,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#475569] leading-relaxed",
                                                children: [
                                                    "At Medinet, we believe our responsibility extends beyond delivering quality medicines. Through our",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "Corporate Social Responsibility (CSR)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    "initiatives, we strive to make a",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 6,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#EC4899,#9D174D,#EC4899)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "positive impact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    "on the communities we serve by promoting",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            backgroundPosition: [
                                                                "0% 50%",
                                                                "100% 50%",
                                                                "0% 50%"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 5.5,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        },
                                                        className: "bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm",
                                                        children: "health, education, and social well-being"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 17
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:w-2/3 bg-emerald-50/50 rounded-3xl p-8 md:p-10 border border-emerald-100/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-primary font-semibold mb-6 text-lg",
                                                children: "Our CSR focus areas include:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 348,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                                children: [
                                                    "Health Awareness Campaigns",
                                                    "Community Health Programs",
                                                    "Medical Camps",
                                                    "Public Health Education",
                                                    "Environmental Sustainability Initiatives",
                                                    "Employee Volunteering Activities",
                                                    "Support for Community Development"
                                                ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-[20px] bg-white p-4 rounded-xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$src$2f$components$2f$PremiumFeatureIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PremiumFeatureIcon"], {}, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#475569] font-medium",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 349,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 pt-6 border-t border-emerald-200/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#475569] leading-relaxed text-lg font-medium",
                                                    children: "Through these initiatives, we remain committed to creating healthier communities and contributing to a better future."
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 365,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] border-b border-border relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-[60%] h-[60%] rounded-full blur-[150px] bg-[#2563EB] opacity-10"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                            lineNumber: 379,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-lg mx-auto mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                    className: "w-8 h-8 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight mb-6 flex flex-wrap justify-center gap-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Stay"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        animate: {
                                            backgroundPosition: [
                                                "0% 50%",
                                                "100% 50%",
                                                "0% 50%"
                                            ]
                                        },
                                        transition: {
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "linear"
                                        },
                                        className: "bg-[linear-gradient(to_right,#EC4899,#0B1F4D,#BE185D,#0B1F4D)] bg-[length:200%_auto] text-transparent bg-clip-text",
                                        children: "Connected"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto mb-8"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true
                                },
                                variants: {
                                    hidden: {
                                        opacity: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.03,
                                            delayChildren: 0.6
                                        }
                                    }
                                },
                                className: "text-[#334155] leading-[1.8] text-lg sm:text-xl font-medium max-w-[800px] mx-auto mb-12",
                                children: [
                                    {
                                        text: "Follow our "
                                    },
                                    {
                                        text: "News & Events",
                                        highlight: true
                                    },
                                    {
                                        text: " page for the latest updates on "
                                    },
                                    {
                                        text: "Product Launches",
                                        highlight: true
                                    },
                                    {
                                        text: ", "
                                    },
                                    {
                                        text: "Medical Conferences",
                                        highlight: true
                                    },
                                    {
                                        text: ", company announcements, and community initiatives as Medinet continues its journey of delivering "
                                    },
                                    {
                                        text: '"Reliable Care, Every Time."',
                                        highlight: true
                                    }
                                ].map((segment, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                        children: segment.text.split(" ").map((word, wIdx)=>{
                                            if (!word) return null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                variants: {
                                                    hidden: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    visible: {
                                                        opacity: 1,
                                                        y: 0
                                                    }
                                                },
                                                className: "inline-block mr-[6px]",
                                                children: segment.highlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediNet$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    animate: {
                                                        backgroundPosition: [
                                                            "0% 50%",
                                                            "100% 50%",
                                                            "0% 50%"
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 5,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    },
                                                    className: "bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text font-bold inline-block",
                                                    children: word
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 25
                                                }, this) : word
                                            }, `${idx}-${wIdx}`, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                                lineNumber: 423,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, idx, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                        lineNumber: 419,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = NewsEvents;
var _c;
__turbopack_context__.k.register(_c, "NewsEvents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/MediNet/src/components/pages/NewsEvents.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=OneDrive_Desktop_MediNet_src_components_pages_NewsEvents_tsx_0ilkxn5._.js.map