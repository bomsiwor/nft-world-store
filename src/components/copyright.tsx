export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black text-white py-4 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          © {currentYear} NFT World. All rights reserved.
        </p>
      </div>
    </div>
  );
}
