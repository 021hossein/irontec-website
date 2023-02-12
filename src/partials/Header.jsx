import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0">
            {/* Logo */}
            <Link to="/" aria-label="Iron tec">
              <svg className="h-10 sm:block hidden" viewBox="0 0 293 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M239.889 49.0425V55.9521H207.59V69.91H200.691V55.9521C200.691 50.5394 200.752 36.049 200.752 30.6176H207.651V36.6858V49.0425H239.889Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M246.788 49.0425H239.89V30.6174H246.788V49.0425Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M167.458 30.6172V23.7079H185.854V30.6172H167.458Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M147.365 63.0008V69.9104H123.885V63.0008H147.365Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M152.73 63.4034H145.831V30.6172H152.73V63.4034Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M115.986 30.6172H122.884V63.4034H115.986V30.6172Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M100.488 49.0424V55.9524C75.2919 55.9524 50.0947 55.9524 24.8986 55.9524V49.0424H61.2911V22.9095H68.1896V49.0424H100.488Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M107.387 49.0429H100.488V30.6172H107.387V49.0429Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M97.6093 16V22.9096H68.1898V16H97.6093Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M130.887 38.049V31.1395H138.362V38.049H130.887Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M59.3693 48.6743L69.2692 48.6474L71.9321 48.6398" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M216.817 69.5067V62.5974H234.366V69.5067H216.817Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M75.7131 37.5269V30.6172H93.2628V37.5269H75.7131Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M167.518 49.0425V55.9521H185.914V69.91H192.813V55.9521C192.813 53.0515 192.795 47.5435 192.779 42.2194C192.766 37.6099 192.752 33.138 192.752 30.6176H185.854V36.6861V49.0425H167.518Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M24.8988 28.0319V48.8992H18V28.0319H24.8988Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M160.62 49.0425H167.518V30.6172H160.62V49.0425Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M261.661 30.6171V63H254.761V30.6171H261.661Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
                <path d="M240.099 22.9099V16.0003H276.322V22.9099H240.099Z" stroke="#292929" stroke-width="2.83467" stroke-miterlimit="2.61313"/>
              </svg>
              <svg className="w-10 h-10 sm:hidden block -mr-2" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.611 33.2057V33.3249V38.7464L32.2593 40.8717V33.2057H24.611ZM19.6185 5.72793L16.8788 6.79868L23.6609 8.30147L23.6646 5.12275V4.14676L19.6185 5.72793ZM31.1655 41.5472L26.9037 40.3629L24.611 39.7259V43.8709L31.1655 41.5472ZM26.8732 7.41903L31.1655 5.89743L24.611 4.07604V8.22097L26.8732 7.41903ZM40.6189 26.434L42.4485 31.1161L43.9522 24.3301H39.7967L40.6189 26.434ZM41.5472 16.8292L40.3629 21.091L39.7259 23.3836H43.8708L41.5472 16.8292ZM7.41907 21.1214L5.89746 16.8292L4.07598 23.3836H8.22099L7.41907 21.1214ZM6.79881 31.1159L7.36601 28.5555L8.30226 24.3301H4.1468L6.79881 31.1159ZM23.6534 14.789L23.6598 9.26685L15.7354 7.51091V14.789H23.6534ZM15.7354 15.7354V15.9747L15.7652 27.3139L19.2137 24.1002L19.8699 24.1114L27.6804 31.922L31.9221 27.6804L24.1113 19.8698V19.2008L27.556 15.7562L16.2813 15.7354H15.7354ZM15.7354 28.6326V32.2594H26.6796L19.5231 25.1028L15.7354 28.6326ZM15.7354 33.2057V41.8733L23.6511 38.6785V33.2057H15.7354ZM23.6646 39.6911L21.3045 40.6437L16.8486 42.442L23.6646 43.9523V39.6911ZM14.7889 42.5733V33.2057H6.92333L6.48347 32.9045L3.01481 24.0288L3.11469 23.8823L3 23.7312L5.38822 15.1365L5.84302 14.789H14.7889V6.92332L15.0902 6.48343L23.9659 3.01487L24.1122 3.11496L24.2635 3L32.8582 5.38822L33.2057 5.84308V14.789H41.4929L41.9384 15.105L44.9852 23.6997L44.895 23.8275L45 23.9586L43.0334 32.8343L42.5732 33.2057H33.2057V41.4929L32.8897 41.9384L24.295 44.9853L24.1673 44.895L24.0361 45L15.1604 43.0335L14.7889 42.5733ZM14.7889 32.2594V24.3301H9.26781L7.5109 32.2594H14.7889ZM14.7889 23.3836V15.7354H6.51194L9.22332 23.3836H14.7889ZM32.2593 32.2594V28.6812L28.6812 32.2594H32.2593ZM32.2593 26.6796V15.7354H28.9151L25.115 19.5354L32.2593 26.6796ZM32.2593 14.789V6.512L24.611 9.22331V14.6777V14.789H32.2593ZM33.2057 15.7354V23.3836H38.7463L40.8717 15.7354H33.2057ZM33.2057 24.3301V32.2594H41.8812L38.7825 24.3301H33.2057Z" fill="#000"/>
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a target="_blank" href="https://irontec-doc.s3-website.ir-thr-at1.arvanstorage.com/docs/intro" className="font-medium text-gray-600 hover:text-gray-900 px-1 sm:px-5 py-3 flex items-center transition duration-150 ease-in-out">مرکز آموزش</a>
              </li>
              <li>
                <a target="_blank" href="/app-latest.apk" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 mr-3">
                  <span>دریافت برنامه</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 mr-2 -ml-1 sm:flex hidden" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path transform="scale (-1, 1)" transform-origin="center" d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </a>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
