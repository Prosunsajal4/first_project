export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
          ProsunMart
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 animate-pulse">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-300 rounded mx-auto w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mx-auto w-1/2"></div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-16"></div>
              <div className="h-10 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-20"></div>
              <div className="h-10 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 bg-gray-300 rounded mr-2"></div>
              <div className="h-4 bg-gray-300 rounded w-32"></div>
            </div>
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="text-center">
              <div className="h-4 bg-gray-300 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
