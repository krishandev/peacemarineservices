import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue ${className}`}
      aria-label="PMS Peace Marine Services home"
    >
      <Image
        src="/PMS-4.png"
        alt="PMS Peace Marine Services"
        width={303}
        height={135}
        className="h-11 w-auto max-w-[168px] object-contain object-left sm:h-12 sm:max-w-[186px] lg:h-11 lg:max-w-[148px] xl:h-[52px] xl:max-w-[200px]"
        priority
      />
    </Link>
  );
}
