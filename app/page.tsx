import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Your Name</h1>
          <p className="text-xl mt-2">Full Stack Developer | Designer</p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-4 text-lg">
            I am a passionate software developer with expertise in web development, designing
            and building scalable, responsive applications. I enjoy working with JavaScript, React,
            and Next.js.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-200 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Image src="/react-logo.png" alt="React" width={40} height={40} />
              <span className="mt-2">React</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/nextjs-logo.png" alt="Next.js" width={40} height={40} />
              <span className="mt-2">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/tailwindcss-logo.png" alt="Tailwind CSS" width={40} height={40} />
              <span className="mt-2">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/nodejs-logo.png" alt="Node.js" width={40} height={40} />
              <span className="mt-2">Node.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="mt-4 text-gray-600">Description of the project and what it does.</p>
              <a href="#" className="text-blue-600 mt-4 inline-block">View Project</a>
            </div>
            {/* Project 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="mt-4 text-gray-600">Description of the project and what it does.</p>
              <a href="#" className="text-blue-600 mt-4 inline-block">View Project</a>
            </div>
            {/* Project 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Project 3</h3>
              <p className="mt-4 text-gray-600">Description of the project and what it does.</p>
              <a href="#" className="text-blue-600 mt-4 inline-block">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Contact Me</h2>
          <p className="mt-4 text-lg">Feel free to reach out for collaborations or questions!</p>
          <div className="mt-6">
            <a href="mailto:your-email@example.com" className="bg-blue-600 px-6 py-2 rounded-lg text-white">Email Me</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
