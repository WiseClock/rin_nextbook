import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function HomePage() {
  const docsIndex = '/intro/index'
  const router = useRouter()

  useEffect(() => {
    router.push(docsIndex)
  }, [])

  return (
    <div className='mx-auto max-w-md'>
      <div className='text-center mt-32 text-3xl font-bold'>
        欢迎阅读小玲使用手册！
      </div>
      <div className='text-center'>
        <p>占位符</p>
        <p>占位符</p>
        <p>
          将自动转入{' '}
          <Link href={docsIndex}>
            <a className='underline'>文档页面</a>
          </Link>
        </p>
      </div>
    </div>
  )
}
