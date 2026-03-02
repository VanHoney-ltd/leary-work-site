import { useEffect, useState } from 'react';
import { ArrowLeft, Grid, List, Search, Filter } from 'lucide-react';

// Generate 100 placeholder artworks
const generateArtworks = () => {
  const artworks = [];
  const titles = [
    "Eternal Bloom", "The Embrace", "Gorgon's Gaze", "Rooted Scream", "The Abyss",
    "Mind's Eye", "Stone Medusa", "Tentacle Horror", "Skull Rose", "Dark Embrace",
    "Phantom Pain", "Bleeding Heart", "Shadow Self", "Crimson Tears", "Void Walker",
    "Nightmare Fuel", "Dripping Soul", "Fractured Mind", "Silent Scream", "Black Widow",
    "Venom Kiss", "Poison Ivy", "Deadly Bloom", "Thorn Crown", "Blood Moon",
    "Grave Whisper", "Bone Garden", "Flesh Weaver", "Soul Harvest", "Dark Ritual",
    "Cursed Image", "Haunted Vision", "Spectral Touch", "Ethereal Pain", "Demonic Grace",
    "Angelic Fall", "Paradise Lost", "Hell's Gate", "Purgatory", "Limbo",
    "Oblivion", "Entropy", "Chaos Theory", "Order of Darkness", "Cult of One",
    "Solitary Confinement", "Isolation", "Desolation", "Abandonment", "Forsaken",
    "Betrayal", "Deception", "Illusion", "Mirage", "Phantom",
    "Specter", "Wraith", "Banshee", "Revenant", "Poltergeist",
    "Apparition", "Manifestation", "Materialization", "Conjuring", "Summoning",
    "Invocation", "Evocation", "Transmutation", "Metamorphosis", "Transformation",
    "Rebirth", "Resurrection", "Ascension", "Descent", "Fall",
    "Rise", "Awakening", "Slumber", "Dream", "Nightmare",
    "Vision", "Prophecy", "Omen", "Portent", "Sign",
    "Symbol", "Archetype", "Prototype", "Blueprint", "Design",
    "Creation", "Genesis", "Origin", "Source", "Root",
  ];
  
  const years = ["2021", "2022", "2023", "2024", "2025"];
  const categories = ["Ink", "Charcoal", "Mixed Media", "Digital", "Sketch"];
  
  for (let i = 1; i <= 100; i++) {
    artworks.push({
      id: i,
      title: titles[(i - 1) % titles.length] + (i > titles.length ? ` ${Math.ceil(i / titles.length)}` : ""),
      year: years[Math.floor(Math.random() * years.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      image: i <= 11 ? `/art${i}.jpg` : `/art${(i % 11) + 1}.jpg`,
    });
  }
  return artworks;
};

const Gallery = () => {
  const [artworks] = useState(generateArtworks());
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = ['All', 'Ink', 'Charcoal', 'Mixed Media', 'Digital', 'Sketch'];

  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || artwork.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#050508]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#050508]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <a
              href="/"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-mono-custom text-sm">Back to Portfolio</span>
            </a>

            {/* Title */}
            <div className="text-center">
              <h1 className="font-display text-2xl text-white">ARTFUL INQUIRY</h1>
              <p className="font-mono-custom text-xs text-[#FF006E]/60">Gallery</p>
            </div>

            {/* Stats */}
            <div className="text-right">
              <p className="font-display text-xl text-[#FF006E]">300+</p>
              <p className="font-mono-custom text-xs text-white/50">Artworks</p>
            </div>
          </div>
        </div>
      </header>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search artworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#1F1F1F]/50 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF006E]/50"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-white/40" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-[#1F1F1F]/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#FF006E]/50"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#1F1F1F]">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-1 bg-[#1F1F1F]/50 border border-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#FF006E]/20 text-[#FF006E]' : 'text-white/40 hover:text-white'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#FF006E]/20 text-[#FF006E]' : 'text-white/40 hover:text-white'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="mt-4 text-white/40 text-sm">
          Showing {filteredArtworks.length} of {artworks.length} artworks
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredArtworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className={`group relative aspect-square rounded-xl overflow-hidden bg-[#1F1F1F]/30 border border-white/10 cursor-pointer hover:border-[#FF006E]/50 transition-all ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${(index % 20) * 25}ms` }}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
                
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2 py-0.5 bg-[#FF006E]/20 text-[#FF006E] text-xs font-mono-custom rounded">
                    {artwork.category}
                  </span>
                  <p className="font-display text-sm text-white mt-1 truncate">{artwork.title}</p>
                  <p className="font-mono-custom text-xs text-white/50">{artwork.year}</p>
                </div>

                {/* Number Badge */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-[#050508]/80 rounded-full flex items-center justify-center">
                  <span className="font-mono-custom text-xs text-white/60">{artwork.id}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredArtworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className={`group flex items-center gap-4 p-4 bg-[#1F1F1F]/30 border border-white/10 rounded-xl cursor-pointer hover:border-[#FF006E]/50 transition-all ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${(index % 20) * 25}ms` }}
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-[#FF006E]/20 text-[#FF006E] text-xs font-mono-custom rounded">
                      {artwork.category}
                    </span>
                    <span className="font-mono-custom text-xs text-white/40">#{artwork.id}</span>
                  </div>
                  <h3 className="font-display text-lg text-white">{artwork.title}</h3>
                  <p className="font-mono-custom text-sm text-white/50">{artwork.year}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">No artworks found</p>
            <p className="text-white/30 text-sm mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono-custom text-xs text-white/30">
            © 2025 Artful Inquiry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
