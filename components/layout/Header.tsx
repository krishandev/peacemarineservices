import Logo from "./Logo";
import SiteNav from "./SiteNav";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-pms-navy focus:outline-2 focus:outline-offset-2 focus:outline-pms-blue"
      >
        Skip to main content
      </a>
      <TopBar />
      <SiteNav>
        <Logo />
      </SiteNav>
    </header>
  );
}
