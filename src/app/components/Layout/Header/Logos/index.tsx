import Image from 'next/image'

interface LogosProps {
  variant?: "white" | "colored";
}

const Logos: React.FC<LogosProps> = ({ variant = "white" }) => {
  return (
      <Image
        src={variant === "colored" ? "/images/logo/logo-b.png" : "/images/logo/logo-w.png"}
        alt='logo'
        width={219}   // ukuran maksimum (untuk SEO dan layout)
        height={50}   // ukuran maksimum
        quality={100}
        className="w-[197px] sm:w-[219px] h-[45px] sm:h-[50px] object-contain"
      />
  )
}

export default Logos
