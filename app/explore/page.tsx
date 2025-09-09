"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Heart,
  Eye,
  Download,
  Leaf,
  TreePine,
  Sparkles,
  Search,
  Filter,
} from "lucide-react"

export default function ExplorePage() {
  const [activeFilter, setActiveFilter] = useState("latest")

  const featuredCreations = [
    {
      id: 1,
      title: "Mystical Forest Landscape",
      creator: "NatureLover_AI",
      tool: "Nature-Inspired Art Generator",
      views: "12.5K",
      likes: "2.1K",
      downloads: "856",
      image: "/mystical-forest-digital-art.jpg",
      tags: ["Landscape", "Fantasy", "Nature"],
      category: "Digital Art",
    },
    {
      id: 2,
      title: "Animated Butterfly Migration",
      creator: "WildlifeStudio",
      tool: "Organic 3D Creator",
      views: "8.7K",
      likes: "1.8K",
      downloads: "432",
      image: "/butterfly-migration-animation.jpg",
      tags: ["Animation", "Wildlife", "Migration"],
      category: "3D Animation",
    },
    {
      id: 3,
      title: "Ocean Waves Symphony",
      creator: "AquaComposer",
      tool: "Nature Sound Composer",
      views: "15.2K",
      likes: "3.4K",
      downloads: "1.2K",
      image: "/ocean-waves-sound-visualization.jpg",
      tags: ["Audio", "Ocean", "Ambient"],
      category: "Sound Design",
    },
  ]

  const trendingTools = [
    { name: "Nature-Inspired Art Generator", users: "45K+", growth: "+23%", category: "Visual Art" },
    { name: "Organic 3D Creator", users: "32K+", growth: "+18%", category: "3D Design" },
    { name: "Nature Sound Composer", users: "28K+", growth: "+31%", category: "Audio" },
    { name: "Earth Palette Generator", users: "21K+", growth: "+15%", category: "Color Design" },
  ]

  const categories = ["All", "Digital Art", "3D Animation", "Sound Design", "Color Palettes", "Video", "Logos"]

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
              <Link href="/explore" className="text-primary font-medium">
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
                <div className="nexus-primary-button">Start Creating</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-nature-glass border-primary text-primary">
              <Sparkles className="w-4 h-4 mr-2" />
              Discover Natural Creativity
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text-hero leading-tight">
              Explore
              <br />
              <span className="text-accent">Nature's Gallery</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover the latest AI-generated masterpieces, trending tools, and inspiring creations from our global
              community of nature-loving artists.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search creations, artists, or tools..."
                  className="pl-10 bg-nature-glass border-primary/30 focus:border-primary text-foreground"
                />
              </div>
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-nature-glass rounded-lg p-4 border border-primary/20">
                <div className="text-2xl font-bold text-primary">125K+</div>
                <div className="text-sm text-muted-foreground">Creations</div>
              </div>
              <div className="bg-nature-glass rounded-lg p-4 border border-secondary/20">
                <div className="text-2xl font-bold text-secondary">89K+</div>
                <div className="text-sm text-muted-foreground">Artists</div>
              </div>
              <div className="bg-nature-glass rounded-lg p-4 border border-accent/20">
                <div className="text-2xl font-bold text-accent">2.3M+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="bg-nature-glass rounded-lg p-4 border border-primary/20">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">AI Tools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-nature-glass">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category.toLowerCase() ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(category.toLowerCase())}
                className={
                  activeFilter === category.toLowerCase()
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Creations */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-primary">Featured Creations</h2>
            <div className="flex space-x-2">
              <Button
                variant={activeFilter === "latest" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter("latest")}
                className="text-primary border-primary/50"
              >
                <Clock className="w-4 h-4 mr-2" />
                Latest
              </Button>
              <Button
                variant={activeFilter === "trending" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter("trending")}
                className="text-muted-foreground hover:text-primary"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending
              </Button>
              <Button
                variant={activeFilter === "liked" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter("liked")}
                className="text-muted-foreground hover:text-primary"
              >
                <Heart className="w-4 h-4 mr-2" />
                Most Liked
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCreations.map((creation) => (
              <Card
                key={creation.id}
                className="bg-nature-glass border-primary/20 hover:border-primary transition-all duration-300 hover:scale-105 group cursor-pointer overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={creation.image || "/placeholder.svg"}
                    alt={creation.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-nature-glass backdrop-blur-sm rounded-full px-3 py-1 text-sm border border-primary/20">
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">
                      {creation.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {creation.title}
                  </CardTitle>
                  <CardDescription className="text-accent">by {creation.creator}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {creation.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {creation.views}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {creation.likes}
                      </span>
                      <span className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {creation.downloads}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 rounded-md shadow-lg transition-all duration-300 cursor-pointer">
                    View Creation <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Tools */}
      <section className="py-20 px-6 bg-nature-glass">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text-secondary text-center">
            Trending AI Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingTools.map((tool, index) => (
              <Card
                key={tool.name}
                className="bg-background/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">#{index + 1}</span>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs font-medium">
                      {tool.growth}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-foreground">{tool.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{tool.users} active users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Leaf className="w-3 h-3 text-accent mr-2" />
                    {tool.category}
                  </div>
                  <div className="inline-flex items-center justify-center px-8 py-6 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 rounded-md shadow-lg transition-all duration-300 cursor-pointer">
                    <Link href="/create" className="flex items-center w-full">
                      Try Tool <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-hero">Ready to Create Your Own?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of artists using AI to bring nature's beauty to life. Start your creative journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/create">
                <div className="nexus-primary-button">
                  <TreePine className="w-5 h-5 mr-2" />
                  Start Creating
                </div>
              </Link>
              <Link href="/learn">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 text-lg px-8 py-6 bg-white/90 backdrop-blur-sm"
                >
                  Learn First
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
