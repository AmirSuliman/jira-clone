'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignin = pathname === '/sign-in';

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex gap-4 justify-between items-center">
          <Image src="/logo.svg" width={152} height={56} alt="logo" />
          <Button variant="secondary">
            <Link href={isSignin ? '/sign-up' : '/sign-in'}>
              {isSignin ? 'Sign Up' : 'Sign in'}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};
export default AuthLayout;
