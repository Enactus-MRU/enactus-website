import Image from "next/image";
import { ArrowRight, CheckCircle, Globe, Rocket, Shield, Zap } from "lucide-react"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-14 items-center px-4">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Globe className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">EnactusMRU</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#home" className="transition-colors hover:text-gray-900 text-gray-900">
                Home
              </Link>
              <Link href="#aboutus" className="transition-colors hover:text-gray-900 text-gray-600">
                About Us
              </Link>
              <Link href="#projects" className="transition-colors hover:text-gray-900 text-gray-600">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-gray-900 text-gray-600">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
                <Globe className="h-6 w-6" />
                <span className="font-bold">EnactusMRU</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to 
                  <span className="text-blue-500"> Enactus MRU</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Empowering Change, One Enterprise at a Time.
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 hover:bg-gray-50 rounded-md transition-colors">
                  Contact Us
                </button>
              </div>
              <div className="w-full max-w-3xl mt-12">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Image"
                    width={800}
                    height={400}
                    className="rounded-lg border shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="aboutus" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                    We are a community of driven and passionate individuals united by a common goal: to create positive social change through entrepreneurial action. We are innovators, leaders, and changemakers who believe that business can be a force for good. We develop and implement sustainable projects that address pressing social and environmental issues, empowering individuals and communities to thrive. We are Enactus MRU, dedicated to making a lasting impact and creating a brighter future for all.
                  </p>
                </div>
              </div>
              <Image
                src=""
                alt="About Us Image"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full shadow-2xl"
              />
            </div>

            {/* Team Members Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">Meet Our Team</h3>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  The brilliant minds behind TechFlow, working together to build the future of productivity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Team Member 1 */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Gurjodh"
                      width={80}
                      height={80}
                      className="rounded-full mx-auto border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      President
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Gurj Dhaliwal</h4>
                    <p className="text-sm text-gray-500 mb-2">President</p>
                    <p className="text-xs text-gray-400 italic">Lorem ipsum, dolor sit amet.</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Sara Sail"
                      width={80}
                      height={80}
                      className="rounded-full mx-auto border-4 border-green-100 group-hover:border-green-200 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                      VP
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Sara Sail</h4>
                    <p className="text-sm text-gray-500 mb-2">Vice President</p>
                    <p className="text-xs text-gray-400 italic">Lorem ipsum, dolor sit amet.</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Jade Andersen"
                      width={80}
                      height={80}
                      className="rounded-full mx-auto border-4 border-purple-100 group-hover:border-purple-200 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                      EA
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Jade Andersen</h4>
                    <p className="text-sm text-gray-500 mb-2">Executive Assistant</p>
                    <p className="text-xs text-gray-400 italic">Lorem ipsum, dolor sit amet.</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-2xl">🎨</span>
                  </div>
                </div>

                {/* Team Member 4 */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Bailey Nixon"
                      width={80}
                      height={80}
                      className="rounded-full mx-auto border-4 border-orange-100 group-hover:border-orange-200 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                      Marketing
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Bailey Nixon</h4>
                    <p className="text-sm text-gray-500 mb-2">Marketing Manager</p>
                    <p className="text-xs text-gray-400 italic">Lorem ipsum, dolor sit amet.</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-2xl">💻</span>
                  </div>
                </div>

                {/* Team Member 5 */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Autri Dev"
                      width={80}
                      height={80}
                      className="rounded-full mx-auto border-4 border-pink-100 group-hover:border-pink-200 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                      Finance
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Autri Dev</h4>
                    <p className="text-sm text-gray-500 mb-2">Finance Manager</p>
                    <p className="text-xs text-gray-400 italic">Lorem ipsum, dolor sit amet.</p>

                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-2xl">📈</span>
                  </div>
                </div>

                {/* Team Member 6 */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Archie Choudary"
                      width={80}
                      height={80}
                      className="rounded-full mx-auto border-4 border-indigo-100 group-hover:border-indigo-200 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                      SIO
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Archie Choudary</h4>
                    <p className="text-sm text-gray-500 mb-2">Social Impact Officer</p>
                    <p className="text-xs text-gray-400 italic">Lorem ipsum, dolor sit amet.</p>  
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>

                {/* Team Member 7 */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Jelani Goldson"
                      width={80}
                      height={80}
                      className="rounded-full mx-auto border-4 border-teal-100 group-hover:border-teal-200 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-teal-600 text-white text-xs px-2 py-1 rounded-full">
                      Lead
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Jelani Goldson</h4>
                    <p className="text-sm text-gray-500 mb-2">Student Leader</p>
                    <p className="text-xs text-gray-400 italic">Lorem ipsum, dolor sit amet.</p> 
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-2xl">📊</span>
                  </div>
                </div>

                {/* Team Member 8 */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Aksdeep Randhawa"
                      width={80}
                      height={80}
                      className="rounded-full mx-auto border-4 border-red-100 group-hover:border-red-200 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                      Lead
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Aksdeep Randhawa</h4>
                    <p className="text-sm text-gray-500 mb-2">Student Leader</p>
                    <p className="text-xs text-gray-400 italic">Lorem ipsum, dolor sit amet.</p> 
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-2xl">🤝</span>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  We develop projects that create positive change.                
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {/* Project Card 1 */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <Zap className="h-10 w-10 text-blue-600" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Project 1</h3>
                    <p className="text-gray-500">
                      ---
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Point 1
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Point 2
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Point 3
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <Shield className="h-10 w-10 text-blue-600" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Project 2</h3>
                    <p className="text-gray-500">
                      ---
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Point 1
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Point 2
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Point 3
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <Rocket className="h-10 w-10 text-blue-600" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Project 3</h3>
                    <p className="text-gray-500">
                      ---
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Point 1
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Point 2
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Point 3
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Globe className="h-6 w-6" />
            <span className="font-bold">EnactusMRU</span>
          </div>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <p className="text-xs text-gray-500 sm:ml-auto">© 2025 EnactusMRU. All rights reserved.</p>
          </nav>
        </div>
      </footer>
    </div>
  );
}
