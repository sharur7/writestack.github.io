'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Moon, Sun, Menu, X, Check, PenTool, BookOpen, FileText, Code, FileCheck, Clock, Search, Globe, FileBox, ArrowRight } from "lucide-react"

export default function WriteStackSite() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const packagesRef = useRef<HTMLDivElement>(null)
  const whyUsRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const navItems = [
    { label: "About", ref: aboutRef },
    { label: "Services", ref: servicesRef },
    { label: "Packages", ref: packagesRef },
    { label: "Why Us", ref: whyUsRef },
    { label: "Clients", ref: clientsRef },
    { label: "Get in Touch", ref: contactRef },
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 ${darkMode ? 'dark' : ''}`}>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0">
                <img src="/WriteStackLogo.png" alt="WriteStack Logo" className="h-8 w-auto" />
              </a>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">WriteStack</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                >
                  {item.label}
                </button>
              ))}
              <Button variant="outline" size="sm" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
            <div className="md:hidden flex items-center">
              <Button variant="outline" size="sm" onClick={toggleDarkMode} className="mr-2">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="outline" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section ref={aboutRef} className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block">Expert Technical Writing</span>
                  <span className="block text-indigo-600">for Your Business</span>
                </h1>
                <p className="mt-3 text-xl text-indigo-600 font-semibold">
                  Bridging the gap between complex ideas and clear communication
                </p>
                <p className="mt-3 max-w-md text-justify text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl">
                  At WriteStack, we turn complex technical concepts into clear, engaging content. With 4 years of experience, we specialize in creating top-tier software documentation and technical articles. <br /><br />

                  We deliver technical content that empowers your audience and elevates your brand in the tech industry. Our work is precise, user-friendly, and accessible to technical and non-technical audiences.
                </p>
                </div>
              <div className="mt-10 lg:mt-0 lg:w-1/2">
                <svg className="w-full h-auto" viewBox="0 0 646 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M388.5 600C522.5 600 646 476.5 646 342.5C646 208.5 522.5 85 388.5 85C254.5 85 131 208.5 131 342.5C131 476.5 254.5 600 388.5 600Z" fill="#F0F4FF"/>
                  <path d="M305 550C422.5 550 525 447.5 525 330C525 212.5 422.5 110 305 110C187.5 110 85 212.5 85 330C85 447.5 187.5 550 305 550Z" fill="#E0E7FF"/>
                  <path d="M266 499C362 499 440 421 440 325C440 229 362 151 266 151C170 151 92 229 92 325C92 421 170 499 266 499Z" fill="#C7D2FE"/>
                  <rect x="186" y="248" width="160" height="160" rx="15" fill="#818CF8"/>
                  <rect x="206" y="278" width="120" height="10" rx="5" fill="#F0F4FF"/>
                  <rect x="206" y="308" width="120" height="10" rx="5" fill="#F0F4FF"/>
                  <rect x="206" y="338" width="120" height="10" rx="5" fill="#F0F4FF"/>
                  <rect x="206" y="368" width="120" height="10" rx="5" fill="#F0F4FF"/>
                  <circle cx="426" cy="176" r="20" fill="#818CF8"/>
                  <circle cx="426" cy="236" r="20" fill="#818CF8"/>
                  <circle cx="426" cy="296" r="20" fill="#818CF8"/>
                  <path d="M426 206V226M426 256V276" stroke="#F0F4FF" strokeWidth="4"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section ref={statsRef} className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Proven Track Record
              </h2>
              <p className="mt-4 text-xl">
                Delivering excellence in technical writing across the globe
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-md bg-indigo-500 text-white mx-auto">
                  <FileBox className="h-10 w-10" />
                </div>
                <p className="mt-4 text-4xl font-extrabold">100+</p>
                <p className="mt-2 text-lg">Deliverables Completed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-md bg-indigo-500 text-white mx-auto">
                  <Globe className="h-10 w-10" />
                </div>
                <p className="mt-4 text-4xl font-extrabold">20+</p>
                <p className="mt-2 text-lg">Clients Worldwide</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-md bg-indigo-500 text-white mx-auto">
                  <FileCheck className="h-10 w-10" />
                </div>
                <p className="mt-4 text-4xl font-extrabold">100%</p>
                <p className="mt-2 text-lg">Client Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        <section ref={servicesRef} className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Services</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Comprehensive Technical Writing Solutions
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Software Documentation",
                    description: "Comprehensive user manuals, API documentation, and developer guides for your software products.",
                    icon: <FileText className="h-8 w-8 text-indigo-600" />,
                    link: "#software-documentation",
                  },
                  {
                    title: "Technical Blog Writing",
                    description: "Engaging and informative blog posts on technical topics to establish your expertise and attract customers.",
                    icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
                    link: "#technical-blog-writing",
                  },
                  {
                    title: "API Documentation",
                    description: "Clear and concise API references, including endpoints, parameters, and example requests/responses.",
                    icon: <Code className="h-8 w-8 text-indigo-600" />,
                    link: "#api-documentation",
                  },
                  {
                    title: "User Guides",
                    description: "Step-by-step instructions and tutorials to help users get the most out of your products.",
                    icon: <FileText className="h-8 w-8 text-indigo-600" />,
                    link: "#user-guides",
                  },
                  {
                    title: "Technical Editing",
                    description: "Polishing and refining your existing technical content for clarity, consistency, and accuracy.",
                    icon: <PenTool className="h-8 w-8 text-indigo-600" />,
                    link: "#technical-editing",
                  },
                  {
                    title: "Architectural Decision Docs",
                    description: "Detailed documentation of key architectural decisions, including context, options considered, and rationale.",
                    icon: <FileCheck className="h-8 w-8 text-indigo-600" />,
                    link: "#architectural-decision-docs",
                  },
                ].map((service) => (
                  <Card key={service.title} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <CardHeader>
                      <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full inline-block">
                        {service.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardTitle className="text-xl font-semibold  mb-2">{service.title}</CardTitle>
                      <CardDescription className="mb-4">{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <a href={service.link} className="text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400 font-medium inline-flex items-center">
                        See More <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={packagesRef} className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Packages</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Choose the Perfect Plan for Your Needs
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" >
                {[
                  {
                    name: "Starter",
                    price: "$499",
                    description: "Perfect for small projects and startups",
                    features: [
                      "Up to 10 pages of content",
                      "1 round of revisions",
                      "Basic SEO optimization",
                      "Delivery in 5 business days",
                    ],
                  },
                  {
                    name: "Professional",
                    price: "$999",
                    description: "Ideal for growing businesses",
                    features: [
                      "Up to 25 pages of content",
                      "2 rounds of revisions",
                      "Advanced SEO optimization",
                      "Delivery in 10 business days",
                      "Content strategy consultation",
                    ],
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    description: "Tailored for large-scale projects",
                    features: [
                      "Unlimited pages of content",
                      "Unlimited revisions",
                      "Comprehensive SEO strategy",
                      "Priority delivery",
                      "Dedicated project manager",
                      "Ongoing support and updates",
                    ],
                  },
                ].map((plan) => (
                  <Card key={plan.name} className="border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors duration-300 flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>
                        <span className="text-4xl font-extrabold">{plan.price}</span>
                        {plan.name !== "Enterprise" && " / project"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{plan.description}</p>
                      <ul className="mt-6 space-y-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex">
                            <Check className="flex-shrink-0 w-6 h-6 text-green-500" aria-hidden="true" />
                            <span className="ml-3 text-base text-gray-500 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get started</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={whyUsRef} className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Unparalleled Quality in Technical Writing
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "High-Quality Content",
                    description: "Our team of expert writers delivers top-notch, accurate, and engaging technical content.",
                    icon: <PenTool className="h-8 w-8 text-indigo-600" />,
                  },
                  {
                    title: "100% Human-Written",
                    description: "All our content is crafted by experienced professionals, ensuring authenticity and expertise.",
                    icon: <FileText className="h-8 w-8 text-indigo-600" />,
                  },
                  {
                    title: "SEO Optimized",
                    description: "We incorporate best SEO practices to improve your content's visibility and ranking.",
                    icon: <Search className="h-8 w-8 text-indigo-600" />,
                  },
                  {
                    title: "Comprehensive Editing",
                    description: "Rigorous proofreading and editing ensure flawless, polished final documents.",
                    icon: <FileCheck className="h-8 w-8 text-indigo-600" />,
                  },
                  {
                    title: "Original Content",
                    description: "We create unique, plagiarism-free content tailored to your specific needs and brand voice.",
                    icon: <FileText className="h-8 w-8 text-indigo-600" />,
                  },
                  {
                    title: "Quick Turnaround",
                    description: "We pride ourselves on delivering high-quality content within agreed-upon deadlines.",
                    icon: <Clock className="h-8 w-8 text-indigo-600" />,
                  },
                ].map((feature) => (
                  <Card key={feature.title} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full inline-block">
                        {feature.icon}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={clientsRef} className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Clients</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Trusted by Industry Leaders
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                {["LogRocket", "Sawo Labs", "Honeybadger", "Analytics Vidhya", "WorkDuck", "CherCherTech"].map((client) => (
                  <div key={client} className="col-span-1 flex justify-center items-center">
                    <div className="h-16 w-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                      <img src={`${client.toLowerCase()}.png`} alt={`${client} logo`} className="h-12 w-12 object-contain" />
                    </div>
                    <span className="ml-2 text-gray-900 dark:text-gray-100">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={contactRef} className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-extrabold text-center mb-8">Get in Touch</h2>
              <p className="text-xl text-center mb-12">
                Ready to elevate your technical documentation? Let's discuss your project and create exceptional content together.
              </p>
              <Card className="p-8 bg-white/10 backdrop-blur-lg border-none">
                <CardContent>
                  <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className="text-white">Name</Label>
                      <Input id="name" name="name" type="text" required className="mt-1 bg-white text-gray-900 placeholder-gray-500 border-white" placeholder="Your Name" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input id="email" name="email" type="email" required className="mt-1 bg-white text-gray-900 placeholder-gray-500 border-white" placeholder="your@email.com" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="message" className="text-white">Message</Label>
                      <Textarea id="message" name="message" rows={4} required className="mt-1 bg-white text-gray-900 placeholder-gray-500 border-white" placeholder="Tell us about your project..." />
                    </div>
                    <div className="md:col-span-2">
                      <Button type="submit" className="w-full bg-white text-indigo-600 hover:bg-indigo-100">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Services</h3>
              <ul className="mt-4 space-y-4">
                {["Software Documentation", "Technical Blog Writing", "API Documentation", "User Guides"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-4">
                {["About", "Blog", "Jobs", "Press"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Contact Us</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="mailto:info@writestack.com" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    info@writestack.tech
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/writestack" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            <p className="text-base text-gray-500 dark:text-gray-400 text-center">
              Copyright &copy; 2024 WriteStack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
