import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block py-4">
      <div className="flex justify-center">
        <div className="relative w-36 h-36 md:w-44 md:h-44">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-900 to-neutral-900 p-[2px]">
            <div className="rounded-full bg-black p-5 h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest font-['Oswald']">
                  TRINKEN
                </h2>
                <p className="text-xs md:text-sm text-neutral-400 mt-1 font-['Oswald']">
                  Bebidas & Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
} 