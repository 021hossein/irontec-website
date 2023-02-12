import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-1.5">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="IronTec">
                <svg className="h-10 sm:hidden block -mr-2" viewBox="0 0 293 86" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-12 h-12 sm:block hidden " viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.611 33.2057V33.3249V38.7464L32.2593 40.8717V33.2057H24.611ZM19.6185 5.72793L16.8788 6.79868L23.6609 8.30147L23.6646 5.12275V4.14676L19.6185 5.72793ZM31.1655 41.5472L26.9037 40.3629L24.611 39.7259V43.8709L31.1655 41.5472ZM26.8732 7.41903L31.1655 5.89743L24.611 4.07604V8.22097L26.8732 7.41903ZM40.6189 26.434L42.4485 31.1161L43.9522 24.3301H39.7967L40.6189 26.434ZM41.5472 16.8292L40.3629 21.091L39.7259 23.3836H43.8708L41.5472 16.8292ZM7.41907 21.1214L5.89746 16.8292L4.07598 23.3836H8.22099L7.41907 21.1214ZM6.79881 31.1159L7.36601 28.5555L8.30226 24.3301H4.1468L6.79881 31.1159ZM23.6534 14.789L23.6598 9.26685L15.7354 7.51091V14.789H23.6534ZM15.7354 15.7354V15.9747L15.7652 27.3139L19.2137 24.1002L19.8699 24.1114L27.6804 31.922L31.9221 27.6804L24.1113 19.8698V19.2008L27.556 15.7562L16.2813 15.7354H15.7354ZM15.7354 28.6326V32.2594H26.6796L19.5231 25.1028L15.7354 28.6326ZM15.7354 33.2057V41.8733L23.6511 38.6785V33.2057H15.7354ZM23.6646 39.6911L21.3045 40.6437L16.8486 42.442L23.6646 43.9523V39.6911ZM14.7889 42.5733V33.2057H6.92333L6.48347 32.9045L3.01481 24.0288L3.11469 23.8823L3 23.7312L5.38822 15.1365L5.84302 14.789H14.7889V6.92332L15.0902 6.48343L23.9659 3.01487L24.1122 3.11496L24.2635 3L32.8582 5.38822L33.2057 5.84308V14.789H41.4929L41.9384 15.105L44.9852 23.6997L44.895 23.8275L45 23.9586L43.0334 32.8343L42.5732 33.2057H33.2057V41.4929L32.8897 41.9384L24.295 44.9853L24.1673 44.895L24.0361 45L15.1604 43.0335L14.7889 42.5733ZM14.7889 32.2594V24.3301H9.26781L7.5109 32.2594H14.7889ZM14.7889 23.3836V15.7354H6.51194L9.22332 23.3836H14.7889ZM32.2593 32.2594V28.6812L28.6812 32.2594H32.2593ZM32.2593 26.6796V15.7354H28.9151L25.115 19.5354L32.2593 26.6796ZM32.2593 14.789V6.512L24.611 9.22331V14.6777V14.789H32.2593ZM33.2057 15.7354V23.3836H38.7463L40.8717 15.7354H33.2057ZM33.2057 24.3301V32.2594H41.8812L38.7825 24.3301H33.2057Z" fill="#000"/>
                </svg>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <p className="text-sm text-gray-600">
                هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.
                <br/>
                شماره تماس: ۲۸۳۹۶۵۵ - ۰۹۱۲
                <br/>
                ایمیل: info@irontec.ir
              </p>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">با آیرون‌تک</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/about" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">درباره آیرون‌تک</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/pricing" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">قیمت گذاری</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/blog" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">وبلاگ</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/terms" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">شرایط استفاده از خدمات</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/privacy" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">سیاست حفظ حریم خصوصی</a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">کاربران</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/faq" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">ﭘﺮﺳﺶ‌ﻫﺎی راﯾﺞ</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/docs/intro"
                   className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">مرکز آموزش</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/docs/intro" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">مستندات فنی</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/docs/intro" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">دسترسی به API</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/docs/intro" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">گزارش باگ</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">راهکارها</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/docs/intro" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">مانده‌حساب مشتریان</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/docs/intro" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">شاخص‌های کلیدی عملکرد</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/docs/intro" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">مدیریت دسترسی‌ها</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/docs/intro" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">موجودی انبار</a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://docs.irontec.ir/docs/intro" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">حقوق کارکنان</a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">با ما همراه باشید</h6>
            <p className="text-sm text-gray-600 mb-4">برای اطلاع از آخرین اخبار ما را در شبکه‌های اجتماعی دنبال کنید.</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 text-sm" placeholder="ایمیل خود را وارد کنید" required />
                    <button type="submit" className="absolute inset-0 right-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 left-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path transform="scale (-1, 1)" transform-origin="center" d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:mr-4 md:mb-0">
            <li className="ml-4">
              <a href="https://www.instagram.com/irontec.ir/" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current p-2" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://github.com/021hossein/irontec-website" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://www.linkedin.com/company/irontec-ir/" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current p-2" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 ml-4">ساخته شده با ❤️ در ایران. تمامی حقوق محفوظ است.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
