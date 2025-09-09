import Link from "next/link"
import { ArrowRight, Eye, Heart, Download, Share2, Award, Filter, Grid, List } from "lucide-react"

export default function ShowcasePage() {
  const featuredArtworks = [
    {
      id: 1,
      title: "Ethereal Forest Dreams",
      artist: "NatureMystic",
      category: "Landscape",
      tool: "EcoCanvas",
      views: "45.2K",
      likes: "8.7K",
      downloads: "2.1K",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
      awards: ["Editor's Choice", "Community Favorite"],
    },
    {
      id: 2,
      title: "Dancing Butterfly Migration",
      artist: "WingArtist",
      category: "Animation",
      tool: "CreatureMotion",
      views: "32.8K",
      likes: "6.2K",
      downloads: "1.8K",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
      awards: ["Best Animation"],
    },
    {
      id: 3,
      title: "Ocean's Symphony",
      artist: "AquaComposer",
      category: "Audio Visual",
      tool: "NaturalBeats",
      views: "28.5K",
      likes: "5.9K",
      downloads: "1.5K",
      image: "/placeholder.svg?height=400&width=300",
      featured: false,
      awards: [],
    },
    {
      id: 4,
      title: "Seasonal Transformation",
      artist: "TimeKeeper_AI",
      category: "Time-lapse",
      tool: "SeasonShift",
      views: "51.3K",
      likes: "9.8K",
      downloads: "3.2K",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
      awards: ["Most Innovative"],
    },
    {
      id: 5,
      title: "Coral Reef Renaissance",
      artist: "ReefRestorer",
      category: "3D Environment",
      tool: "AquaDesign",
      views: "38.7K",
      likes: "7.1K",
      downloads: "2.4K",
      image: "/placeholder.svg?height=400&width=300",
      featured: false,
      awards: ["Conservation Impact"],
    },
    {
      id: 6,
      title: "Mountain Peak Majesty",
      artist: "AlpineCreator",
      category: "Landscape",
      tool: "EcoCanvas",
      views: "42.1K",
      likes: "8.3K",
      downloads: "2.7K",
      image: "/placeholder.svg?height=400&width=300",
      featured: false,
      awards: [],
    },
  ]

  const categories = [
    { name: "All", count: "12.5K" },
    { name: "Landscape", count: "4.2K" },
    { name: "Wildlife", count: "3.8K" },
    { name: "Animation", count: "2.1K" },
    { name: "3D Environment", count: "1.9K" },
    { name: "Audio Visual", count: "0.5K" },
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
              <Link href="/create" className="text-white/80 hover:text-white transition-colors">
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
              <Link href="/showcase" className="text-emerald-400 font-medium">
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
                Showcase
              </span>
              <br />
              <span className="text-white">Nature's Gallery</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover breathtaking AI-generated nature art from our global community of creators. Every piece tells a
              story of our planet's beauty.
            </p>
          </div>

          {/* Gallery Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">12.5K+</div>
              <div className="text-white/60">Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sage-300">8.9K+</div>
              <div className="text-white/60">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">2.1M+</div>
              <div className="text-white/60">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sage-300">450K+</div>
              <div className="text-white/60">Downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-full border transition-colors ${
                    category.name === "All"
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                      : "text-white/60 border-white/20 hover:text-white hover:border-white/30"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30">
                  <Grid className="w-5 h-5" />
                </button>
                <button className="p-2 text-white/60 hover:text-white transition-colors">
                  <List className="w-5 h-5" />
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white border border-white/20 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Featured Artworks</h2>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {featuredArtworks.map((artwork) => (
              <div key={artwork.id} className="break-inside-avoid group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full object-cover"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Heart className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Download className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Share2 className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Awards Badge */}
                    {artwork.awards.length > 0 && (
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          <Award className="w-4 h-4" />
                          {artwork.awards[0]}
                        </div>
                      </div>
                    )}

                    {/* Tool Badge */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {artwork.tool}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{artwork.title}</h3>
                    <p className="text-emerald-400 mb-2">by {artwork.artist}</p>
                    <p className="text-white/60 text-sm mb-4">{artwork.category}</p>

                    <div className="flex items-center justify-between text-sm text-white/60">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {artwork.views}
                        </span>
                        <span className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {artwork.likes}
                        </span>
                        <span className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {artwork.downloads}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-sage-400 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-sage-500 transition-all duration-300 transform hover:scale-105">
              Load More Artworks
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Share Your Nature Art</h2>
          <p className="text-xl text-white/70 mb-8">
            Join thousands of artists showcasing their AI-generated nature creations
          </p>
          <Link
            href="/create"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-sage-400 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-sage-500 transition-all duration-300 transform hover:scale-105"
          >
            Upload Your Art
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
