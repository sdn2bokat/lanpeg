import Image from 'next/image'
import Link from 'next/link'

const Icon: React.FC = () => {
  return (
    <Link href='/'>
      <Image
        src='/images/logo/icon.svg'
        alt='logo'
        width={50}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
      />
    </Link>
  )
}

export default Icon
