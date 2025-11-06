export default function Home() {
  return (
    <div className="bg-gray-50">
      <section className="text-center py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-4xl font-bold text-blue-800">
          The truth is rarely pure and never simple.
        </h1>
        <p className="mt-4 text-gray-600">
          Inspiring excellence through education and innovation.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Students Blog</h2>
          <p>Share your thoughts and ideas with the Whales College community.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Ranking System</h2>
          <p>Encouraging excellence through a comprehensive ranking system.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Aptitude Test</h2>
          <p>Get ready for your dream college or university admission.</p>
        </div>
      </section>
    </div>
  );
}
