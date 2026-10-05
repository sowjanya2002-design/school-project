import React from "react";

export const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const variantStyles = {
      default: "bg-[#274b3d] text-white hover:bg-[#1e3b30]",
      brand: "bg-[#274b3d] text-white hover:bg-[#1e3b30] shadow-sm",
      light: "bg-white text-[#223528] hover:bg-[#f4f6f2] shadow-sm",
      heroOutline: "border border-white/40 text-white bg-black/10 hover:bg-white/10 backdrop-blur-sm",
      iconPlain: "bg-transparent text-[#223528] hover:bg-black/5",
      outline: "border border-[#274b3d] text-[#274b3d] hover:bg-[#274b3d]/10",
    };

    const sizeStyles = {
      default: "h-11 px-6 py-2.5 text-sm font-semibold tracking-wide",
      sm: "h-9 px-4 text-xs font-semibold",
      icon: "h-10 w-10 p-0 flex items-center justify-center",
    };

    const combinedClassName = `inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${
      variantStyles[variant] || variantStyles.default
    } ${sizeStyles[size] || sizeStyles.default} ${className}`;

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ref,
        className: `${children.props.className || ""} ${combinedClassName}`.trim(),
        ...props,
      });
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
