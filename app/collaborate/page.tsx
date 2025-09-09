import Link from "next/link"
import { Users, Calendar, Trophy } from "lucide-react"

export default function CollaboratePage() {
  const activeProjects = [
    {
      id: 1,
      title: "Global Forest Restoration Visualization",
      description: "Creating an interactive map showing reforestation efforts worldwide",
      members: 24,
      skills: ["EcoCanvas", "Data Viz", "3D Modeling"],
      deadline: "2 weeks left",
      image: "/forest-restoration-project.jpg",
      leader: "EcoMapper_Pro",
    },
    {
      id: 2,
      title: "Endangered Species Documentary",
      description: "AI-generated animations for wildlife conservation awareness",
      members: 18,
      skills: ["CreatureMotion", "Video Editing", "Storytelling"],
      deadline: "1 month left",
      image: "/endangered-species-animation.jpg",
      leader: "WildlifeGuardian",
    },
    {
      id: 3,
      title: "Ocean Cleanup Campaign Assets",
      description: "Visual content for marine conservation initiatives",
      members: 31,
      skills: ["AquaDesign", "Marketing", "Social Media"],
      deadline: "3 weeks left",
      image: "/ocean-cleanup-campaign.jpg",
      leader: "OceanAdvocate",
    },
  ]

  const communityEvents = [
    {
      title: "Weekly Nature Art Challenge",
      date: "Every Friday",
      participants: "2.5K+",
      type: "Challenge",
    },
    {
      title: "AI Ethics in Nature Art Workshop",
      date: "Dec 15, 2024",
      participants: "500+",
      type: "Workshop",
    },
    {
      title: "Collaborative Forest Project Showcase",
      date: "Dec 20, 2024",
      participants: "1.2K+",
      type: "Showcase",
    },
  ]

  const topCollaborators = [
    { name: "NatureMaster_AI", projects: 47, rating: 4.9, avatar: "/nature-artist-avatar.jpg" },
    { name: "EcoDesigner_Pro", projects: 38, rating: 4.8, avatar: "/eco-designer-avatar.jpg" },
    { name: "WildlifeCreator", projects: 42, rating: 4.9, avatar: "/placeholder.svg?height=60&width=60" },
    { name: "ForestGuardian", projects: 35, rating: 4.7, avatar: "/placeholder.svg?height=60&width=60" },
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
              <Link href="/collaborate" className="text-emerald-400 font-medium">
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
                Collaborate
              </span>
              <br />
              <span className="text-white">For Nature</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join forces with passionate creators worldwide to build meaningful projects that celebrate and protect our
              natural world through AI-powered art.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">15K+</div>
              <div className="text-white/60">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sage-300">450+</div>
              <div className="text-white/60">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">89%</div>
              <div className="text-white/60">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sage-300">24/7</div>
              <div className="text-white/60">Community</div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-white">Active Projects</h2>
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-sage-400 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-sage-500 transition-all duration-300">
              Start New Project
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <div className="flex items-center text-emerald-400">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{project.members}</span>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm mb-4">{project.description}</p>
                    <p className="text-emerald-400 text-sm mb-4">Led by {project.leader}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">{project.deadline}</span>
                      <button className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors text-sm">
                        Join Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Collaborators */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Top Collaborators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCollaborators.map((collaborator, index) => (
              <div
                key={collaborator.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center hover:border-emerald-500/30 transition-colors"
              >
                <div className="relative mb-4">
                  <img
                    src={collaborator.avatar || "/placeholder.svg"}
                    alt={collaborator.name}
                    className="w-16 h-16 rounded-full mx-auto"
                  />
                  {index < 3 && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-white font-semibold mb-2">{collaborator.name}</h3>
                <div className="text-emerald-400 text-sm mb-1">{collaborator.projects} projects</div>
                <div className="text-white/60 text-sm">⭐ {collaborator.rating} rating</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Community Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {communityEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                    {event.type}
                  </span>
                  <div className="flex items-center text-white/60 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{event.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-emerald-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {event.participants} participants
                  </div>
                  <button className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors text-sm">
                    Join Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-white/70 mb-8">
            Connect with like-minded creators and build projects that matter for our planet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-sage-400 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-sage-500 transition-all duration-300 transform hover:scale-105">
              Join Community
            </button>
            <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500/10 transition-all duration-300">
              Browse Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
