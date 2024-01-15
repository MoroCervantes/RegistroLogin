import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <ul>

        <li>
          <link href="/">
            <a>Home</a>
          </link>

        </li>

        <li>
          <link href="/test">
            <a>Test</a>
          </link>
        </li>

      </ul>

    </main>
  )
}
