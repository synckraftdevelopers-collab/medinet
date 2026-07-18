/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

export interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type, onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm shadow-lg border border-slate-200 animate-slide-in max-w-sm">
      {type === "success" ? (
        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 text-red-600 shrink-0" />
      )}
      <span className="text-sm font-medium text-slate-600">{message}</span>
      <button
        onClick={onClose}
        className="p-1 hover:bg-slate-50 rounded-lg shadow-sm text-slate-400 hover:text-slate-600 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
