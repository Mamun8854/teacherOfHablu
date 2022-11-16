import React from "react";
import toast from "react-hot-toast";

const AddService = () => {
  const date = Date.now();

  // Add Services

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const photoURL = form.photoURL.value;
    const details = form.details.value;
    const data = {
      price: price,
      picture: photoURL,
      name: name,
      about: details,
      date: date,
    };

    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service Added Successfully");
          console.log(data);
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
      <div className=" p-6 dark:bg-gray-300  px-4 py-20  ">
        <section className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 ">
          <form
            onSubmit={handleForm}
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="grid grid-cols-4 gap-6 p-6 rounded-md ">
              <div className="grid grid-cols-6 gap-4 col-span-full justify-center lg:col-span-6">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm font-medium">Service Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter Service Name"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 py-2 px-2 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm font-medium">Service price</label>
                  <input
                    type="number"
                    placeholder="Price"
                    required
                    name="price"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 py-2 px-2 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-6">
                  <label className="text-sm font-medium">Photo URL</label>
                  <input
                    type="url"
                    name="photoURL"
                    required
                    placeholder="Enter Photo URL"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 py-2 px-2 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>

                <div className="col-span-full">
                  <label className="text-sm font-medium">Service Details</label>
                  <textarea
                    name="details"
                    required
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 h-20 py-2 px-3 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  ></textarea>
                </div>
                <div className="col-span-full text-center">
                  <button className="btn btn-outline" type="submit">
                    Add service
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddService;
