export default function Page() {

  return (<div className="flex items-center justify-center h-1/2">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800">Coming Soon!</h1>
      <p className="text-gray-600">We're working hard to finish the development of this site. Our
        target launch date is
        <strong className="text-gray-800"> January 2022</strong>! Sign up for updates using the
        form below!</p>
      <form className="mt-4">
        <div className="max-w-sm mx-auto">
          <input type="text" placeholder="Enter your email"
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"/>
          <button type="submit"
                  className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Notify
            Me
          </button>
        </div>
      </form>
    </div>
  </div>);
}
