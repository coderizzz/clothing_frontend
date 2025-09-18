import React from "react";
import happyCoupleImg from '../assets/happy-beautiful-couple-posing-with-shopping-bags-violet-removebg-preview.png';
const About= () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          About <span className="text-yellow-500">Jalwa Trading</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Where fashion meets comfort, quality, and affordability.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center text-left">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold text-gray-900">Jalwa Trading Private Limited</span>, we
              believe fashion is more than just clothing – it’s a way to express
              confidence and personality. Our journey began with a simple vision:
              to provide quality garments at affordable prices, making stylish
              clothing accessible to everyone.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With our online store{" "}
              <a
                href="https://jalwatrading.store"
                className="text-yellow-600 font-medium hover:underline"
              >
                jalwatrading.store
              </a>
              , we bring you a curated collection of apparel that combines comfort,
              durability, and trendsetting designs. From everyday essentials to
              fashionable statement pieces, our products are crafted to fit
              seamlessly into your lifestyle.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Customer satisfaction is at the heart of everything we do. We are
              committed to offering reliable service, transparent policies, and a
              smooth shopping experience that you can trust.
            </p>

            <p className="text-gray-700 leading-relaxed font-medium">
              At Jalwa Trading, our goal is simple – to make you look good and feel
              great.
            </p>
          </div>

          {/* Right - Decorative Image / Illustration */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={happyCoupleImg}
                alt="Fashion clothing rack"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-100 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
