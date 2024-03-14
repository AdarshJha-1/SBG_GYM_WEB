import React from "react";
import sec1Img from "../assets/gym1.jpg";
import sec2Img from "../assets/gym2.jpeg";
import sec3Img from "../assets/gym3.jpg";
import Button from "../components/Button";
import MidImgShow from "../components/MidImgShow";
import Banner from "../components/Banner";
import PlanCard from "../components/PlanCard";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <main className="w-full h-screen">
      <section
        className="h-[40%] md:h-[50%] lg:h-[78%] w-full overflow-hidden bg-no-repeat bg-cover flex flex-col gap-5 sm:gap-20 justify-center items-center"
        style={{ backgroundImage: `url(${sec1Img})` }}
      >
        <div className="text-white text-center flex flex-col items-center justify-center gap-1">
          <h1 className="text-2xl font-semibold md:text-5xl tight font-serif">
            SwoleBodyGang
          </h1>
          <h1 className="text-xl md:text-4xl font-serif">
            Building Better Bodies, Stronger Minds
          </h1>
          <h1 className="text-lg md:text-3xl font-sans px-1 font-light text-center mt-3 text-gray-300">
            We're more than a gym <br /> we're a community dedicated to holistic
            health and wellness
          </h1>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button text="Join Now" />
          <Button text="Learn More" />
        </div>
      </section>
      <section className="w-full flex flex-col gap-12 items-center py-[70px]">
        <h1 className="text-4xl font-serif font-bold">Facilities</h1>
        <section className="flex flex-col items-center justify-center lg:flex-row">
          <div className="lg:w-1/2 h-full p-10">
            <img className="rounded-lg" src={sec3Img} />
          </div>
          <div className="lg:w-1/2 flex flex-col items-center justify-center gap-3 sm:gap-7">
            <h1 className="text-3xl font-bold">Modern Equipment</h1>
            <div className="text-center w-full flex flex-col items-center justify-center text-wrap gap-3 sm:gap-7">
              <p className="w-2/3 lg:w-1/2">
                Our gym is equipped with the latest fitness machines and
                equipment to cater to a variety of workout preferences. In
                addition to cutting-edge fitness machines, our gym prides itself
                on providing a comprehensive range of modern equipment designed
                to enhance your workout experience
              </p>
              <p className="w-2/3 lg:w-1/2">
                We understand that everyone has unique preferences when it comes
                to fitness, and that's why we've curated a diverse selection of
                exercise equipment to accommodate various workout styles and
                goals.
              </p>
            </div>
          </div>
        </section>
      </section>
      <MidImgShow />
      <section className="w-full flex flex-col gap-12 items-center py-[70px]">
        <h1 className="text-4xl font-serif font-bold">Our Mission</h1>
        <section className="flex flex-col items-center justify-center lg:flex-row ">
          <div className="lg:w-1/2 flex flex-col items-center justify-center gap-3 sm:gap-7">
            <h1 className="text-3xl font-bold">Inspire</h1>
            <div className="text-center w-full flex flex-col items-center justify-center text-wrap gap-3 sm:gap-7">
              <p className="w-4/5 sm:w-1/3">
                Our mission is to inspire and empower our members to lead
                healthier, happier lives through fitness. we are dedicated to
                providing top-notch facilities, expert guidance, and a sense of
                community that makes every workout enjoyable.
              </p>
            </div>
            <Button text="Learn More" />
          </div>
          <div className="lg:w-1/2 h-full p-10">
            <img className="rounded-lg" src={sec2Img} />
          </div>
        </section>
      </section>
      <Banner text="Join the Community" />
      <section className="w-full flex flex-col gap-12 items-center py-[50px]">
        <h1 className="text-3xl font-serif font-semibold">Membership Plans</h1>
        <p className="w-4/5 sm:w-1/3 text-center text-gray-600 px-1">
          We understand that fitness goals vary, and so do individual
          perferences. That's why we off a range of membership plans to cater to
          diverse needs. Choose the one that aligns perfectly with your
          lifestyle and fitness aspirations.
        </p>
        <div className="flex flex-wrap gap-6 lg:gap-16 xl:gap-44 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-10">
            <PlanCard
              plan="Basic"
              content={[
                "Full Access",
                "Participation in group",
                "Assessment and orientation",
                "Rooms and Shower facilities",
              ]}
            />
            <Button text="Join" />
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <PlanCard
              plan="Premium"
              content={[
                "All Features of Basic plan",
                "Discounts on personal training sessions",
                "Premium locker room and amenities",
                "Rooms and Shower facilities",
              ]}
            />
            <Button text="Join" />
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <PlanCard
              plan="Pro"
              content={[
                "All Features of Basic and Premium plan",
                "Personal Coach",
                "Personal diet plan and assessment",
                "Unlimited access to all classes",
              ]}
            />
            <Button text="Join" />
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default Home;
