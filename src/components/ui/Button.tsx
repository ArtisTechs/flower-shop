import { Link, type LinkProps } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type BaseProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: never }
type ButtonLinkProps = BaseProps & LinkProps

export function Button(props: ButtonProps | ButtonLinkProps) {
  const { children, variant = 'primary', className = '' } = props
  const classes = `button button--${variant} ${className}`.trim()

  if ('to' in props && props.to !== undefined) {
    const { children: _children, variant: _variant, className: _className, ...linkProps } = props
    void _children
    void _variant
    void _className
    return (
      <Link className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  const { children: _children, variant: _variant, className: _className, ...buttonProps } = props
  void _children
  void _variant
  void _className
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
