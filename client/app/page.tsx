import TokenGenerator from '@/components/Generate'
import TokenValidator from '@/components/Validate'

export default function Home() {
  return (
    <main className='flex min-h-screen justify-center items-center'>
      <div className=' flex flex-row gap-2'>
        <TokenGenerator />
        <TokenValidator />
      </div>
    </main>
  )
}
