import Link from 'next/link';
import Image from 'next/image';
import Instagram from '@/public/instagram.svg';
import Youtube from '@/public/youtube.svg';
import Linkedin from '@/public/linkedin.svg';
import Github from '@/public/github.svg';

export default function Socials() {
  return (
    <div className='flex justify-center space-x-4'>
      {/* Github */}
      <Link href='https://github.com/koraebi' target='_blank'>
        <Image alt='' src={Github} height={25} />
      </Link>
      {/* Linkedin */}
      <Link href="https://www.linkedin.com/company/koraebi" target="_blank">
        <Image alt='' src={Linkedin} height={25} />
      </Link>
      {/* Instagram */}
      <Link href="https://www.instagram.com/koraebi_" target="_blank">
        <Image alt='' src={Instagram} height={25} />
      </Link>
      {/* Youtube */}
      <Link href='https://www.youtube.com/@koraebi' target='_blank'>
        <Image alt='' src={Youtube} height={25} />
      </Link>
    </div>
  );
};

  