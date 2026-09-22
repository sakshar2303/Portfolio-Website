import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/5 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {year} {profile.name}. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
              LinkedIn
            </a>
          )}
          {profile.twitter && (
            <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
              Twitter
            </a>
          )}
        </div>
        
        <p className="text-sm text-gray-500">
          Designed & built by {profile.name}.
        </p>
      </div>
    </footer>
  );
}
