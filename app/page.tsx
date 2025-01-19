export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Next.js App</h1>
                <p className="text-gray-600 mb-6">
                    Explore the features of this app, including fetching and displaying posts from an external API.
                </p>
                <a
                    href="/fetch-posts"
                    className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    View Posts
                </a>
            </div>
        </div>
    );
}
