import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const CREDENTIALS = {
  email: 'jdzelazny@gmail.com',
  password: 'Arcanta1',
};

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email === CREDENTIALS.email && password === CREDENTIALS.password) {
        localStorage.setItem('arcanta_auth', '1');
        navigate('/api-keys');
      } else {
        setError('Invalid email or password.');
        setLoading(false);
      }
    }, 400);
  }

  return (
    <div className="min-h-screen bg-arcanta-dark flex flex-col items-center justify-center px-4"
      style={{
        background: 'radial-gradient(circle at 50% 25%, rgba(17,168,255,0.18), transparent 40%), radial-gradient(circle at 70% 35%, rgba(245,163,59,0.10), transparent 35%), #020914',
      }}
    >
      <div className="w-full max-w-sm">
        <a href="/" className="flex justify-center mb-8">
          <ImageWithFallback
            src="/assets/arcanta-emblem-horizontal.png"
            alt="Arcanta"
            fallbackLabel="ARCANTA"
            className="h-8 w-auto"
            style={{ mixBlendMode: 'screen' }}
          />
        </a>

        <div className="glass-card rounded-2xl px-7 py-8">
          <h1 className="text-xl font-semibold text-white mb-1">Sign in</h1>
          <p className="text-sm text-white/45 mb-6">Access your Arcanta dashboard</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-white/60 uppercase tracking-wide" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-arcanta-blue/60 focus:ring-1 focus:ring-arcanta-blue/30 transition"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-white/60 uppercase tracking-wide" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-arcanta-blue/60 focus:ring-1 focus:ring-arcanta-blue/30 transition"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-xs text-red-400/90 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-1 rounded-full bg-arcanta-blue/20 border border-arcanta-blue/50 py-3 text-sm font-semibold text-arcanta-blue transition hover:bg-arcanta-blue/30 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
