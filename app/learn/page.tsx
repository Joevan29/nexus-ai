"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, BookOpen, Users, Clock, Star, Award, Zap, Leaf, TreePine, GraduationCap } from "lucide-react"

export default function LearnPage() {
  const [activeTab, setActiveTab] = useState("courses")

  const courses = [
    {
      id: 1,
      title: "AI Nature Art Fundamentals",
      instructor: "Dr. Maya Forest",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.9,
      students: "12.5K",
      image: "/nature-art-course-thumbnail.jpg",
      description:
        "Master the basics of creating stunning nature-inspired art using AI tools and biomimetic principles",
      price: "Free",
    },
    {
      id: 2,
      title: "Advanced Organic Design Techniques",
      instructor: "Alex Greenwood",
      duration: "6 weeks",
      level: "Advanced",
      rating: 4.8,
      students: "8.2K",
      image: "/advanced-digital-art-course.jpg",
      description: "Deep dive into professional landscape and ecosystem creation with sustainable AI practices",
      price: "$49",
    },
    {
      id: 3,
      title: "Wildlife Animation with Natural Motion",
      instructor: "Sarah Wildhart",
      duration: "5 weeks",
      level: "Intermediate",
      rating: 4.9,
      students: "6.7K",
      image: "/wildlife-animation-course.jpg",
      description: "Bring animals to life with realistic movement patterns inspired by nature's own designs",
      price: "$39",
    },
  ]

  const tutorials = [
    {
      title: "Creating Your First Forest Scene",
      duration: "15 min",
      views: "45K",
      thumbnail: "/forest-scene-tutorial.jpg",
      difficulty: "Beginner",
    },
    {
      title: "Butterfly Wing Patterns in AI",
      duration: "22 min",
      views: "32K",
      thumbnail: "/butterfly-wing-patterns.jpg",
      difficulty: "Intermediate",
    },
    {
      title: "Ocean Wave Physics Simulation",
      duration: "18 min",
      views: "28K",
      thumbnail: "/ocean-wave-simulation.jpg",
      difficulty: "Advanced",
    },
    {
      title: "Seasonal Color Palettes",
      duration: "12 min",
      views: "51K",
      thumbnail: "/seasonal-color-palettes.jpg",
      difficulty: "Beginner",
    },
  ]

  const learningPaths = [
    {
      title: "Beginner Path",
      icon: Zap,
      description: "Start your journey with AI nature art fundamentals and basic tool usage.",
      courses: "8 Courses",
      duration: "32 Hours",
      color: "primary",
    },
    {
      title: "Intermediate Path",
      icon: BookOpen,
      description: "Advance your skills with specialized techniques and professional workflows.",
      courses: "12 Courses",
      duration: "48 Hours",
      color: "secondary",
    },
    {
      title: "Expert Path",
      icon: Award,
      description: "Master advanced AI techniques and become a nature art professional.",
      courses: "15 Courses",
      duration: "60 Hours",
      color: "accent",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className="fixed top-0 w-full z-40 bg-nature-glass backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Leaf className="w-8 h-8 text-primary animate-pulse" />
                <div className="absolute inset-0 animate-spin">
                  <div className="w-8 h-8 border-2 border-transparent border-t-secondary rounded-full" />
                </div>
              </div>
              <span className="text-2xl font-bold gradient-text-primary">NEXUS</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/create" className="text-muted-foreground hover:text-primary transition-colors">
                Create
              </Link>
              <Link href="/explore" className="text-muted-foreground hover:text-primary transition-colors">
                Explore
              </Link>
              <Link href="/learn" className="text-primary font-medium">
                Learn
              </Link>
              <Link href="/collaborate" className="text-muted-foreground hover:text-primary transition-colors">
                Collaborate
              </Link>
              <Link href="/showcase" className="text-muted-foreground hover:text-primary transition-colors">
                Showcase
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-primary border-primary/50 hover:bg-primary/10">
                Experience Nature
              </Button>
              <Link href="/create">
                <Button
                  style={{
                    background: "linear-gradient(to right, #059669, #10b981)",
                    color: "white",
                    border: "none",
                  }}
                  className="hover:opacity-90 text-white transition-opacity"
                >
                  Start Creating
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-nature-glass border-primary text-primary">
              <GraduationCap className="w-4 h-4 mr-2" />
              Nature Learning Academy
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text-hero leading-tight">
              Learn & Grow
              <br />
              <span className="text-accent">With Nature's AI</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Master the art of AI-powered nature creation through comprehensive courses, tutorials, and hands-on
              workshops designed for every skill level.
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-nature-glass rounded-full p-1 border border-primary/20">
                <Button
                  variant={activeTab === "courses" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("courses")}
                  className={
                    activeTab === "courses" ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"
                  }
                >
                  Courses
                </Button>
                <Button
                  variant={activeTab === "tutorials" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("tutorials")}
                  className={
                    activeTab === "tutorials" ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"
                  }
                >
                  Tutorials
                </Button>
                <Button
                  variant={activeTab === "paths" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("paths")}
                  className={
                    activeTab === "paths" ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"
                  }
                >
                  Learning Paths
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      {activeTab === "paths" && (
        <section className="py-20 px-6 bg-nature-glass">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text-secondary text-center">
              Choose Your Path
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {learningPaths.map((path, index) => (
                <Card
                  key={index}
                  className="bg-background/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group text-center"
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-${path.color}/20 to-${path.color === "primary" ? "secondary" : path.color === "secondary" ? "accent" : "primary"}/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <path.icon className={`w-8 h-8 text-${path.color}`} />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{path.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-sm text-muted-foreground">
                        <BookOpen className="w-4 h-4 mr-2 text-accent" />
                        {path.courses}
                      </div>
                      <div className="flex items-center justify-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-accent" />
                        {path.duration}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                    >
                      Start Path <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Courses */}
      {activeTab === "courses" && (
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text-primary">Featured Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="bg-nature-glass border-primary/20 hover:border-primary transition-all duration-300 hover:scale-105 group cursor-pointer overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className={`${
                          course.level === "Beginner"
                            ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                            : course.level === "Intermediate"
                              ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                              : "bg-red-100 text-red-800 border-red-200"
                        } text-xs font-medium`}
                      >
                        {course.level}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-nature-glass border-primary/20 text-primary text-xs">{course.price}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-nature-glass backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-accent">by {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{course.description}</p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-foreground font-medium">{course.rating}</span>
                      </div>
                    </div>

                    <div className="w-full text-center py-3 font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 rounded-lg transition-all duration-300 cursor-pointer">
                      Enroll Now
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quick Tutorials */}
      {activeTab === "tutorials" && (
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text-primary">Quick Tutorials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tutorials.map((tutorial, index) => (
                <Card
                  key={index}
                  className="bg-nature-glass border-primary/20 hover:border-primary transition-all duration-300 group cursor-pointer overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={tutorial.thumbnail || "/placeholder.svg"}
                      alt={tutorial.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-nature-glass backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-nature-glass backdrop-blur-sm text-primary px-2 py-1 rounded text-xs border border-primary/20">
                      {tutorial.duration}
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge
                        variant="secondary"
                        className={`${
                          tutorial.difficulty === "Beginner"
                            ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                            : tutorial.difficulty === "Intermediate"
                              ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                              : "bg-red-100 text-red-800 border-red-200"
                        } text-xs`}
                      >
                        {tutorial.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <CardTitle className="text-foreground font-semibold mb-2 text-sm group-hover:text-primary transition-colors">
                      {tutorial.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-xs">{tutorial.views} views</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-nature-glass">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-hero">Start Your Learning Journey</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 50,000 students mastering AI nature art creation with sustainable practices and organic design
              principles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/explore">
                <div className="nexus-primary-button">
                  <TreePine className="w-5 h-5 mr-2" />
                  Browse All Courses
                </div>
              </Link>
              <Link href="/create">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 text-lg px-8 py-6 bg-white/90 backdrop-blur-sm"
                >
                  Start Creating
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-primary/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold gradient-text-primary">NEXUS Natural AI Studio</span>
            </div>

            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sustainability
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                API
              </a>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2024 NEXUS Natural AI Studio. Creating in harmony with nature and technology.
          </div>
        </div>
      </footer>
    </div>
  )
}
