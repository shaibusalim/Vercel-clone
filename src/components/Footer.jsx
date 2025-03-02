import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Products Section */}
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul>
              {["AI", "Enterprise", "Fluid Compute", "Next.js", "Observability", "Previews", "Rendering", "Security", "Turbo"].map((item) => (
                <li key={item} className="mb-2"><a href="#" className="text-gray-400 hover:text-white">{item}</a></li>
              ))}
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">v0 <FaExternalLinkAlt className="inline" /></a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul>
              {["Community", "Docs", "Guides", "Help", "Integrations", "Pricing", "Resources", "Solution Partners", "Templates"].map((item) => (
                <li key={item} className="mb-2"><a href="#" className="text-gray-400 hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul>
              {["About", "Blog", "Careers", "Changelog", "Contact Us", "Customers", "Partners", "Privacy Policy"].map((item) => (
                <li key={item} className="mb-2"><a href="#" className="text-gray-400 hover:text-white">{item}</a></li>
              ))}
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Legal <FaChevronDown className="inline" /></a></li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><FaGithub className="inline" /> GitHub</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><FaLinkedin className="inline" /> LinkedIn</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="inline" /> Twitter</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><FaYoutube className="inline" /> YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
