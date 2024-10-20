'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, FileText, Lightbulb, Code, FileCode2, Moon, Sun, Linkedin, Github, Mail, Package, CheckCircle2, PenTool, BookCheck, Sparkles, Search, FileCheck, Home, Clock, Twitter } from "lucide-react"

export function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [typedText, setTypedText] = useState('')
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const packagesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const text = "WriteStack"
    const typeText = () => {
      let i = 0
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          setTypedText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(typingEffect)
          setTimeout(() => {
            setTypedText('')
            typeText()
          }, 3000) // Wait 3 seconds before restarting
        }
      }, 150)
    }
    typeText()
    return () => clearTimeout()
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { id: "about", icon: Home, label: "About", ref: aboutRef },
    { id: "services", icon: FileText, label: "Services", ref: servicesRef },
    { id: "packages", icon: Package, label: "Packages", ref: packagesRef },
    { id: "contact", icon: Mail, label: "Contact", ref: contactRef },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  <rect x="10" y="10" width="80" height="80" rx="10" fill="url(#logoGradient)" />
                  <rect x="20" y="60" width="60" height="20" fill="white" />
                  <rect x="20" y="40" width="60" height="15" fill="white" opacity="0.7" />
                  <rect x="20" y="20" width="60" height="15" fill="white" opacity="0.4" />
                  <path d="M35 75 L50 65 L65 75" fill="url(#logoGradient)" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-gray-200">WriteStack</span>
            </div>
            <div className="hidden md:flex space-x-4 ml-auto">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="text-sm text-gray-600 dark:text-gray-300"
                  onClick={() => scrollToSection(item.ref)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700">
              {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 mt-16">
        <section ref={aboutRef} className="mb-16">
          <header className="mb-10 flex flex-col items-center justify-center min-h-[200px]">
            <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-200">
              {typedText}
              <span className="animate-blink">|</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">by Sharvari Raut</p>
          </header>

          <Card className="mb-8 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">Welcome to WriteStack</CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                Crafting Clear and Compelling Technical Content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                With over 5 years of experience in technical writing, I specialize in creating clear, concise, and
                user-friendly documentation for complex technical subjects. My work spans software documentation, blog
                articles, how-to guides, architectural decision records, and API documentation.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm passionate about making technology accessible and easy to understand for both technical and
                non-technical audiences. My writing style is characterized by clarity, precision, and a focus on user
                needs.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">Technical Writing</Button>
                <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">Software Documentation</Button>
                <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">API Documentation</Button>
                <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">Blog Writing</Button>
                <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">How-to Guides</Button>
                <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">Architectural Documentation</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">Why Choose Us</CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                Unparalleled Quality in Technical Writing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <PenTool className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">High-Quality Content</h3>
                    <p className="text-gray-600 dark:text-gray-400">Our content is meticulously crafted to meet the highest standards of quality and accuracy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BookCheck className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">100% Human-Written</h3>
                    <p className="text-gray-600 dark:text-gray-400">All our content is written by experienced professionals, with no AI intervention.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Search className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">SEO Optimized</h3>
                    <p className="text-gray-600 dark:text-gray-400">Our content is strategically optimized to improve your search engine rankings and visibility.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Sparkles className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Comprehensive Editing and Proofreading</h3>
                    <p className="text-gray-600 dark:text-gray-400">We ensure flawless grammar, impeccable language usage, and thorough editing in all our deliverables.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FileCheck className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Original Content</h3>
                    <p className="text-gray-600 dark:text-gray-400">We guarantee 100% original content, free from plagiarism and tailored to your specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Quick Turnaround Time</h3>
                    <p className="text-gray-600 dark:text-gray-400">We pride ourselves on delivering high-quality content within agreed-upon deadlines.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200 dark:border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">Clients</CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                Trusted by Industry Leaders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">TC</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">TechCorp</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">IS</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">InnoSoft</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">DS</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">DataSync</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">CS</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">CloudServe</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">AI</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">AInnova</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">BT</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">BlockTech</span>
                </div>
              </div>
              <p className="mt-6  text-center text-gray-600 dark:text-gray-400">
                These are just a few of the companies I've had the pleasure of working with. Each project has contributed to my expertise in creating top-notch technical documentation.
              </p>
            </CardContent>
          </Card>
        </section>

        <section ref={servicesRef} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Our Services</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-200">Software Documentation</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Comprehensive guides for users and developers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">Detailed documentation covering user manuals, API references, and developer guides for software products.</p>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  <FileText className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-200">Technical Blog Writing</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Engaging content on technical topics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">Well-researched and engaging blog posts on various technical subjects, tailored for your target audience.</p>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-200">API Documentation</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Clear and concise API guides</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">Comprehensive documentation for RESTful APIs and GraphQL, including endpoints, authentication, and best practices.</p>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  <Code className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-200">Technical Editing</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Polishing your technical content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">Thorough editing and proofreading of your existing technical documentation to ensure clarity, consistency, and accuracy.</p>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  <FileCheck className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-200">Architectural Decision Records</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Documenting key technical decisions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">Clear and concise documentation of important architectural decisions, including context, options considered, and rationale.</p>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  <FileCode2 className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-200">How-to Guides</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Step-by-step instructions for complex tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">Detailed, easy-to-follow guides that walk users through complex processes or tasks, with clear explanations and examples.</p>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section ref={packagesRef} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Our Packages</h2>
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800 dark:text-gray-200">Starter Package</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Basic documentation setup</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4  text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Up to 20 pages of content</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">1 round of revisions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800 dark:text-gray-200">Professional Package</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Comprehensive documentation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Up to 50 pages of content</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">3 rounds of revisions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Interactive elements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800 dark:text-gray-200">Enterprise Package</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Full-scale documentation project</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Unlimited pages of content</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Unlimited  revisions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Dedicated support</span>
                      </li>
                      <li  className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Custom integrations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Package className="mr-2 h-4 w-4" />
                  Connect for a Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section ref={contactRef} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Contact Us</h2>
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <form className="space-y-4 flex-1">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <Textarea id="message" placeholder="Your message here..." rows={4} />
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Send Message
                  </Button>
                </form>
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Technical Writing Illustration"
                    className="w-full max-w-md rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Connect With Us</h2>
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="pt-6">
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                Interested in working together? We're always open to new opportunities and collaborations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Medium Blog
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="text-center text-gray-600 dark:text-gray-400">
          <p>© 2023 WriteStack by Sharvari Raut. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}