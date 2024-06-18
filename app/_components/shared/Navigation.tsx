import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">
            All
          </Link>
        </li>
        <li>
          <Link
            href="/todo"
            className="hover:text-accent-400 transition-colors"
          >
            Todo
          </Link>
        </li>
        <li>
          <Link
            href="/completed"
            className="hover:text-accent-400 transition-colors"
          >
            Completed
          </Link>
        </li>
      </ul>
    </nav>
  );
}
