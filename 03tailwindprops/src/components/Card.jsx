import React from "react";

function Card({
  username = "Bajrangi",
  address = "RamDarbar",
  url = "https://i.pinimg.com/236x/3e/14/3a/3e143a28ddd15e0516736def78a489d5.jpg",
}) {
  //   console.log(props);
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 m dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={url}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus, voluptatem.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">{address}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
