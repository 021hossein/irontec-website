import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

import HomeScreen from '../images/home.png';
import DashboardScreen from '../images/dashboard.png';
import DashboardElement1 from '../images/dashboard-element-1.png';
import DashboardElement2 from '../images/dashboard-element-2.png';
import DashboardElement3 from '../images/dashboard-element-3.png';
import DashboardElement4 from '../images/dashboard-element-4.png';
import OrderElement from '../images/order-element-large.png';
import OrderScreen from '../images/order2.png';
import CustomerScreen from '../images/customer.png';
import UserScreen from '../images/user.png';
import ReportScreen from '../images/report.png';

import EventsScreen from '../images/events.png';
import TasksScreen from '../images/tasks.png';







function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section id="2" className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none pb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-10 md:py-14">

          {/* Section header */}
          {/*<div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">*/}
          {/*  <h1 className="h2 mb-4">راهکارها</h1>*/}
          {/*  <p className="text-xl text-gray-600">از تعامل مشتریان با، طراحی این بخش تکمیل نشده... :)</p>*/}
          {/*</div>*/}

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="text-center max-w-xl my-12 md:my-24 md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 content-center grid px-4 lg:my-30" data-aos="fade-right">
              {/* Tabs buttons */}
              {/*<div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">*/}
              <div className="mb-8">
                <h2  className="h1 mb-3 text-center md:text-right">راهکارها</h2>
                <p className="text-xl text-gray-600 text-center md:text-right">هوشمند مدیریت فروش با داده‌های مشتریان خود تجربه کنید را با پلتفرم هوشمند مدیریت فروش با داده‌های مشتریان خود تجربه کنید، طراحی این بخش تکمیل نشده... :)</p>
              </div>
              <div className="text-center items-center md:text-right">
                <a className={`block m-auto md:mx-0 md:flex items-center text-lg p-1 transition duration-300 ease-in-out mb-3  ${tab !== 2 ? 'text-blue-700' : 'text-gray-900'} hover:text-gray-900 font-medium leading-snug tracking-tight hover:border-black border-b border-transparent w-max`} href="#0"
                   onMouseOver={(e) => { e.preventDefault(); setTab(2); }}>
                  نظارت بر شاخص‌های عملکرد
                  <svg className="w-5 h-5 fill-current flex-shrink-0 mr-2 -ml-1 md:flex hidden" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
                  </svg>
                </a>
                <a className={`block m-auto md:mx-0 md:flex items-center text-lg p-1 transition duration-300 ease-in-out mb-3  ${tab !== 3 ? 'text-blue-700' : 'text-gray-900'} hover:text-gray-900 font-medium leading-snug tracking-tight hover:border-black border-b border-transparent w-max`} href="#0"
                   onMouseOver={(e) => { e.preventDefault(); setTab(3); }}>
                  یادآوری و مدیرت وظایف
                  <svg className="w-5 h-5 fill-current flex-shrink-0 mr-2 -ml-1 md:flex hidden" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
                  </svg>
                </a>
                <a className={`block m-auto md:mx-0 md:flex items-center text-lg p-1 transition duration-300 ease-in-out mb-3  ${tab !== 4 ? 'text-blue-700' : 'text-gray-900'} hover:text-gray-900 font-medium leading-snug tracking-tight hover:border-black border-b border-transparent w-max`} href="#0"
                   onMouseOver={(e) => { e.preventDefault(); setTab(4); }}>
                  گزارش عملکرد کارشناسان
                  <svg className="w-5 h-5 fill-current flex-shrink-0 mr-2 -ml-1 md:flex hidden" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
                  </svg>
                </a>
                <a className={`block m-auto md:mx-0 md:flex items-center text-lg p-1 transition duration-300 ease-in-out mb-3  ${tab !== 5 ? 'text-blue-700' : 'text-gray-900'} hover:text-gray-900 font-medium leading-snug tracking-tight hover:border-black border-b border-transparent w-max`} href="#0"
                   onMouseOver={(e) => { e.preventDefault(); setTab(5); }}>
                  گزارش فروش محصولات
                  <svg className="w-5 h-5 fill-current flex-shrink-0 mr-2 -ml-1 md:flex hidden" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
                  </svg>
                </a>
                <a className={`block m-auto md:mx-0 md:flex items-center text-lg p-1 transition duration-300 ease-in-out mb-3  ${tab !== 6 ? 'text-blue-700' : 'text-gray-900'} hover:text-gray-900 font-medium leading-snug tracking-tight hover:border-black border-b border-transparent w-max`} href="#0"
                   onMouseOver={(e) => { e.preventDefault(); setTab(6); }}>
                  مانده حساب مشتریان
                  <svg className="w-5 h-5 fill-current flex-shrink-0 mr-2 -ml-1 md:flex hidden" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
                  </svg>
                </a>
                <a className={`block m-auto md:mx-0 md:flex items-center text-lg p-1 transition duration-300 ease-in-out mb-3  ${tab !== 7 ? 'text-blue-700' : 'text-gray-900'} hover:text-gray-900 font-medium leading-snug tracking-tight hover:border-black border-b border-transparent w-max`} href="#0"
                   onMouseOver={(e) => { e.preventDefault(); setTab(7); }}>
                  نظارت در فرایند فروش
                  <svg className="w-5 h-5 fill-current flex-shrink-0 mr-2 -ml-1 md:flex hidden" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
                  </svg>
                </a>
                <a className={`block m-auto md:mx-0 md:flex items-center text-lg p-1 transition duration-300 ease-in-out mb-3  ${tab !== 8 ? 'text-blue-700' : 'text-gray-900'} hover:text-gray-900 font-medium leading-snug tracking-tight hover:border-black border-b border-transparent w-max`} href="#0"
                   onMouseOver={(e) => { e.preventDefault(); setTab(8); }}>
                  ثبت همه‌ی رویدادها
                  <svg className="w-5 h-5 fill-current flex-shrink-0 mr-2 -ml-1 md:flex hidden" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center">
                {/* Item 1 */}
                <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-8"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-8"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded-3xl" src={HomeScreen} width="310" height="650" alt="Features bg" />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-8"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-8"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded-3xl" src={DashboardScreen} width="310" height="650" alt="Features bg" />
                    {/*<img className="d:max-w-none  rounded-2xl absolute left-0  transform" src={require('../images/dashboard-element-1.png').default} width="120" alt="Element" style={{ top: '34.5%', left: "90%" }} />*/}
                    {/*<img className="md:max-w-none rounded-2xl absolute left-0  transform" src={require('../images/dashboard-element-2.png').default} width="120" alt="Element" style={{ top: '34.5%', left: "48.5%" }} />*/}
                    {/*<img className="md:max-w-none rounded-2xl absolute left-0  transform" src={require('../images/dashboard-element-3.png').default} width="120" alt="Element" style={{ top: '34.5%', left: "06.5%" }} />*/}
                    {/*<img className="md:max-w-none rounded-2xl absolute left-0  transform" src={require('../images/dashboard-element-4.png').default} width="120" alt="Element" style={{ top: '34.5%', left: "-36%" }} />*/}

                    <img className="d:max-w-none  rounded-2xl absolute left-0  transform" src={DashboardElement1} width="120" alt="Element" style={{ top: '38.5%', left: "57%" }} />
                    <img className="md:max-w-none rounded-2xl absolute left-0  transform" src={DashboardElement3} width="120" alt="Element" style={{ top: '38.5%', left: "15%" }} />
                    <img className="md:max-w-none shadow-md rounded-2xl absolute left-0  transform" src={DashboardElement4} width="128" alt="Element" style={{ top: '36.9%', left: "-30.8%" }} />


                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-8"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-8"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded-3xl" src={TasksScreen} width="310" height="650" alt="Features bg" />
                    {/*<img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-element.png').default} width="500" height="44" alt="Element" style={{ top: '30%' }} />*/}
                  </div>
                </Transition>
                {/* Item 4 */}
                <Transition
                    show={tab === 4}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-8"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-8"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded-3xl  shadow-lg" src={UserScreen} width="310" height="650" alt="Features bg" />
                    {/* <img className="md:max-w-none absolute w-full h-auto left-0 transform animate-float shadow-lg" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '8%', left: '0%'}} /> */}

                  </div>
                </Transition>
                {/* Item 5 */}
                <Transition
                    show={tab === 5}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-8"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-8"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded-3xl  shadow-lg" src={ReportScreen} width="310" height="650" alt="Features bg" />
                  </div>
                </Transition>
                {/* Item 6 */}
                <Transition
                    show={tab === 6}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-8"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-8"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded-3xl  shadow-lg" src={CustomerScreen} width="310" height="650" alt="Features bg" />
                  </div>
                </Transition>
                {/* Item 7 */}
                <Transition
                    show={tab === 7}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-8"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-8"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded-3xl  shadow-lg" src={OrderScreen} width="310" height="650" alt="Features bg" />
                    <img className="md:max-w-none shadow-md rounded-2xl absolute left-0  transform" src={OrderElement} width="128" alt="Element" style={{ top: '28.0%', left: "-34.2%" }} />

                  </div>
                </Transition>
                {/* Item 8 */}
                <Transition
                    show={tab === 8}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-8"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-8"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded-3xl  shadow-lg" src={EventsScreen} width="310" height="650" alt="Features bg" />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}
export default Features;
