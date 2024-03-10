import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mx-56">
      {/* Banner Image */}
      <div className="w-full flex justify-center mt-20">
        <Image
          src="https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg"
          width={100}
          height={100}
          alt="blog-banner"
          className="w-full h-[35vw] object-cover rounded-lg"
          unoptimized
        />
      </div>
      <div className="mt-10">
        <h2 className="text-5xl font-bold underline">One of the Best Event Int The World</h2>
        {/* Date, Categories, Likes and Comments */}
        <div className="flex flex-wrap md:text-base text-sm items-center gap-5 my-5">
              {/* Date of posted */}
              <div>
                <p className="text-zinc-500 font-medium">
                  August 19, 2022
                </p>
              </div>
              {/* Categories */}
              <div>
                <ul className="flex gap-2">
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Lifestyle
                  </li>
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Pets & animals
                  </li>
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Fun & Entertainment
                  </li>
                </ul>
              </div>
              {/* Likes */}
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
                  />
                </svg>
                <p>1</p>
                <p>Likes</p>
              </div>
              {/* Comments */}
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1"
                    d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>1</p>
                <p>Comments</p>
              </div>
            </div>
            {/* Blog Content */}
            <p className="text-lg mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu. In aliquam sem fringilla ut morbi. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. At augue eget arcu dictum varius duis at consectetur. Purus in mollis nunc sed id. Ornare arcu odio ut sem nulla pharetra diam sit amet. Sit amet consectetur adipiscing elit pellentesque. Consequat semper viverra nam libero. Tristique nulla aliquet enim tortor at auctor. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Sit amet porttitor eget dolor morbi non arcu. Enim lobortis scelerisque fermentum dui faucibus in. In mollis nunc sed id semper risus.

Id faucibus nisl tincidunt eget nullam non nisi. Elementum nibh tellus molestie nunc non blandit massa. Nisi scelerisque eu ultrices vitae auctor eu augue. Cras sed felis eget velit aliquet sagittis id. Dictum fusce ut placerat orci nulla pellentesque dignissim. Quis varius quam quisque id diam vel. Ac odio tempor orci dapibus. Aenean et tortor at risus viverra. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Amet purus gravida quis blandit turpis. Libero justo laoreet sit amet cursus sit amet dictum sit. Diam sollicitudin tempor id eu nisl nunc mi. Commodo nulla facilisi nullam vehicula ipsum. Nunc id cursus metus aliquam eleifend mi. A iaculis at erat pellentesque adipiscing.

Mattis vulputate enim nulla aliquet porttitor. Massa sed elementum tempus egestas sed. Aliquam ut porttitor leo a diam sollicitudin tempor id. Ac orci phasellus egestas tellus rutrum tellus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Tristique senectus et netus et malesuada fames. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Auctor neque vitae tempus quam. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Sit amet risus nullam eget felis eget nunc lobortis. Et magnis dis parturient montes nascetur ridiculus. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Gravida cum sociis natoque penatibus et magnis. Nunc faucibus a pellentesque sit amet porttitor eget.

Urna duis convallis convallis tellus id interdum velit. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Vel orci porta non pulvinar neque laoreet suspendisse. Gravida neque convallis a cras semper auctor. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Sed risus ultricies tristique nulla aliquet enim. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Dolor sit amet consectetur adipiscing elit pellentesque. Et netus et malesuada fames ac turpis egestas. Enim eu turpis egestas pretium. Ornare massa eget egestas purus. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Aliquam eleifend mi in nulla posuere.

Vel risus commodo viverra maecenas accumsan. Augue interdum velit euismod in pellentesque. Enim nunc faucibus a pellentesque sit amet porttitor. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Pretium fusce id velit ut tortor. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Faucibus pulvinar elementum integer enim neque volutpat. Non odio euismod lacinia at quis risus sed. Neque sodales ut etiam sit amet nisl purus in mollis. Aliquet risus feugiat in ante metus.</p>
      </div>
    </div>
  );
};

export default page;
