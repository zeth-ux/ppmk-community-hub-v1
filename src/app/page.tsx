export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Welcome to PPMK Community Hub
          </h1>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                About This Project
              </h2>
              <p className="text-gray-600">
                PPMK Community Hub is a self-hosted web application designed for the
                Malaysian student community at Hanyang University ERICA. It replaces
                repetitive Google Forms with a reusable member database and event
                management system.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Key Features
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Student registration & profiles</li>
                <li>Event creation & management</li>
                <li>Targeted invitations & RSVPs</li>
                <li>Calendar view of events</li>
                <li>Club directory</li>
                <li>External events board</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/register"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started - Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}