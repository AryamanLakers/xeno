export default function Navbar() {
  return (
    <div className="nav_bar">
      <div className="logo nav_common">Xeno</div>
      <div className="sign_in nav_common">
        <button class="gb1 gb" id="gb1">
          Login
        </button>
      </div>
      <div className="sign_up nav_common">
        <button class="gb2 gb" id="gb2">
          Sign Up
        </button>
      </div>
    </div>
  );
}
