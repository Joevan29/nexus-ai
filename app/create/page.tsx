import Link from "next/link"
import { Palette, Wand2, ImageIcon, Video, Music, Settings, Download, Share2 } from "lucide-react"

export default function CreatePage() {
  const aiTools = [
    {
      name: "EcoCanvas",
      description: "Create stunning landscape paintings with AI",
      icon: <Palette className="w-8 h-8" />,
      color: "emerald",
      features: ["Landscape Generation", "Style Transfer", "Color Harmony"],
    },
    {
      name: "CreatureMotion",
      description: "Animate wildlife with realistic movements",
      icon: <Video className="w-8 h-8" />,
      color: "sage",
      features: ["Animal Animation", "Behavior Simulation", "Motion Capture"],
    },
    {
      name: "NaturalBeats",
      description: "Compose nature-inspired soundscapes",
      icon: <Music className="w-8 h-8" />,
      color: "emerald",
      features: ["Ambient Sounds", "Rhythm Generation", "Audio Mixing"],
    },
    {
      name: "FloralDesign",
      description: "Design intricate botanical illustrations",
      icon: <ImageIcon className="w-8 h-8" />,
      color: "sage",
      features: ["Botanical Art", "Pattern Generation", "Scientific Accuracy"],
    },
  ]

  const recentProjects = [
    {
      title: "Sunset Forest",
      tool: "EcoCanvas",
      lastEdited: "2 hours ago",
      thumbnail: "/placeholder.svg?height=120&width=160",
    },
    {
      title: "Eagle Flight",
      tool: "CreatureMotion",
      lastEdited: "1 day ago",
      thumbnail: "/placeholder.svg?height=120&width=160",
    },
    {
      title: "Ocean Waves",
      tool: "NaturalBeats",
      lastEdited: "3 days ago",
      thumbnail: "/placeholder.svg?height=120&width=160",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-sage-300 bg-clip-text text-transparent"
            >
              NEXUS
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/create" className="text-emerald-400 font-medium">
                Create
              </Link>
              <Link href="/explore" className="text-white/80 hover:text-white transition-colors">
                Explore
              </Link>
              <Link href="/learn" className="text-white/80 hover:text-white transition-colors">
                Learn
              </Link>
              <Link href="/collaborate" className="text-white/80 hover:text-white transition-colors">
                Collaborate
              </Link>
              <Link href="/showcase" className="text-white/80 hover:text-white transition-colors">
                Showcase
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-sage-300 to-emerald-500 bg-clip-text text-transparent">
                Create
              </span>
              <br />
              <span className="text-white">With Nature's AI</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Transform your imagination into stunning nature art using our suite of AI-powered creative tools. From
              landscapes to wildlife, bring the natural world to life.
            </p>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Choose Your Creative Tool</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiTools.map((tool) => (
              <div key={tool.name} className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div
                    className={`w-16 h-16 bg-${tool.color}-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${tool.color}-500/30 transition-colors`}
                  >
                    <div className={`text-${tool.color}-400`}>{tool.icon}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{tool.name}</h3>
                  <p className="text-white/70 mb-6">{tool.description}</p>

                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-white/60">
                        <div className={`w-2 h-2 bg-${tool.color}-400 rounded-full mr-3`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 bg-gradient-to-r from-${tool.color}-500 to-sage-400 text-white font-semibold rounded-lg hover:from-${tool.color}-600 hover:to-sage-500 transition-all duration-300`}
                  >
                    Launch Tool
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-white">Recent Projects</h2>
            <button className="text-emerald-400 hover:text-emerald-300 transition-colors">View All Projects</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex gap-2">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Settings className="w-4 h-4 text-white" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Download className="w-4 h-4 text-white" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Share2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-emerald-400">{project.tool}</span>
                      <span className="text-white/60">{project.lastEdited}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Templates */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Quick Start Templates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Forest Landscape", tool: "EcoCanvas", image: "/placeholder.svg?height=150&width=200" },
              { name: "Wildlife Portrait", tool: "CreatureMotion", image: "/placeholder.svg?height=150&width=200" },
              { name: "Ocean Soundscape", tool: "NaturalBeats", image: "/placeholder.svg?height=150&width=200" },
              { name: "Botanical Study", tool: "FloralDesign", image: "/placeholder.svg?height=150&width=200" },
            ].map((template, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1">{template.name}</h3>
                    <p className="text-emerald-400 text-sm">{template.tool}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Creating Today</h2>
          <p className="text-xl text-white/70 mb-8">
            Join thousands of artists using AI to create stunning nature-inspired art
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-sage-400 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-sage-500 transition-all duration-300 transform hover:scale-105">
              <Wand2 className="w-5 h-5 inline mr-2" />
              Start Creating
            </button>
            <Link
              href="/learn"
              className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500/10 transition-all duration-300"
            >
              Learn First
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
