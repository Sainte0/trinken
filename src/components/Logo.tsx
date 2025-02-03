import Image from 'next/image'

export default function Logo() {
  return (
    <div className="py-4 flex justify-center">
      <div className="relative w-48 h-24">
        <Image
          src="/images/logo.jpg"
          alt="Store Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
} 