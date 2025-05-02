"use client"

const Button = ({
  children,
  variant = "primary",
  size = "md",
  rounded = "md",
  glow = false,
  glassmorphic = false,
  gradient = false,
  className = "",
  onClick,
  ...props
}) => {
  const baseClasses = "font-medium transition-all duration-300 flex items-center justify-center"

  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-sky-500 hover:bg-sky-600 text-white",
    outline: "border border-blue-500 text-blue-400 hover:bg-blue-500/10",
    ghost: "text-blue-400 hover:bg-blue-500/10",
  }

  const sizes = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4",
    lg: "py-3 px-6 text-lg",
  }

  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }

  let styleClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${roundedStyles[rounded]}`

  if (glassmorphic) {
    styleClasses += " glassmorphic"
  }

  if (gradient) {
    styleClasses += " bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400"
  }

  if (glow) {
    styleClasses += " hover:shadow-lg"
    if (variant === "primary" || gradient) styleClasses += " hover:blue-glow"
    else if (variant === "secondary") styleClasses += " hover:blue-glow"
  }

  return (
    <button className={`${styleClasses} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
