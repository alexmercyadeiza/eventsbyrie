"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    getMenu();
  }, []);

  const [menu, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [category, setCategory] = useState("Sides");

  const getMenu = async () => {
    const res = await axios.get(
      "https://api.airtable.com/v0/appWPK80E0Z1bnAJd/Table%201?view=Grid%20view",
      {
        headers: {
          Authorization:
            "Bearer patVhuINY9Ox6WgBh.211df2ee5f2dc13773b01222e60792e33ec83c921064754117aaf1fb8128ed0d",
        },
      }
    );

    setMenu(res.data.records);
    selectMenu("Sides", res.data.records);
  };

  const selectMenu = (category = "Sides", menu = menu) => {
    const data = menu.filter((item) => item.fields.Category === category);
    setCategory(category);
    setSelectedMenu(data);
  };

  return (
    <div className="min-h-full space-y-24 bg-lorange pb-20">
      <div
        className="grid place-items-center rounded-b-3xl bg-gray-200 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/bgimg.png')`,
        }}
      >
        <div className="grid place-items-center space-y-20 py-20">
          <div>
            <img
              src="https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/rielogo.svg"
              className="w-14"
              alt=""
            />
          </div>

          <div className="text-center md:text-7xl text-5xl font-bold leading-tight text-white">
            Catering <span className="bg-dorange px-4">reimagined:</span> <br />
            where food becomes <br />
            <span className="bg-dorange px-4">art</span>
          </div>

          <a
            href="mailto:eventsbyrie@gmail.com"
            className="rounded-full bg-dorange px-10 py-5 text-lg font-semibold text-white"
          >
            Get a quote
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 text-center md:text-left gap-14 md:px-20 px-8">
        <div className="space-y-6">
          <div className="font-semibold capitalize text-morange">
            <span className="text-xs text-dorange">&diams;</span> About us{" "}
            <span className="text-xs text-dorange">&diams;</span>
          </div>
          <div className="md:text-5xl text-3xl font-bold text-dorange">
            Exquisite Catering for Every Occasion
          </div>
          <div>
            Rie Events & Co is dedicated to crafting unforgettable culinary
            experiences that weave together the Nigerian touch into a variety of
            other cuisines to create the perfect fusion. We pride ourselves in
            the use of fresh, locally sourced ingredients to curate exquisite
            dishes that tantalise the taste buds leave a lasting impression on
            our patrons.
          </div>
        </div>

        <div className="grid md:place-items-end place-items-center">
          <img
            src="https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/foodimg2.png"
            className="w-[80%]"
            alt=""
          />
        </div>
      </div>

      <div className="grid place-items-center space-y-8 px-8">
        <div className="space-y-2">
          <div className="text-center font-semibold capitalize text-morange">
            <span className="text-xs text-dorange">&diams;</span> what we do{" "}
            <span className="text-xs text-dorange">&diams;</span>
          </div>
          <div className="md:text-5xl text-3xl font-bold capitalize text-dorange">
            Events we cater
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          We provide catering for all events. Full-service catering with drinks,
          canapes, luxury appetizers, waiting staff, and rental materials.
          Plenty of vegetarian and vegan options!
        </div>

        <div className="md:w-2/3 w-full">
          <div className="grid md:grid-cols-2 gap-10 w-full">
            <div
              className="grid md:h-96 h-56 md:w-auto place-items-center rounded-xl bg-black bg-opacity-50 bg-center bg-blend-overlay"
              style={{
                backgroundImage: `url('https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/corporate.jpg')`,
              }}
            >
              <div className="text-2xl font-semibold text-white">Corporate</div>
            </div>

            <div
              className="grid md:h-96 h-56 md:w-auto place-items-center rounded-xl bg-black bg-opacity-50 bg-center bg-blend-overlay"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/169191/pexels-photo-169191.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
              }}
            >
              <div className="text-2xl font-semibold text-white">Weddings</div>
            </div>

            <div
              className="grid md:h-96 h-56 md:w-auto place-items-center rounded-xl bg-black bg-opacity-50 bg-center bg-blend-overlay"
              style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2018/01/02/20/46/celebration-3057027_1280.jpg')`,
              }}
            >
              <div className="text-2xl font-semibold text-white">
                Social Events
              </div>
            </div>

            <div
              className="grid md:h-96 h-56 md:w-auto place-items-center rounded-xl bg-black bg-opacity-50 bg-center bg-blend-overlay"
              style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2023/11/11/20/13/whisky-8381815_1280.jpg')`,
              }}
            >
              <div className="text-2xl font-semibold text-white">Parties</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid place-items-center space-y-8 px-8">
        <div className="space-y-2">
          <div className="text-center font-semibold capitalize text-morange">
            <span className="text-xs text-dorange">&diams;</span> why RIE{" "}
            <span className="text-xs text-dorange">&diams;</span>
          </div>
          <div className="md:text-5xl text-3xl font-bold text-center md:text-left capitalize text-dorange">
            Satisfaction Guaranteed
          </div>
        </div>

        <div className="w-2/3">
          <div className="grid md:grid-cols-3 place-items-center gap-10">
            <div className="grid place-items-center space-y-3 text-center">
              <img
                className="w-[25%]"
                src="https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/coverplate.svg"
                alt=""
              />
              <div className="font-semibold text-dorange">Delicious Food</div>
              <div>
                These are the kind of meals that makes you close your eyes and
                savor every moment.
              </div>
            </div>

            <div className="grid place-items-center space-y-3 text-center">
              <img
                className="w-[25%]"
                src="https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/veggies.svg"
                alt=""
              />
              <div className="font-semibold text-dorange">
                Locally Sourced Ingredients
              </div>
              <div>
                Savor the freshness of our farm-to-table cuisine, featuring
                ingredients from nearby farms.
              </div>
            </div>

            <div className="grid place-items-center space-y-3 text-center">
              <img
                className="w-[17%]"
                src="https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/badge.svg"
                alt=""
              />
              <div className="font-semibold text-dorange">
                High Quality Services
              </div>
              <div>
                Our experienced team will work closely with you to plan every
                detail of your event, from menu selection to event logistics.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid place-items-center space-y-8">
        <div className="space-y-2">
          <div className="text-center font-semibold capitalize text-morange">
            <span className="text-xs text-dorange">&diams;</span> Explore Our
            Menu <span className="text-xs text-dorange">&diams;</span>
          </div>
          <div className="text-center md:text-5xl text-3xl font-bold capitalize text-dorange">
            Menu
          </div>
        </div>

        <div className="w-full md:px-20">
          <div className="grid grid-cols-6 place-items-center gap-2 md:gap-0 rounded-t-3xl bg-morange overflow-hidden">
            <div
              onClick={() => selectMenu("Sides", menu)}
              className={`${
                category === "Sides" ? "bg-dorange" : ""
              } grid cursor-pointer place-items-center space-y-3 md:px-8 mx-2 px-2 py-8 h-full text-center`}
            >
              <img
                className="w-[60%]"
                src={`https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/${
                  category === `Sides` ? `sides-white` : `sides`
                }.svg`}
                alt=""
              />
              <div className="text-xs md:text-lg font-semibold uppercase text-white">
                Sides
              </div>
            </div>

            <div
              onClick={() => selectMenu("Brunch", menu)}
              className={`${
                category === "Brunch" ? "bg-dorange" : ""
              } grid cursor-pointer place-items-center space-y-3 md:px-8 px-2 mx-2 py-8 h-full text-center`}
            >
              <img
                className="w-[60%]"
                src={`https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/${
                  category === `Brunch` ? `brunch-white` : `brunch`
                }.svg`}
                alt=""
              />
              <div className="text-xs md:text-lg font-semibold uppercase text-white">
                brunch
              </div>
            </div>

            <div
              onClick={() => selectMenu("Pasta", menu)}
              className={`${
                category === "Pasta" ? "bg-dorange" : ""
              } grid cursor-pointer place-items-center space-y-3 md:px-8 mx-2 px-2 py-8 h-full text-center`}
            >
              <img
                className="w-[80%]"
                src={`https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/${
                  category === `Pasta` ? `pasta-white` : `pasta`
                }.svg`}
                alt=""
              />
              <div className="text-xs md:text-lg font-semibold uppercase text-white">
                pasta
              </div>
            </div>

            <div
              onClick={() => selectMenu("Seafood", menu)}
              className={`${
                category === "Seafood" ? "bg-dorange" : ""
              } grid cursor-pointer place-items-center space-y-3 md:px-8 mx-2 px-2 py-8 h-full text-center`}
            >
              <img
                className="w-[50%]"
                src={`https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/${
                  category === `Seafood` ? `seafood-white` : `seafood`
                }.svg`}
                alt=""
              />
              <div className="text-xs md:text-lg font-semibold uppercase text-white">
                seafood
              </div>
            </div>

            <div
              onClick={() => selectMenu("Meat", menu)}
              className={`${
                category === "Meat" ? "bg-dorange" : ""
              } grid cursor-pointer place-items-center space-y-3 md:px-8 px-2 mx-2 py-8 h-full text-center`}
            >
              <img
                className="w-[100%]"
                src={`https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/${
                  category === `Meat` ? `meat-white` : `meat`
                }.svg`}
                alt=""
              />
              <div className="text-xs md:text-lg font-semibold uppercase text-white">
                meat
              </div>
            </div>

            <div
              onClick={() => selectMenu("Desserts", menu)}
              className={`${
                category === "Desserts" ? "bg-dorange" : ""
              } grid cursor-pointer place-items-center space-y-3 md:px-8 px-2 mx-2 py-8 h-full text-center`}
            >
              <img
                className="w-[50%]"
                src={`https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/${
                  category === `Desserts` ? `desserts-white` : `desserts`
                }.svg`}
                alt=""
              />
              <div className="text-xs md:text-lg font-semibold uppercase  text-white">
                desserts
              </div>
            </div>
          </div>

          <div className="bg-white md:px-10 px-8 md:pb-10 pb-5">
            {selectedMenu.map((sm) => (
              <div key={sm?.id} className="border-b md:pb-8 pb-4 md:pt-8 pt-4">
                <div className="font-semibold text-dorange">
                  {sm?.fields?.Item}
                </div>
                <div className="text-morange"> {sm?.fields?.Includes}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid place-items-center space-y-8 px-8">
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <div className="font-semibold capitalize text-morange">
              <span className="text-xs text-dorange">&diams;</span> get in touch{" "}
              <span className="text-xs text-dorange">&diams;</span>
            </div>
            <div className="text-5xl font-bold capitalize text-dorange">
              Contact us
            </div>
            <div>
              Need a quote or have a question? We&apos;re here to help! Drop us
              an email or chat with us on WhatsApp.
            </div>
          </div>

          <a
            href="mailto:eventsbyrie@gmail.com"
            className="inline-flex space-x-3 rounded-full border-2 border-dorange p-2 px-6 text-xl font-semibold text-dorange"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
            </svg>
            <div>Send us an email</div>
          </a>

          <br />

          <a
            href="https://wa.me/2347077514857"
            className="inline-flex space-x-3 rounded-full border-2 border-dorange p-2 px-6 md:text-xl font-semibold text-dorange"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
            </svg>
            <div>Chat with us on WhatsApp</div>
          </a>
        </div>
      </div>

      <div className="grid place-items-center">
        <img
          src="https://awstestbucket-pk.s3.eu-west-1.amazonaws.com/rie/rielogo2.svg"
          className="w-14"
          alt=""
        />
      </div>

      <div className="text-center text-sm">
        Copyright &copy; <span className="text-dorange">RIE</span> 2024. All
        rights reserved.
      </div>
    </div>
  );
}
