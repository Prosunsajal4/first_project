export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex animate-pulse">
            {/* Product Image Skeleton */}
            <div className="md:w-1/2">
              <div className="h-96 md:h-full bg-gray-300"></div>
            </div>

            {/* Product Details Skeleton */}
            <div className="md:w-1/2 p-8">
              <div className="mb-4">
                <div className="h-8 bg-gray-300 rounded mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
              </div>

              <div className="mb-6">
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-1"></div>
                <div className="h-4 bg-gray-300 rounded mb-1"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="h-4 bg-gray-300 rounded mb-1"></div>
                  <div className="h-5 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-gray-300 rounded mb-1"></div>
                  <div className="h-5 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-gray-300 rounded mb-1"></div>
                  <div className="h-5 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-gray-300 rounded mb-1"></div>
                  <div className="h-5 bg-gray-300 rounded"></div>
                </div>
              </div>

              <div className="mb-6">
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-gray-300 rounded w-16"></div>
                  <div className="h-6 bg-gray-300 rounded w-20"></div>
                  <div className="h-6 bg-gray-300 rounded w-14"></div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 h-12 bg-gray-300 rounded"></div>
                <div className="flex-1 h-12 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-500">ProsunMart</p>
        </div>
      </div>
    </div>
  );
}
