interface LogoProps {
  className?: string
}

const Logo = ({ className }: LogoProps) => {
  return (
    <>
      <img
        src="/go-hub-logo.svg"
        alt="GoHub logo"
        className={className}
      />
    </>
  )
}

export default Logo;