import { Download, Zap, Shield, Code2, Github, Terminal, Star, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-pink-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              femboyware
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#download" className="text-slate-300 hover:text-white transition-colors">Download</a>
            <a href="#docs" className="text-slate-300 hover:text-white transition-colors">Docs</a>
            <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all">
              <Github className="w-4 h-4" />
              GitHub
            </button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-8">
          <Star className="w-4 h-4 text-pink-400" />
          <span className="text-sm text-pink-300">Most Advanced Executor</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          The Ultimate
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roblox Executor
          </span>
        </h1>

        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Experience unmatched performance and stability with femboyware.
          The most powerful script execution engine for Roblox.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg shadow-pink-500/25">
            <Download className="w-5 h-5" />
            Download Now
          </button>
          <button className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 transition-all">
            <Code2 className="w-5 h-5" />
            View Docs
          </button>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-pink-500/10 bg-slate-900/50 backdrop-blur-sm p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-slate-500 ml-4">executor.lua</span>
          </div>
          <pre className="text-left text-sm">
            <code className="text-pink-400">
{`-- Execute any script with ease
local script = [[
  print("femboyware is running!")
  game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = 100
]]

femboyware.execute(script)`}
            </code>
          </pre>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-slate-400">Everything you need for seamless script execution</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-pink-500/50 transition-all">
            <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-slate-400">
              Optimized execution engine delivers instant script injection with zero lag.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fully Secure</h3>
            <p className="text-slate-400">
              Advanced anti-detection system keeps you safe with regular updates.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-pink-500/50 transition-all">
            <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Full API Support</h3>
            <p className="text-slate-400">
              Complete Lua API with support for all major script hubs and libraries.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Supported Features</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Script Hub Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Auto-Execute</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Script Tabs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Custom Functions</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Compatibility</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Windows 10/11</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">No Key System</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Regular Updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center bg-slate-800/50 border border-slate-700 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Download femboyware now and experience the best executor available.
          </p>
          <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-10 py-5 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg shadow-pink-500/25 mx-auto">
            <Download className="w-5 h-5" />
            Download femboyware v2.1.0
          </button>
          <p className="text-sm text-slate-500 mt-4">Windows 10/11 • Free Forever • No Key System</p>
        </div>
      </section>

      <footer className="border-t border-slate-700/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-pink-400" />
            <span className="font-semibold">femboyware</span>
            <span className="text-slate-500">© 2024</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
