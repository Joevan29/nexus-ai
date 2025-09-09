"use client"

import { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import dynamic from "next/dynamic"
import Link from "next/link"
import {
  Sparkles,
  Palette,
  ImageIcon,
  Music,
  Video,
  Layers3,
  Users,
  BookOpen,
  ArrowRight,
  Play,
  Brain,
  Globe,
  Leaf,
  TreePine,
  Flower,
} from "lucide-react"

const Scene3D = dynamic(() => import("@/components/3d-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-nature-glass rounded-xl flex items-center justify-center">
      <div className="text-muted-foreground">Loading 3D Scene...</div>
    </div>
  ),
})

export default function NexusAIStudio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const aiTools = [
    {
      icon: ImageIcon,
      title: "Nature-Inspired Art Generator",
      description:
        "Transform your imagination into stunning organic visuals using AI trained on natural patterns and ecosystems",
      color: "emerald",
      features: ["Botanical patterns", "Landscape generation", "Wildlife art"],
    },
    {
      icon: Palette,
      title: "Eco Style Transfer",
      description:
        "Apply the artistic essence of forests, oceans, and mountains to your photos with sustainable AI processing",
      color: "sage",
      features: ["Forest textures", "Ocean waves", "Mountain landscapes"],
    },
    {
      icon: Layers3,
      title: "Organic 3D Creator",
      description:
        "Sculpt lifelike trees, flowing rivers, and natural terrains with AI that understands organic growth patterns",
      color: "emerald-light",
      features: ["Tree modeling", "Terrain sculpting", "Water simulation"],
    },
    {
      icon: Leaf,
      title: "Bio-Logo Designer",
      description:
        "Create memorable brand identities inspired by nature's perfect designs - from leaf patterns to animal forms",
      color: "emerald",
      features: ["Leaf patterns", "Animal silhouettes", "Natural geometry"],
    },
    {
      icon: TreePine,
      title: "Earth Palette Generator",
      description:
        "Extract perfect color harmonies from sunrise skies, autumn leaves, and ocean depths for your designs",
      color: "sage",
      features: ["Seasonal palettes", "Sky gradients", "Earth tones"],
    },
    {
      icon: Music,
      title: "Nature Sound Composer",
      description:
        "Compose relaxing soundscapes with AI-generated bird songs, flowing water, and gentle wind through trees",
      color: "emerald-light",
      features: ["Bird symphonies", "Water sounds", "Wind melodies"],
    },
    {
      icon: Video,
      title: "Organic Video Creator",
      description: "Generate mesmerizing time-lapse videos of blooming flowers, flowing clouds, and natural phenomena",
      color: "emerald",
      features: ["Time-lapse blooms", "Cloud formations", "Natural motion"],
    },
    {
      icon: Flower,
      title: "Natural Voice Synthesis",
      description:
        "Create soothing, human-like voices with the gentle cadence of nature - perfect for meditation and storytelling",
      color: "sage",
      features: ["Meditation voices", "Story narration", "Gentle tones"],
    },
  ]

  const features = [
    {
      icon: Brain,
      title: "AI Nature Collaboration",
      description:
        "Partner with AI that learns from nature's intelligence - biomimicry meets machine learning for breakthrough creativity",
      benefits: ["Biomimetic algorithms", "Organic workflows", "Intuitive interfaces"],
    },
    {
      icon: Users,
      title: "Organic Co-creation",
      description:
        "Join a thriving ecosystem of creators who share, inspire, and grow together like a natural forest community",
      benefits: ["Global creator network", "Skill sharing", "Collaborative projects"],
    },
    {
      icon: BookOpen,
      title: "Nature Learning Academy",
      description:
        "Master sustainable design through interactive courses on biomimicry, eco-aesthetics, and green technology",
      benefits: ["Expert-led courses", "Hands-on projects", "Certification programs"],
    },
    {
      icon: Globe,
      title: "Global Eco Community",
      description:
        "Connect with environmentally conscious creators worldwide, sharing knowledge and building a sustainable creative future",
      benefits: ["Environmental impact", "Global networking", "Sustainable practices"],
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
              <Link href="/learn" className="text-muted-foreground hover:text-primary transition-colors">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Badge className="mb-6 bg-nature-glass border-primary text-primary">
                <Sparkles className="w-4 h-4 mr-2" />
                Where Nature Meets Intelligence
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text-hero leading-tight">
                Create with
                <br />
                <span className="text-accent">Natural AI</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Experience the harmony of artificial intelligence inspired by nature's wisdom. Create sustainably,
                beautifully, and organically.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/create">
                  <div className="nexus-primary-button">
                    <TreePine className="w-5 h-5 mr-2" />
                    Enter the Studio
                  </div>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 text-lg px-8 py-6 bg-white/90 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Journey
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-center">
                <div className="bg-nature-glass rounded-lg p-4 border border-primary/20">
                  <div className="text-2xl font-bold text-primary">500K+</div>
                  <div className="text-sm text-muted-foreground">Eco Creators</div>
                </div>
                <div className="bg-nature-glass rounded-lg p-4 border border-secondary/20">
                  <div className="text-2xl font-bold text-secondary">10M+</div>
                  <div className="text-sm text-muted-foreground">Natural Creations</div>
                </div>
                <div className="bg-nature-glass rounded-lg p-4 border border-accent/20">
                  <div className="text-2xl font-bold text-accent">Carbon Neutral</div>
                  <div className="text-sm text-muted-foreground">Operations</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Suspense fallback={<div className="w-full h-96 bg-nature-glass rounded-xl animate-pulse" />}>
                <Scene3D />
              </Suspense>

              {/* Floating nature elements around 3D scene */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-4 h-4 rounded-full opacity-30 ${i % 2 === 0 ? "float-gentle" : "float-slow"}`}
                    style={{
                      left: `${10 + i * 12}%`,
                      top: `${20 + (i % 3) * 25}%`,
                      animationDelay: `${i * 0.8}s`,
                      background:
                        i % 3 === 0
                          ? "var(--nature-emerald)"
                          : i % 3 === 1
                            ? "var(--nature-emerald-light)"
                            : "var(--nature-sage)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">Natural AI Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover AI tools that work like nature - efficient, beautiful, and sustainable. Each tool is designed to
              enhance your creativity while respecting our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((tool, index) => (
              <Card
                key={index}
                className={`bg-nature-glass border-${tool.color === "emerald" ? "primary" : tool.color === "sage" ? "accent" : "secondary"}/20 hover:border-${tool.color === "emerald" ? "primary" : tool.color === "sage" ? "accent" : "secondary"} transition-all duration-300 hover:scale-105 group cursor-pointer`}
              >
                <CardHeader>
                  <tool.icon
                    className={`w-12 h-12 ${tool.color === "emerald" ? "text-primary" : tool.color === "sage" ? "text-accent" : "text-secondary"} mb-4 group-hover:animate-pulse`}
                  />
                  <CardTitle className="text-lg text-foreground">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">{tool.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tool.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-emerald-100 text-emerald-800 border-emerald-200 font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                    <Link href="/create" className="flex items-center w-full">
                      Explore Tool <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-nature-glass">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-secondary">Sustainable Innovation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a movement where technology and nature work in perfect harmony. Experience creativity that nurtures
              both your imagination and our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-background/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 text-foreground">{feature.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Leaf className="w-3 h-3 text-accent mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                  >
                    <Link href="/learn" className="flex items-center w-full">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-hero">Join the Natural Revolution</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a creative community that's reshaping the future of design. Create with AI that understands the
              beauty, wisdom, and sustainability of the natural world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Input
                placeholder="Enter your email to grow with us"
                className="max-w-md bg-white/90 border-emerald-300 focus:border-emerald-500 text-slate-700 placeholder:text-slate-500"
              />
              <Link href="/create">
                <div className="nexus-primary-button">Start Growing</div>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Leaf className="w-4 h-4 text-accent mr-1" />
                Carbon-neutral AI processing
              </span>
              <span className="flex items-center">
                <TreePine className="w-4 h-4 text-accent mr-1" />
                30-day natural trial period
              </span>
              <span className="flex items-center">
                <Flower className="w-4 h-4 text-accent mr-1" />
                Sustainable creative practices
              </span>
              <span className="flex items-center">
                <Globe className="w-4 h-4 text-accent mr-1" />
                Global eco-community access
              </span>
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
