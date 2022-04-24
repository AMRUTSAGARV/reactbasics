import React from "react";

const ContactList = () => {
  return (
    <div>
      <div id="app" className="bg-red-200">
        <div className="container mx-auto">
          <div className="py-20">
            <div className="flex items-center px-5 py-2">
              <span className="w-1/6 text-center">
                {/* <input type="checkbox" onChange="toggleSelect" /> */}
              </span>
              <span className="w-1/2">
                <span className="text-xs uppercase text-gray-600 text-xl font-bold">
                  INSTITUTION
                </span>
              </span>
              <span className="w-1/4">
                <span className="text-xs uppercase text-gray-600 text-xl font-bold">
                  LOCATION
                </span>
              </span>
              {/* <span className="w-1/4">
                <span className="text-xs uppercase text-gray-600 font-bold">
                  City
                </span>
              </span>
              <span className="w-1/4">
                <span className="text-xs uppercase text-gray-600 font-bold">
                  Phone
                </span>
              </span>
              <span className="w-1/4">
                <span className="text-xs uppercase text-gray-600 font-bold">
                  Created At
                </span>
              </span> */}
            </div>

            <div
              v-for="(contact, key) in contacts"
              key="key"
              className="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg"
            >
              <div className="w-1/6 text-center">
                <input type="checkbox" v-model="contact.selected" />
              </div>
              <div className="w-1/2">
                <div className="flex items-center">
                  {/* <img src="contact.picture.thumbnail" className="rounded-full" /> */}
                  <div className="ml-4">
                    {/* <span className="capitalize block text-gray-800">{{ contact.name.first }}</span> */}
                    <span className="capitalize block text-gray-800">name</span>
                    {/* <span className="text-sm block text-gray-600">mail</span> */}
                    {/* <span className="text-sm block text-gray-600">{{ contact.email }}</span> */}
                  </div>
                </div>
              </div>
              <div className="w-1/4">
                <span className="capitalize text-gray-600 ">phone</span>
                {/* <span className="capitalize text-gray-600 text-sm">{{ contact.gender }}</span> */}
              </div>
              {/* <div className="w-1/4"> */}
              {/* <span className="capitalize text-gray-600 text-sm">contact</span> */}
              {/* <span className="capitalize text-gray-600 text-sm">{{ contact.location.city }}</span> */}
              {/* </div> */}
              {/* <div className="w-1/4"> */}
              {/* <span className="text-gray-600 text-sm">gender</span> */}
              {/* <span className="text-gray-600 text-sm">{{ contact.phone }}</span> */}
              {/* </div> */}
              {/* <div className="w-1/4"> */}
              {/* <span className="text-gray-600 text-sm">data</span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
