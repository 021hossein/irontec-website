import React from 'react';

import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function Newsletter() {
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${name}`)
    const response = await fetch(`http://localhost:8000/api/subscriber/renew?number=${name}`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({"mobile_number": "name" }),
    });

    console.log(response.json());
    // fetch("https://iron-hussein-safdari.fandogh.cloud/api/subscriber/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    //   body: JSON.stringify({ "mobile_number": name })
    // })
    //     .then((response) => {
    //       if (response.status !== 201) {
    //         throw new Error(response.statusText);
    //       }
    //
    //       return response.json();
    //     })
    //     .then(() => {
    //       // setMessage("We'll be in touch soon.");
    //       alert("success");
    //     })
    //     .catch((err) => {
    //       alert(err.toString());
    //       // setStatus("error");
    //     });
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute left-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="65.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="315" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="390" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="390" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="62" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="360" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="378" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="240" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="136" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-right lg:max-w-xl">
                <h3 id="5" className="text-2xl sm:text-3xl font-bold text-white mb-2">۳ ماه خدمات رایگان</h3>
                <p className="text-gray-300 text-l sm:text-lg mb-6">متخصصان ما، در پیاده‌سازی امن و بی‌دغدغه همراه و راهنمای شما خواهند بود.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="phone" className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:ml-2 text-white placeholder-gray-500"
                           placeholder="شماره موبایل خود را وارد کنید"
                           aria-label="آدرس ایمیل خود را وارد کنید"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                    <input className="lg:w-2/3 md:w-2/3 w-full btn-sm text-white bg-blue-600 hover:bg-blue-700 shadow"  type="submit" value="ثبت درخواست مشاوره"/>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p>*/}
                  <p className="text-sm text-gray-400 mt-3">همکاران ما در واحد فروش با شما تماس می‌گیرند.</p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
