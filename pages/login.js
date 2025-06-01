return (
  <div className="p-4">
    <h1 className="text-xl font-bold mb-4">Login</h1>
    <form onSubmit={handleLogin}>
      <input
        className="border p-2 mb-2 w-full"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="border p-2 mb-2 w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        className="bg-blue-500 text-white w-full p-2"
        type="submit"
      >
        Login
      </button>
    </form>
    {message && <p className="mt-2 text-red-500">{message}</p>}
  </div>
)
