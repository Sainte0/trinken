import Image from 'next/image'

export default function Banner() {
  return (
    <div className="w-full h-40 relative mb-8 rounded-lg overflow-hidden">
      <Image
        src="/images/banner.jpg"
        alt="Store Banner"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
} 