
import Image from 'next/image';
import { useLayoutEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Card, Cards } from 'fumadocs-ui/components/card';


export default function ChooseFramework() {
  const { resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState('');

  useLayoutEffect(() => {
      setLogoSrc(resolvedTheme === "dark" ? '/frameworks/react-wordmark-dark.svg' : '/frameworks/react-wordmark-light.svg');
  }, [resolvedTheme]);

  if (!logoSrc) return;
  return (
    <Cards>
      <Card
        title={(<div className="max-w flex flex-col justify-center items-center h-full">
          <Image src={logoSrc} alt="react logo" width="120" height="100" />
        </div>)as any as string}
        />
      <Card
        title={(
            <div className="max-w flex flex-col justify-center items-center h-full">
            <Image src="/frameworks/nextjs-wordmark.svg" alt="nextjs logo" width="167" height="100" />
            </div>
        )as any as string}
      />
    </Cards>
  );
}