import React from 'react';
import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Team.css";

const Team = () => {
    const members = [
      {
        name: "James William",
        designation: "Chief Executive Officer",
        img: "https://demo.xpeedstudio.com/evenex/wp-content/uploads/2020/02/image_2.jpg",
      },
      {
        name: "Evelyn Harper",
        designation: "Technical Consultant",
        img: "https://demo.xpeedstudio.com/evenex/wp-content/uploads/2020/02/image_1.jpg",
      },
      {
        name: "Jack Henry",
        designation: "Senior Project Manager",
        img: "https://demo.xpeedstudio.com/evenex/wp-content/uploads/2020/02/image_4.jpg",
      },
    ];
    return (
      <div className="lg:p-0 p-4 mt-20">
        <h1 className="text-[#F94945] text-3xl font-semibold text-center">
          #Expert Team
        </h1>
        <p className="lg:text-[42px] text-2xl font-extrabold text-center mt-5">
          Meet our expert team. We're adding more every Month.
        </p>
        <div className="grid lg:grid-cols-3 products-box card grid-cols-1 mx-10 my-8 gap-8 mt-16">
          {members.map((member, i) => (
            <div
              key={i}
              className="lg:mt-0 mt-5 box-shadow p-2 rounded-lg hover:-translate-y-1 duration-500"
            >
              <div className="p-2">
                <img
                  className="backdrop-opacity-10 image hover:scale-105 
                  duration-500"
                  src={member.img}
                  alt=""
                />
              </div>
              <div className="flex mt-8 items-center">
                <div className="w-7 h-1 bg-[#F94945] mr-8"></div>
                <h2 className="text-[#0D225D] lg:text-[35px] text-3xl font-bold">
                  {member.name}
                </h2>
              </div>
              <div>
                <p className="text-[#6B6B6B] lg:text-[26px] mt-2 text-2xl ml-[68px]">
                  {member.designation}
                </p>
              </div>
              <div
                className="flex items-center justify-center my-8 cursor-pointer gap-8
                text-center"
              >
                <FaFacebookSquare
                  className="hover:text-[#F94945] text-3xl hover:scale-105 
                  duration-500 hover:-translate-y-2"
                />
                <FaTwitter
                  className=" text-3xl hover:text-[#F94945] hover:scale-105 
                  duration-500 hover:-translate-y-2"
                />
                <FaLinkedinIn
                  className="hover:text-[#F94945] text-3xl hover:scale-105
                   hover:-translate-y-2 duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Team;