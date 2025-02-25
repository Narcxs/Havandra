import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Havandra</h1>
          <p className="py-6">
            Explorez la météo précise et détaillée de Madagascar, des hauts
            plateaux aux côtes, pour une planification optimale de vos journées
            dans la Grande Île
          </p>
          <button className="btn btn-primary">
            <Link to="/app">Let's Go</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
