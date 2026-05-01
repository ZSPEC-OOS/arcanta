import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const STORAGE_KEY = 'arcanta_api_models';

function loadModels() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function saveModels(models) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(models));
}

const emptyForm = { nickname: '', baseUrl: '', modelId: '', apiKey: '' };

function ApiKeysPage() {
  const navigate = useNavigate();
  const [models, setModels] = useState(loadModels);
  const [form, setForm] = useState(emptyForm);
  const [showKey, setShowKey] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('arcanta_auth')) {
      navigate('/login');
    }
  }, [navigate]);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  }

  function handleAdd(e) {
    e.preventDefault();
    if (!form.nickname.trim() || !form.baseUrl.trim() || !form.modelId.trim() || !form.apiKey.trim()) {
      setError('All fields are required.');
      return;
    }
    const updated = [...models, { ...form, id: Date.now() }];
    setModels(updated);
    saveModels(updated);
    setForm(emptyForm);
  }

  function handleDelete(id) {
    const updated = models.filter((m) => m.id !== id);
    setModels(updated);
    saveModels(updated);
  }

  function handleSignOut() {
    localStorage.removeItem('arcanta_auth');
    navigate('/login');
  }

  function toggleKey(id) {
    setShowKey((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="min-h-screen bg-arcanta-dark"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(17,168,255,0.12), transparent 45%), #020914',
      }}
    >
      {/* Top nav */}
      <header className="border-b border-white/8">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="/">
            <ImageWithFallback
              src="/assets/arcanta-emblem-horizontal.png"
              alt="Arcanta"
              fallbackLabel="ARCANTA"
              className="h-7 w-auto"
              style={{ mixBlendMode: 'screen' }}
            />
          </a>
          <button
            onClick={handleSignOut}
            className="text-xs font-medium text-white/45 hover:text-white/80 transition"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-10">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white">API Keys</h1>
          <p className="mt-1 text-sm text-white/45">Add and manage your AI model connections.</p>
        </div>

        {/* Add model form */}
        <div className="glass-card rounded-2xl px-6 py-6 mb-10">
          <h2 className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-5">Add Model</h2>

          <form onSubmit={handleAdd}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-white/55 uppercase tracking-wide" htmlFor="nickname">
                  Nickname
                </label>
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  value={form.nickname}
                  onChange={handleChange}
                  placeholder="e.g. My GPT-4o"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-arcanta-blue/60 focus:ring-1 focus:ring-arcanta-blue/30 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-white/55 uppercase tracking-wide" htmlFor="baseUrl">
                  Base URL
                </label>
                <input
                  id="baseUrl"
                  name="baseUrl"
                  type="url"
                  value={form.baseUrl}
                  onChange={handleChange}
                  placeholder="https://api.openai.com/v1"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-arcanta-blue/60 focus:ring-1 focus:ring-arcanta-blue/30 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-white/55 uppercase tracking-wide" htmlFor="modelId">
                  Model ID
                </label>
                <input
                  id="modelId"
                  name="modelId"
                  type="text"
                  value={form.modelId}
                  onChange={handleChange}
                  placeholder="gpt-4o"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-arcanta-blue/60 focus:ring-1 focus:ring-arcanta-blue/30 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-white/55 uppercase tracking-wide" htmlFor="apiKey">
                  API Key
                </label>
                <input
                  id="apiKey"
                  name="apiKey"
                  type="password"
                  value={form.apiKey}
                  onChange={handleChange}
                  placeholder="sk-••••••••••••••••"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-arcanta-blue/60 focus:ring-1 focus:ring-arcanta-blue/30 transition"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-400/90 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 mb-4">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="rounded-full bg-arcanta-blue/20 border border-arcanta-blue/50 px-6 py-2.5 text-sm font-semibold text-arcanta-blue transition hover:bg-arcanta-blue/30 active:scale-95"
            >
              + Add
            </button>
          </form>
        </div>

        {/* Models list */}
        {models.length === 0 ? (
          <div className="text-center py-16 text-white/25 text-sm">
            No models added yet. Fill in the form above to add your first model.
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {models.map((model) => (
              <div key={model.id} className="glass-card rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2">
                  <div>
                    <p className="text-[10px] font-medium text-white/35 uppercase tracking-wide mb-0.5">Nickname</p>
                    <p className="text-sm font-medium text-white truncate">{model.nickname}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-white/35 uppercase tracking-wide mb-0.5">Base URL</p>
                    <p className="text-sm text-white/70 truncate">{model.baseUrl}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-white/35 uppercase tracking-wide mb-0.5">Model ID</p>
                    <p className="text-sm text-white/70 truncate">{model.modelId}</p>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-[10px] font-medium text-white/35 uppercase tracking-wide mb-0.5">API Key</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-white/50 font-mono truncate">
                        {showKey[model.id] ? model.apiKey : '••••••••••••••••••••••••'}
                      </p>
                      <button
                        onClick={() => toggleKey(model.id)}
                        className="text-[11px] text-white/35 hover:text-white/70 transition shrink-0"
                      >
                        {showKey[model.id] ? 'Hide' : 'Show'}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(model.id)}
                  className="self-start sm:self-center shrink-0 rounded-xl border border-red-500/20 px-4 py-2 text-xs font-medium text-red-400/70 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/40 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default ApiKeysPage;
