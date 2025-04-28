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
    primary: "bg-purple-600 hover:bg-purple-700 text-white",
    secondary: "bg-cyan-600 hover:bg-cyan-700 text-white",
    outline: "border border-gray-700/50 text-gray-100 hover:bg-gray-800/50",
    ghost: "text-gray-100 hover:bg-gray-800/30",
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
    styleClasses += " bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500"
  }

  if (glow) {
    styleClasses += " hover:shadow-lg"
    if (variant === "primary" || gradient) styleClasses += " hover:purple-glow"
    else if (variant === "secondary") styleClasses += " hover:cyan-glow"
  }

  return (
    <button className={`${styleClasses} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
