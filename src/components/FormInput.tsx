/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, helperText, className = "", ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        <label htmlFor={id} className="text-sm font-medium text-body">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
        <input
          id={id}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          className={`w-full px-4 py-2.5 bg-white border rounded-input shadow-sm hover:shadow-md transition-all duration-300 text-heading text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary ${error
              ? "border-error focus:ring-error/20 focus:border-error"
              : "border-border"
            } ${className}`}
          {...props}
        />
        {error && <span id={`${id}-error`} className="text-xs font-medium text-error">{error}</span>}
        {!error && helperText && (
          <span id={`${id}-helper`} className="text-xs text-muted">{helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, error, helperText, className = "", ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        <label htmlFor={id} className="text-sm font-medium text-body">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          id={id}
          ref={ref}
          rows={props.rows || 4}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          className={`w-full px-4 py-2.5 bg-white border rounded-input shadow-sm hover:shadow-md transition-all duration-300 text-heading text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary resize-y min-h-[100px] ${error
              ? "border-error focus:ring-error/20 focus:border-error"
              : "border-border"
            } ${className}`}
          {...props}
        />
        {error && <span id={`${id}-error`} className="text-xs font-medium text-error">{error}</span>}
        {!error && helperText && (
          <span id={`${id}-helper`} className="text-xs text-muted">{helperText}</span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, options, error, helperText, className = "", placeholder, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        <label htmlFor={id} className="text-sm font-medium text-body">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
        <select
          id={id}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          className={`w-full px-4 py-2.5 bg-white border rounded-input shadow-sm hover:shadow-md transition-all duration-300 text-heading text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat ${error
              ? "border-error focus:ring-error/20 focus:border-error"
              : "border-border"
            } ${className}`}
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span id={`${id}-error`} className="text-xs font-medium text-error">{error}</span>}
        {!error && helperText && (
          <span id={`${id}-helper`} className="text-xs text-muted">{helperText}</span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
