export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Events Management
          </h1>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Coming Soon!
            </h2>
            <p className="text-gray-600">
              Event creation, invitations, and RSVP features will be implemented in
              the next development phase.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="inline-block px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Return to Home
              </a>
              <a
                href="/register"
                className="ml-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Register Student
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}