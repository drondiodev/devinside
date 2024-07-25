import Link from 'next/link'

export default function Banner() {
  return (
    <div className="flex justify-center items-center gap-x-6 bg-blue-600 px-6 py-2.5 sm:px-3.5">
      <p className="text-sm leading-6 text-white">
        <Link href="/">
          <strong className="font-semibold">DevInside.</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Coming next&nbsp;
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </p>
    </div>
  )
}
