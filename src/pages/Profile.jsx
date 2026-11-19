const Profile = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-4xl font-bold">
              V
            </div>

            <h1 className="text-3xl font-medium text-gray-900 mt-5">
              Karim Chebbi
            </h1>

            <p className="text-gray-500">EV Enthusiast</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-5">
              <h2 className="text-sm text-gray-500">Email</h2>

              <p className="text-gray-900 mt-1">karim@email.com</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <h2 className="text-sm text-gray-500">Phone</h2>

              <p className="text-gray-900 mt-1">+216 XX XXX XXX</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <h2 className="text-sm text-gray-500">Account Type</h2>

              <p className="text-indigo-500 mt-1 font-medium">Buyer</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <h2 className="text-sm text-gray-500">Member Since</h2>

              <p className="text-gray-900 mt-1">August 2026</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button className="text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-6 rounded">
              Edit Profile
            </button>

            <button className="text-gray-700 bg-gray-100 hover:bg-gray-200 py-2 px-6 rounded">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
