import CachedTokens from '@/components/CachedTokens'
import TokenGenerator from '@/components/Generate'
import TokenValidator from '@/components/Validate'

export default function Home() {
  return (
    <main className='flex min-h-screen justify-center items-center'>
      <div className=' flex flex-col gap-4 w-full'>
        <div className=' flex flex-row justify-around w-full'>
          <TokenGenerator />
          <TokenValidator />
        </div>
        <CachedTokens />
      </div>
    </main>
  )
}
