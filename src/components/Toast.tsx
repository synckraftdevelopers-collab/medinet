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
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-5 py-4 bg-surface rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border animate-slide-in max-w-sm" role="alert" aria-live="assertive">
      {type === "success" ? (
        <CheckCircle className="w-5 h-5 text-success shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 text-error shrink-0" />
      )}
      <span className="text-sm font-medium text-body flex-1">{message}</span>
      <button
        onClick={onClose}
        className="p-1.5 hover:bg-alt-bg rounded-full transition-colors duration-300 text-muted hover:text-heading focus-visible:ring-2 focus-visible:ring-secondary focus-visible:outline-none"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

